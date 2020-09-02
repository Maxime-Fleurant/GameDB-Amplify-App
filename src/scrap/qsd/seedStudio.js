import Amplify, { API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../../aws-exports';
import * as mutations from '../../graphql/mutations.ts';

const fs = require('fs');
const _ = require('lodash');

Amplify.configure(awsconfig);

fs.readFile('../data/studios.json', async (err, data) => {
  const gameArray = JSON.parse(data.toString());

  gameArray.forEach(async (elem) => {
    const inp = {
      name: elem.name,
      id: elem.id,
      country: elem.country,
      description: elem.description,
    };

    console.log(inp);
    try {
      const newGame = await API.graphql(
        graphqlOperation(mutations.createStudio, {
          input: inp,
        })
      );
    } catch (e) {
      console.log(e);
    }
  });
});
