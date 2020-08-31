/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany {
    onCreateCompany {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany {
    onUpdateCompany {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany {
    onDeleteCompany {
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
export const onCreateEngine = /* GraphQL */ `
  subscription OnCreateEngine {
    onCreateEngine {
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
export const onUpdateEngine = /* GraphQL */ `
  subscription OnUpdateEngine {
    onUpdateEngine {
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
export const onDeleteEngine = /* GraphQL */ `
  subscription OnDeleteEngine {
    onDeleteEngine {
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
export const onCreatePlatform = /* GraphQL */ `
  subscription OnCreatePlatform {
    onCreatePlatform {
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
export const onUpdatePlatform = /* GraphQL */ `
  subscription OnUpdatePlatform {
    onUpdatePlatform {
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
export const onDeletePlatform = /* GraphQL */ `
  subscription OnDeletePlatform {
    onDeletePlatform {
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
export const onCreateTheme = /* GraphQL */ `
  subscription OnCreateTheme {
    onCreateTheme {
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
export const onUpdateTheme = /* GraphQL */ `
  subscription OnUpdateTheme {
    onUpdateTheme {
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
export const onDeleteTheme = /* GraphQL */ `
  subscription OnDeleteTheme {
    onDeleteTheme {
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
export const onCreateGenre = /* GraphQL */ `
  subscription OnCreateGenre {
    onCreateGenre {
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
export const onUpdateGenre = /* GraphQL */ `
  subscription OnUpdateGenre {
    onUpdateGenre {
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
export const onDeleteGenre = /* GraphQL */ `
  subscription OnDeleteGenre {
    onDeleteGenre {
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
export const onCreateGameSimGame = /* GraphQL */ `
  subscription OnCreateGameSimGame {
    onCreateGameSimGame {
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
export const onUpdateGameSimGame = /* GraphQL */ `
  subscription OnUpdateGameSimGame {
    onUpdateGameSimGame {
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
export const onDeleteGameSimGame = /* GraphQL */ `
  subscription OnDeleteGameSimGame {
    onDeleteGameSimGame {
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
export const onCreateGameGenre = /* GraphQL */ `
  subscription OnCreateGameGenre {
    onCreateGameGenre {
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
export const onUpdateGameGenre = /* GraphQL */ `
  subscription OnUpdateGameGenre {
    onUpdateGameGenre {
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
export const onDeleteGameGenre = /* GraphQL */ `
  subscription OnDeleteGameGenre {
    onDeleteGameGenre {
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
export const onCreateGameTheme = /* GraphQL */ `
  subscription OnCreateGameTheme {
    onCreateGameTheme {
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
export const onUpdateGameTheme = /* GraphQL */ `
  subscription OnUpdateGameTheme {
    onUpdateGameTheme {
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
export const onDeleteGameTheme = /* GraphQL */ `
  subscription OnDeleteGameTheme {
    onDeleteGameTheme {
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
export const onCreateGamePlatform = /* GraphQL */ `
  subscription OnCreateGamePlatform {
    onCreateGamePlatform {
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
export const onUpdateGamePlatform = /* GraphQL */ `
  subscription OnUpdateGamePlatform {
    onUpdateGamePlatform {
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
export const onDeleteGamePlatform = /* GraphQL */ `
  subscription OnDeleteGamePlatform {
    onDeleteGamePlatform {
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
export const onCreateEnginePlatform = /* GraphQL */ `
  subscription OnCreateEnginePlatform {
    onCreateEnginePlatform {
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
export const onUpdateEnginePlatform = /* GraphQL */ `
  subscription OnUpdateEnginePlatform {
    onUpdateEnginePlatform {
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
export const onDeleteEnginePlatform = /* GraphQL */ `
  subscription OnDeleteEnginePlatform {
    onDeleteEnginePlatform {
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
