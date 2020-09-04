const fs = require('fs');
const _ = require('lodash');
const igdb = require('igdb-api-node').default;

fs.readFile('../data/finalGame.json', (err, data) => {
  const gameArray = JSON.parse(data.toString());
  const videoArray = [];
  gameArray.forEach((element) => {
    videoArray.push(...element.game_engines);
  });
  console.log(videoArray.length);
  console.log(_.uniq(videoArray).length);

  const start = async () => {
    const response = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['logo', 'name', 'platforms'])
      .limit(500)
      .where(`id = (${_.uniq(videoArray).join(',')})`)
      .request('/game_engines');

    console.log(response.data.length);
    fs.writeFile(
      '../data/engines2.json',
      JSON.stringify([response.data]),
      () => {
        console.log('done');
      }
    );
  };

  start();
});
