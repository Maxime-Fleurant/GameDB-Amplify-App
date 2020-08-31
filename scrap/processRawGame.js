const fs = require('fs');

fs.readFile('./data/rawGames.json', (err, data) => {
  const rawGameArray = JSON.parse(data.toString());

  console.log(rawGameArray[0]);

  const filteredRawGame = rawGameArray.filter((game) => {
    return (
      game.cover &&
      game.first_release_date &&
      game.game_engines &&
      game.game_engines.length &&
      game.involved_companies &&
      game.involved_companies.length &&
      game.name &&
      game.screenshots &&
      game.screenshots.length &&
      game.storyline &&
      game.summary &&
      game.videos &&
      game.videos.length
    );
  });
  console.log(filteredRawGame.length);
  fs.writeFile(
    './data/filteredRawGames.json',
    JSON.stringify(filteredRawGame),
    () => {
      console.log('done');
    }
  );
});
