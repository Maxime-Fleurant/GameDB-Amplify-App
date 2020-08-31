const fs = require('fs');
const _ = require('lodash');
const igdb = require('igdb-api-node').default;

fs.readFile('./data/filteredRawGames.json', (err, data) => {
  const gameArray = JSON.parse(data.toString());
  const videoArray = [];
  gameArray.forEach((element) => {
    videoArray.push(...element.videos);
  });
  console.log(videoArray.length);

  const part1 = _.slice(videoArray, 0, 500);
  const part2 = _.slice(videoArray, 500, 1000);
  const part3 = _.slice(videoArray, 1000, 1423);

  const start = async () => {
    const response = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['video_id'])
      .limit(500)
      .where(`id = (${part1.join(',')})`)
      .request('/game_videos');

    const response2 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['video_id'])
      .limit(500)
      .where(`id = (${part2.join(',')})`)
      .request('/game_videos');

    const response3 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
      .fields(['video_id'])
      .limit(500)
      .where(`id = (${part3.join(',')})`)
      .request('/game_videos');

    console.log(
      [...response.data, ...response2.data, ...response3.data].length
    );

    fs.writeFile(
      './data/videos.json',
      JSON.stringify([...response.data, ...response2.data, ...response3.data]),
      () => {
        console.log('done');
      }
    );
  };

  start();
});
