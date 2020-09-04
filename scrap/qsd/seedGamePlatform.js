const fs = require('fs');
const _ = require('lodash');

const final = [];

fs.readFile('../data/finalGame.json', async (err, data) => {
  const gameArray = JSON.parse(data.toString());

  gameArray.forEach(async (elem) => {
    elem.platforms.forEach(async (elemGenre) => {
      const inp = {
        gameId: elem.id,
        platformId: elemGenre,
      };

      console.log(inp);
      final.push(inp);
    });
  });

  fs.writeFile('../data/game_platform.json', JSON.stringify(final), () => {
    console.log('done');
  });
});
