/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      name
      artworks
      cover
      videos
      screenshots
      ratingCountPop
      releaseDate
      storyline
      summary
      website
      companyId
      engineId
      company {
        id
        name
        logo
        country
        description
        creationDate
        website
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      engine {
        id
        name
        url
        logo
        platforms {
          nextToken
        }
        games {
          nextToken
        }
        createdAt
        updatedAt
      }
      genres {
        items {
          gameId
          genreId
          createdAt
          updatedAt
        }
        nextToken
      }
      themes {
        items {
          gameId
          themeId
          createdAt
          updatedAt
        }
        nextToken
      }
      simGames {
        items {
          mainGameId
          simGameId
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
        artworks
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        website
        companyId
        engineId
        company {
          id
          name
          logo
          country
          description
          creationDate
          website
          createdAt
          updatedAt
        }
        engine {
          id
          name
          url
          logo
          createdAt
          updatedAt
        }
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        simGames {
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
export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
      id
      name
      logo
      country
      description
      creationDate
      website
      games {
        items {
          id
          name
          artworks
          cover
          videos
          screenshots
          ratingCountPop
          releaseDate
          storyline
          summary
          website
          companyId
          engineId
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
export const listCompanys = /* GraphQL */ `
  query ListCompanys(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        logo
        country
        description
        creationDate
        website
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
export const getEngine = /* GraphQL */ `
  query GetEngine($id: ID!) {
    getEngine(id: $id) {
      id
      name
      url
      logo
      platforms {
        items {
          engineId
          platformId
          createdAt
          updatedAt
        }
        nextToken
      }
      games {
        items {
          id
          name
          artworks
          cover
          videos
          screenshots
          ratingCountPop
          releaseDate
          storyline
          summary
          website
          companyId
          engineId
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
        url
        logo
        platforms {
          nextToken
        }
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
export const getPlatform = /* GraphQL */ `
  query GetPlatform($id: ID!) {
    getPlatform(id: $id) {
      id
      name
      url
      logo
      summary
      games {
        items {
          gameId
          platformId
          createdAt
          updatedAt
        }
        nextToken
      }
      engines {
        items {
          engineId
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
        url
        logo
        summary
        games {
          nextToken
        }
        engines {
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
export const getGameSimGame = /* GraphQL */ `
  query GetGameSimGame($id: ID!) {
    getGameSimGame(id: $id) {
      simGame {
        id
        name
        artworks
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        website
        companyId
        engineId
        company {
          id
          name
          logo
          country
          description
          creationDate
          website
          createdAt
          updatedAt
        }
        engine {
          id
          name
          url
          logo
          createdAt
          updatedAt
        }
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        simGames {
          nextToken
        }
        platforms {
          nextToken
        }
        createdAt
        updatedAt
      }
      mainGameId
      simGameId
      createdAt
      updatedAt
    }
  }
`;
export const listGameSimGames = /* GraphQL */ `
  query ListGameSimGames(
    $filter: ModelGameSimGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameSimGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        simGame {
          id
          name
          artworks
          cover
          videos
          screenshots
          ratingCountPop
          releaseDate
          storyline
          summary
          website
          companyId
          engineId
          createdAt
          updatedAt
        }
        mainGameId
        simGameId
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
      gameId
      genreId
      game {
        id
        name
        artworks
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        website
        companyId
        engineId
        company {
          id
          name
          logo
          country
          description
          creationDate
          website
          createdAt
          updatedAt
        }
        engine {
          id
          name
          url
          logo
          createdAt
          updatedAt
        }
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        simGames {
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
        gameId
        genreId
        game {
          id
          name
          artworks
          cover
          videos
          screenshots
          ratingCountPop
          releaseDate
          storyline
          summary
          website
          companyId
          engineId
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
      gameId
      themeId
      game {
        id
        name
        artworks
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        website
        companyId
        engineId
        company {
          id
          name
          logo
          country
          description
          creationDate
          website
          createdAt
          updatedAt
        }
        engine {
          id
          name
          url
          logo
          createdAt
          updatedAt
        }
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        simGames {
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
        gameId
        themeId
        game {
          id
          name
          artworks
          cover
          videos
          screenshots
          ratingCountPop
          releaseDate
          storyline
          summary
          website
          companyId
          engineId
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
        artworks
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        website
        companyId
        engineId
        company {
          id
          name
          logo
          country
          description
          creationDate
          website
          createdAt
          updatedAt
        }
        engine {
          id
          name
          url
          logo
          createdAt
          updatedAt
        }
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        simGames {
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
          artworks
          cover
          videos
          screenshots
          ratingCountPop
          releaseDate
          storyline
          summary
          website
          companyId
          engineId
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
export const getEnginePlatform = /* GraphQL */ `
  query GetEnginePlatform($id: ID!) {
    getEnginePlatform(id: $id) {
      engineId
      platformId
      engine {
        id
        name
        artworks
        cover
        videos
        screenshots
        ratingCountPop
        releaseDate
        storyline
        summary
        website
        companyId
        engineId
        company {
          id
          name
          logo
          country
          description
          creationDate
          website
          createdAt
          updatedAt
        }
        engine {
          id
          name
          url
          logo
          createdAt
          updatedAt
        }
        genres {
          nextToken
        }
        themes {
          nextToken
        }
        simGames {
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
export const listEnginePlatforms = /* GraphQL */ `
  query ListEnginePlatforms(
    $filter: ModelEnginePlatformFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEnginePlatforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        engineId
        platformId
        engine {
          id
          name
          artworks
          cover
          videos
          screenshots
          ratingCountPop
          releaseDate
          storyline
          summary
          website
          companyId
          engineId
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
