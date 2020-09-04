const fs = require('fs');
const _ = require('lodash');
const igdb = require('igdb-api-node').default;

fs.readFile('../data/gameJoinCompany.json', (err, data) => {
  const gameArray = JSON.parse(data.toString());
  const videoArray = [];
  gameArray.forEach((element) => {
    videoArray.push(element.company);
  });

  console.log(videoArray);
  console.log(_.uniq(videoArray));

  const start = async () => {
    const response = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['name', 'start_date', 'country', 'description'])
      .limit(500)
      .where(`id = (${_.compact(_.uniq(videoArray)).join(',')})`)
      .request('/companies');

    fs.writeFile('../data/studios.json', JSON.stringify(response.data), () => {
      console.log('done');
    });
  };

  start();
});
