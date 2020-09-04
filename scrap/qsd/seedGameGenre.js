const fs = require('fs');
const _ = require('lodash');

const final = [];

fs.readFile('../data/finalGame.json', async (err, data) => {
  const gameArray = JSON.parse(data.toString());

  gameArray.forEach(async (elem) => {
    elem.genres.forEach(async (elemGenre) => {
      const inp = {
        gameId: elem.id,
        genreId: elemGenre,
      };

      final.push(inp);
      console.log(inp);
    });
  });

  fs.writeFile('../data/game_genre.json', JSON.stringify(final), () => {
    console.log('done');
  });
});
