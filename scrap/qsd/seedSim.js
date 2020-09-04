const fs = require('fs');
const _ = require('lodash');

const final = [];

fs.readFile('../data/finalGame.json', async (err, data) => {
  const gameArray = JSON.parse(data.toString());

  gameArray.forEach(async (elem) => {
    elem.similar_games.forEach(async (elemGenre) => {
      const inp = {
        main_game_id: elem.id,
        Sim_game_id: elemGenre,
      };

      console.log(inp);
      final.push(inp);
    });
  });

  fs.writeFile('../data/simGames.json', JSON.stringify(final), () => {
    console.log('done');
  });
});
