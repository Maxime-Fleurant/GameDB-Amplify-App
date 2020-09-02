import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import * as mutations from '../../graphql/mutations.ts';

const fs = require('fs');
const _ = require('lodash');

Amplify.configure(awsconfig);

fs.readFile('../data/finalGame.json', async (err, data) => {
  const gameArray = JSON.parse(data.toString());

  gameArray.forEach(async (elem) => {
    elem.platforms.forEach(async (elemGenre) => {
      const inp = {
        gameId: elem.id,
        platformId: elemGenre,
      };

      console.log(inp);
      try {
        const newGame = await API.graphql(
          graphqlOperation(mutations.createGameGenre, {
            input: inp,
          })
        );
      } catch (e) {
        console.log(e);
      }
    });
  });
});
