const fs = require('fs');
const _ = require('lodash');

const final = [];

fs.readFile('../data/finalGame.json', async (err, data) => {
  const gameArray = JSON.parse(data.toString());

  gameArray.forEach(async (elem) => {
    elem.videos.forEach(async (elemGenre) => {
      const inp = {
        gameId: elem.id,
        url: elemGenre,
      };

      console.log(inp);
      final.push(inp);
    });
  });

  fs.writeFile('../data/videos.json', JSON.stringify(final), () => {
    console.log('done');
  });
});
