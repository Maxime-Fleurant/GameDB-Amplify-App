/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
      id
      name
      cover
      videos
      screenshots
      ratingCountPop
      releaseDate
      storyline
      summary
      igdbId
      genres {
        items {
          id
          gameId
          genreId
          createdAt
          updatedAt
        }
        nextToken
      }
      themes {
        items {
          id
          gameId
          themeId
          createdAt
          updatedAt
        }
        nextToken
      }
      platforms {
        items {
          gameId
          platformId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
      id
      name
      cover
      videos
      screenshots
      ratingCountPop
      releaseDate
      storyline
      summary
      igdbId
      genres {
        items {
          id
          gameId
          genreId
          createdAt
          updatedAt
        }
        nextToken
      }
      themes {
        items {
          id
          gameId
          themeId
          createdAt
          updatedAt
        }
        nextToken
      }
      platforms {
        items {
          gameId
          platformId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
      id
      name
      cover
      videos
      screenshots
      ratingCountPop
      releaseDate
      storyline
      summary
      igdbId
      genres {
        items {
          id
          gameId
          genreId
          createdAt
          updatedAt
        }
        nextToken
      }
      themes {
        items {
          id
          gameId
          themeId
          createdAt
          updatedAt
        }
        nextToken
      }
      platforms {
        items {
          gameId
          platformId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateStudio = /* GraphQL */ `
  subscription OnCreateStudio {
    onCreateStudio {
      id
      name
      country
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStudio = /* GraphQL */ `
  subscription OnUpdateStudio {
    onUpdateStudio {
      id
      name
      country
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStudio = /* GraphQL */ `
  subscription OnDeleteStudio {
    onDeleteStudio {
      id
      name
      country
      description
      createdAt
      updatedAt
    }
  }
`;
export const onCreateEngine = /* GraphQL */ `
  subscription OnCreateEngine {
    onCreateEngine {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateEngine = /* GraphQL */ `
  subscription OnUpdateEngine {
    onUpdateEngine {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteEngine = /* GraphQL */ `
  subscription OnDeleteEngine {
    onDeleteEngine {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const onCreatePlatform = /* GraphQL */ `
  subscription OnCreatePlatform {
    onCreatePlatform {
      id
      name
      games {
        items {
          gameId
          platformId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlatform = /* GraphQL */ `
  subscription OnUpdatePlatform {
    onUpdatePlatform {
      id
      name
      games {
        items {
          gameId
          platformId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlatform = /* GraphQL */ `
  subscription OnDeletePlatform {
    onDeletePlatform {
      id
      name
      games {
        items {
          gameId
          platformId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateTheme = /* GraphQL */ `
  subscription OnCreateTheme {
    onCreateTheme {
      id
      name
      games {
        items {
          id
          gameId
          themeId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateTheme = /* GraphQL */ `
  subscription OnUpdateTheme {
    onUpdateTheme {
      id
      name
      games {
        items {
          id
          gameId
          themeId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteTheme = /* GraphQL */ `
  subscription OnDeleteTheme {
    onDeleteTheme {
      id
      name
      games {
        items {
          id
          gameId
          themeId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGenre = /* GraphQL */ `
  subscription OnCreateGenre {
    onCreateGenre {
      id
      name
      games {
        items {
          id
          gameId
          genreId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGenre = /* GraphQL */ `
  subscription OnUpdateGenre {
    onUpdateGenre {
      id
      name
      games {
        items {
          id
          gameId
          genreId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGenre = /* GraphQL */ `
  subscription OnDeleteGenre {
    onDeleteGenre {
      id
      name
      games {
        items {
          id
          gameId
          genreId
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGameGenre = /* GraphQL */ `
  subscription OnCreateGameGenre {
    onCreateGameGenre {
      id
      gameId
      genreId
      game {
        id
        name
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        igdbId
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        platforms {
          nextToken
        }
        createdAt
        updatedAt
      }
      genre {
        id
        name
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGameGenre = /* GraphQL */ `
  subscription OnUpdateGameGenre {
    onUpdateGameGenre {
      id
      gameId
      genreId
      game {
        id
        name
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        igdbId
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        platforms {
          nextToken
        }
        createdAt
        updatedAt
      }
      genre {
        id
        name
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGameGenre = /* GraphQL */ `
  subscription OnDeleteGameGenre {
    onDeleteGameGenre {
      id
      gameId
      genreId
      game {
        id
        name
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        igdbId
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        platforms {
          nextToken
        }
        createdAt
        updatedAt
      }
      genre {
        id
        name
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGameTheme = /* GraphQL */ `
  subscription OnCreateGameTheme {
    onCreateGameTheme {
      id
      gameId
      themeId
      game {
        id
        name
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        igdbId
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        platforms {
          nextToken
        }
        createdAt
        updatedAt
      }
      theme {
        id
        name
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGameTheme = /* GraphQL */ `
  subscription OnUpdateGameTheme {
    onUpdateGameTheme {
      id
      gameId
      themeId
      game {
        id
        name
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        igdbId
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        platforms {
          nextToken
        }
        createdAt
        updatedAt
      }
      theme {
        id
        name
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGameTheme = /* GraphQL */ `
  subscription OnDeleteGameTheme {
    onDeleteGameTheme {
      id
      gameId
      themeId
      game {
        id
        name
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        igdbId
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        platforms {
          nextToken
        }
        createdAt
        updatedAt
      }
      theme {
        id
        name
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateGamePlatform = /* GraphQL */ `
  subscription OnCreateGamePlatform {
    onCreateGamePlatform {
      gameId
      platformId
      game {
        id
        name
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        igdbId
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        platforms {
          nextToken
        }
        createdAt
        updatedAt
      }
      platform {
        id
        name
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateGamePlatform = /* GraphQL */ `
  subscription OnUpdateGamePlatform {
    onUpdateGamePlatform {
      gameId
      platformId
      game {
        id
        name
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        igdbId
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        platforms {
          nextToken
        }
        createdAt
        updatedAt
      }
      platform {
        id
        name
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteGamePlatform = /* GraphQL */ `
  subscription OnDeleteGamePlatform {
    onDeleteGamePlatform {
      gameId
      platformId
      game {
        id
        name
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        igdbId
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        platforms {
          nextToken
        }
        createdAt
        updatedAt
      }
      platform {
        id
        name
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
