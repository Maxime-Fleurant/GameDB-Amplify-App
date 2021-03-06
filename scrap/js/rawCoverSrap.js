const fs = require('fs');
const _ = require('lodash');
const igdb = require('igdb-api-node').default;

fs.readFile('./data/filteredRawGames.json', (err, data) => {
  const gameArray = JSON.parse(data.toString());
  const videoArray = [];
  gameArray.forEach((element) => {
    videoArray.push(element.cover);
  });
  console.log(videoArray.length);

  const start = async () => {
    const response = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['image_id'])
      .limit(500)
      .where(`id = (${videoArray.join(',')})`)
      .request('/covers');
    console.log(response.data.length);
    fs.writeFile('./data/covers.json', JSON.stringify([response.data]), () => {
      console.log('done');
    });
  };

  start();
});
