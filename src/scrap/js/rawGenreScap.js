const fs = require('fs');
const _ = require('lodash');
const igdb = require('igdb-api-node').default;

fs.readFile('./data/filteredRawGames.json', (err, data) => {
  const gameArray = JSON.parse(data.toString());
  const videoArray = [];
  gameArray.forEach((element) => {
    console.log(element.genres);
    videoArray.push(...element.genres);
  });

  console.log(_.uniq(videoArray).length);
  console.log(videoArray, _.uniq(videoArray));
  console.log();
  const start = async () => {
    const response = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['name'])
      .limit(500)
      .where(`id = (${_.uniq(videoArray).join(',')})`)
      .request('/genres');

    fs.writeFile('./data/genres.json', JSON.stringify(response.data), () => {
      console.log('done');
    });
  };

  start();
});
