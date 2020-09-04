const fs = require('fs');
const _ = require('lodash');
const igdb = require('igdb-api-node').default;

fs.readFile('./data/filteredRawGames.json', (err, data) => {
  const gameArray = JSON.parse(data.toString());
  const videoArray = [];
  gameArray.forEach((element) => {
    videoArray.push(...element.involved_companies);
  });

  // const filteredArray = videoArray.filter((elem) => {
  //   return elem.developer;
  // });

  const part1 = _.slice(videoArray, 0, 500);
  const part2 = _.slice(videoArray, 500, 1000);
  const part3 = _.slice(videoArray, 1000, 1424);

  const start = async () => {
    const response = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['game', 'company', 'developer'])
      .limit(500)
      .where(`id = (${part1.join(',')}) & developer=true`)
      .request('/involved_companies');

    const response2 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['game', 'company', 'developer'])
      .limit(500)
      .where(`id = (${part2.join(',')}) & developer=true`)
      .request('/involved_companies');

    const response3 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['game', 'company', 'developer'])
      .limit(500)
      .where(`id = (${part3.join(',')}) & developer=true`)
      .request('/involved_companies');

    console.log(gameArray.length);
    console.log(
      [...response.data, ...response2.data, ...response3.data].length
    );
    console.log(
      _.uniqBy([...response.data, ...response2.data, ...response3.data], 'game')
        .length
    );

    fs.writeFile(
      './data/gameJoinCompany.json',
      JSON.stringify(
        _.uniqBy(
          [...response.data, ...response2.data, ...response3.data],
          'game'
        )
      ),
      () => {
        console.log('done');
      }
    );
  };

  start();
});
