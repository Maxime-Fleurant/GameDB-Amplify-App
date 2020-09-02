/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getStudio = /* GraphQL */ `
  query GetStudio($id: ID!) {
    getStudio(id: $id) {
      id
      name
      country
      description
      createdAt
      updatedAt
    }
  }
`;
export const listStudios = /* GraphQL */ `
  query ListStudios(
    $filter: ModelStudioFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStudios(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        country
        description
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getEngine = /* GraphQL */ `
  query GetEngine($id: ID!) {
    getEngine(id: $id) {
      id
      name
      createdAt
      updatedAt
    }
  }
`;
export const listEngines = /* GraphQL */ `
  query ListEngines(
    $filter: ModelEngineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEngines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlatform = /* GraphQL */ `
  query GetPlatform($id: ID!) {
    getPlatform(id: $id) {
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
export const listPlatforms = /* GraphQL */ `
  query ListPlatforms(
    $filter: ModelPlatformFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlatforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTheme = /* GraphQL */ `
  query GetTheme($id: ID!) {
    getTheme(id: $id) {
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
export const listThemes = /* GraphQL */ `
  query ListThemes(
    $filter: ModelThemeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThemes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGenre = /* GraphQL */ `
  query GetGenre($id: ID!) {
    getGenre(id: $id) {
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
export const listGenres = /* GraphQL */ `
  query ListGenres(
    $filter: ModelGenreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGenres(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGameGenre = /* GraphQL */ `
  query GetGameGenre($id: ID!) {
    getGameGenre(id: $id) {
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
export const listGameGenres = /* GraphQL */ `
  query ListGameGenres(
    $filter: ModelGameGenreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameGenres(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        genre {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGameTheme = /* GraphQL */ `
  query GetGameTheme($id: ID!) {
    getGameTheme(id: $id) {
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
export const listGameThemes = /* GraphQL */ `
  query ListGameThemes(
    $filter: ModelGameThemeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameThemes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        theme {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGamePlatform = /* GraphQL */ `
  query GetGamePlatform($id: ID!) {
    getGamePlatform(id: $id) {
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
export const listGamePlatforms = /* GraphQL */ `
  query ListGamePlatforms(
    $filter: ModelGamePlatformFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGamePlatforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          createdAt
          updatedAt
        }
        platform {
          id
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
