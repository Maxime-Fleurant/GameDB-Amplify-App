import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import * as mutations from '../../graphql/mutations';

const fs = require('fs');
const _ = require('lodash');

Amplify.configure(awsconfig);

fs.readFile('../data/finalGame.json', async (err, data) => {
  const gameArray = JSON.parse(data.toString());

  gameArray.forEach(async (elem) => {
    const inp = {
      name: elem.name,
      cover: elem.cover,
      videos: elem.videos,
      screenshots: elem.screenshots,
      ratingCountPop: elem.total_rating_count,
      releaseDate: elem.releaseDate,
      storyline: elem.storyline,
      summary: elem.summary,
      igdbId: elem.id,
    };

    console.log(inp);

    const newGame = await API.graphql(
      graphqlOperation(mutations.createGame, {
        input: inp,
      })
    );
  });
});
