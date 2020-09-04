const fs = require('fs');
const _ = require('lodash');

fs.readFile('../data/finalGame.json', async (err, data) => {
  const gameArray = JSON.parse(data.toString());

  const final = [];

  gameArray.forEach(async (elem) => {
    elem.game_engines.forEach(async (elemGenre) => {
      const inp = {
        gameId: elem.id,
        engineId: elemGenre,
      };

      console.log(inp);
      final.push(inp);
    });
  });

  fs.writeFile('../data/game_engine.json', JSON.stringify(final), () => {
    console.log('done');
  });
});
