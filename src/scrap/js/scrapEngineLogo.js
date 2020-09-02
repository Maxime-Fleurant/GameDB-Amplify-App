const fs = require('fs');
const _ = require('lodash');
const igdb = require('igdb-api-node').default;

fs.readFile('../data/engines.json', (err, data) => {
  const gameArray = JSON.parse(data.toString());
  const videoArray = [];
  gameArray[0].forEach((element) => {
    videoArray.push(element.logo);
  });

  console.log(videoArray);
  console.log(_.compact(_.uniq(videoArray)));

  const start = async () => {
    const response = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['image_id'])
      .limit(500)
      .where(`id = (${_.compact(_.uniq(videoArray)).join(',')})`)
      .request('/game_engine_logos');

    fs.writeFile(
      '../data/engineLogo.json',
      JSON.stringify([response.data]),
      () => {
        console.log('done');
      }
    );
  };

  start();
});
