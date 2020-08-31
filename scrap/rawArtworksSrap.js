const fs = require('fs');
const _ = require('lodash');
const igdb = require('igdb-api-node').default;

fs.readFile('./data/filteredRawGames.json', (err, data) => {
  const gameArray = JSON.parse(data.toString());
  const artworksArray = [];
  gameArray.forEach((element) => {
    artworksArray.push(...element.screenshots);
  });
  console.log(artworksArray.length);
  const part1 = _.slice(artworksArray, 0, 500);
  const part2 = _.slice(artworksArray, 500, 1000);
  const part3 = _.slice(artworksArray, 1000, 1500);
  const part4 = _.slice(artworksArray, 1500, 2000);
  const part5 = _.slice(artworksArray, 2000, 2500);
  const part6 = _.slice(artworksArray, 2500, 3000);
  const part7 = _.slice(artworksArray, 3000, 3144);

  const finalArray = [];

  const start = async () => {
    const response = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['image_id'])
      .limit(500)
      .where(`id = (${part1.join(',')})`)
      .request('/screenshots');

    const response2 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['image_id'])
      .limit(500)
      .where(`id = (${part2.join(',')})`)
      .request('/screenshots');

    const response3 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['image_id'])
      .limit(500)
      .where(`id = (${part3.join(',')})`)
      .request('/screenshots');

    const response4 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['image_id'])
      .limit(500)
      .where(`id = (${part4.join(',')})`)
      .request('/screenshots');

    const response5 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['image_id'])
      .limit(500)
      .where(`id = (${part5.join(',')})`)
      .request('/screenshots');

    const response6 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['image_id'])
      .limit(500)
      .where(`id = (${part6.join(',')})`)
      .request('/screenshots');

    const response7 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['image_id'])
      .limit(500)
      .where(`id = (${part7.join(',')})`)
      .request('/screenshots');
    console.log(
      [
        ...response.data,
        ...response2.data,
        ...response3.data,
        ...response4.data,
        ...response5.data,
        ...response6.data,
        ...response7.data,
      ].length
    );
    fs.writeFile(
      './data/screenshots.json',
      JSON.stringify([
        ...response.data,
        ...response2.data,
        ...response3.data,
        ...response4.data,
        ...response5.data,
        ...response6.data,
        ...response7.data,
      ]),
      () => {
        console.log('done');
      }
    );
  };

  start();
});
