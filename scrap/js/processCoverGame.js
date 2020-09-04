const fs = require('fs');
const _ = require('lodash');
const igdb = require('igdb-api-node').default;

fs.readFile('../data/filteredRawGames.json', (err, rawGameArray) => {
  fs.readFile('../data/covers.json', (err2, coverArray) => {
    const gameArray = JSON.parse(rawGameArray.toString());
    const coverArrayString = JSON.parse(coverArray.toString());

    const newGameArray = gameArray.map((element) => {
      return {
        ...element,
        cover: coverArrayString[0].find((elem) => {
          return elem.id === element.cover;
        }).image_id,
      };
    });

    fs.readFile('../data/screenshots.json', (err3, rawScreens) => {
      const screensArray = JSON.parse(rawScreens.toString());

      const newGameArray2 = newGameArray.map((element) => {
        return {
          ...element,
          screenshots: screensArray
            .filter((elem) => {
              return element.screenshots.find((elscreen) => {
                return elscreen === elem.id;
              });
            })
            .map((screnSelect) => screnSelect.image_id),
        };
      });

      fs.readFile('../data/videos.json', (err4, rawVideos) => {
        const rawVideosList = JSON.parse(rawVideos.toString());

        const newGameArray3 = newGameArray2.map((element) => {
          return {
            ...element,
            videos: rawVideosList
              .filter((elem) => {
                return element.videos.find((elscreen) => {
                  return elscreen === elem.id;
                });
              })
              .map((screnSelect) => screnSelect.video_id),
          };
        });

        const dataArrayFil = newGameArray3.map((elem) => {
          const newDate = new Date(elem.first_release_date * 1000);
          return {
            ...elem,
            releaseDate: `${newDate.getFullYear()}-${
              newDate.getMonth() + 1 < 10 ? 0 : ''
            }${newDate.getMonth() + 1}-${
              newDate.getDate() < 10 ? 0 : ''
            }${newDate.getDate()}`,
          };
        });

        fs.writeFile(
          '../data/finalGame.json',
          JSON.stringify(dataArrayFil),
          () => {
            console.log('done');
          }
        );
      });
    });
  });
});
