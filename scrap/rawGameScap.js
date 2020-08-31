const igdb = require('igdb-api-node').default;
const fs = require('fs');

console.log('hello');

const start = async () => {
  const response = await igdb('1ee55175d56151fcddf8dfab44921ee2')
    .fields([
      'name',
      'cover',
      'videos',
      'involved_companies',
      'screenshots',
      'game_engines',
      'total_rating_count',
      'first_release_date',
      'storyline',
      'summary',
    ])
    .where(`total_rating_count != null`)
    .limit(500)

    .sort('total_rating_count', 'desc')

    .request('/games');

  const response2 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
    .fields([
      'name',
      'cover',
      'videos',
      'involved_companies',
      'screenshots',
      'game_engines',
      'total_rating_count',
      'first_release_date',
      'storyline',
      'summary',
    ])
    .where(`total_rating_count != null`)
    .limit(500)
    .offset(500)

    .sort('total_rating_count', 'desc')

    .request('/games');

  const response3 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
    .fields([
      'name',
      'cover',
      'videos',
      'involved_companies',
      'screenshots',
      'game_engines',
      'total_rating_count',
      'first_release_date',
      'storyline',
      'summary',
    ])
    .where(`total_rating_count != null`)
    .limit(500)
    .offset(1000)

    .sort('total_rating_count', 'desc')

    .request('/games');

  const response4 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
    .fields([
      'name',
      'cover',
      'videos',
      'involved_companies',
      'screenshots',
      'game_engines',
      'total_rating_count',
      'first_release_date',
      'storyline',
      'summary',
    ])
    .where(`total_rating_count != null`)
    .limit(500)
    .offset(1500)

    .sort('total_rating_count', 'desc')

    .request('/games');

  const response5 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
    .fields([
      'name',
      'cover',
      'videos',
      'involved_companies',
      'screenshots',
      'game_engines',
      'total_rating_count',
      'first_release_date',
      'storyline',
      'summary',
    ])
    .where(`total_rating_count != null`)
    .limit(500)
    .offset(2000)

    .sort('total_rating_count', 'desc')

    .request('/games');

  const response6 = await igdb('1ee55175d56151fcddf8dfab44921ee2')
    .fields([
      'name',
      'cover',
      'videos',
      'involved_companies',
      'screenshots',
      'game_engines',
      'total_rating_count',
      'first_release_date',
      'storyline',
      'summary',
    ])
    .where(`total_rating_count != null`)
    .limit(500)
    .offset(2500)

    .sort('total_rating_count', 'desc')

    .request('/games');

  fs.writeFile(
    './data/rawGames.json',
    JSON.stringify([
      ...response.data,
      ...response2.data,
      ...response3.data,
      ...response4.data,
      ...response5.data,
      ...response6.data,
    ]),
    () => {
      console.log('done');
    }
  );
};

start();
