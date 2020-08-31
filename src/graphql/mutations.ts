/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
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
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
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
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
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
export const createEngine = /* GraphQL */ `
  mutation CreateEngine(
    $input: CreateEngineInput!
    $condition: ModelEngineConditionInput
  ) {
    createEngine(input: $input, condition: $condition) {
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
export const updateEngine = /* GraphQL */ `
  mutation UpdateEngine(
    $input: UpdateEngineInput!
    $condition: ModelEngineConditionInput
  ) {
    updateEngine(input: $input, condition: $condition) {
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
export const deleteEngine = /* GraphQL */ `
  mutation DeleteEngine(
    $input: DeleteEngineInput!
    $condition: ModelEngineConditionInput
  ) {
    deleteEngine(input: $input, condition: $condition) {
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
export const createPlatform = /* GraphQL */ `
  mutation CreatePlatform(
    $input: CreatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    createPlatform(input: $input, condition: $condition) {
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
export const updatePlatform = /* GraphQL */ `
  mutation UpdatePlatform(
    $input: UpdatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    updatePlatform(input: $input, condition: $condition) {
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
export const deletePlatform = /* GraphQL */ `
  mutation DeletePlatform(
    $input: DeletePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    deletePlatform(input: $input, condition: $condition) {
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
export const createTheme = /* GraphQL */ `
  mutation CreateTheme(
    $input: CreateThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    createTheme(input: $input, condition: $condition) {
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
export const updateTheme = /* GraphQL */ `
  mutation UpdateTheme(
    $input: UpdateThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    updateTheme(input: $input, condition: $condition) {
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
export const deleteTheme = /* GraphQL */ `
  mutation DeleteTheme(
    $input: DeleteThemeInput!
    $condition: ModelThemeConditionInput
  ) {
    deleteTheme(input: $input, condition: $condition) {
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
export const createGenre = /* GraphQL */ `
  mutation CreateGenre(
    $input: CreateGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    createGenre(input: $input, condition: $condition) {
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
export const updateGenre = /* GraphQL */ `
  mutation UpdateGenre(
    $input: UpdateGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    updateGenre(input: $input, condition: $condition) {
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
export const deleteGenre = /* GraphQL */ `
  mutation DeleteGenre(
    $input: DeleteGenreInput!
    $condition: ModelGenreConditionInput
  ) {
    deleteGenre(input: $input, condition: $condition) {
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
export const createGameSimGame = /* GraphQL */ `
  mutation CreateGameSimGame(
    $input: CreateGameSimGameInput!
    $condition: ModelGameSimGameConditionInput
  ) {
    createGameSimGame(input: $input, condition: $condition) {
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
export const updateGameSimGame = /* GraphQL */ `
  mutation UpdateGameSimGame(
    $input: UpdateGameSimGameInput!
    $condition: ModelGameSimGameConditionInput
  ) {
    updateGameSimGame(input: $input, condition: $condition) {
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
export const deleteGameSimGame = /* GraphQL */ `
  mutation DeleteGameSimGame(
    $input: DeleteGameSimGameInput!
    $condition: ModelGameSimGameConditionInput
  ) {
    deleteGameSimGame(input: $input, condition: $condition) {
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
export const createGameGenre = /* GraphQL */ `
  mutation CreateGameGenre(
    $input: CreateGameGenreInput!
    $condition: ModelGameGenreConditionInput
  ) {
    createGameGenre(input: $input, condition: $condition) {
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
export const updateGameGenre = /* GraphQL */ `
  mutation UpdateGameGenre(
    $input: UpdateGameGenreInput!
    $condition: ModelGameGenreConditionInput
  ) {
    updateGameGenre(input: $input, condition: $condition) {
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
export const deleteGameGenre = /* GraphQL */ `
  mutation DeleteGameGenre(
    $input: DeleteGameGenreInput!
    $condition: ModelGameGenreConditionInput
  ) {
    deleteGameGenre(input: $input, condition: $condition) {
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
export const createGameTheme = /* GraphQL */ `
  mutation CreateGameTheme(
    $input: CreateGameThemeInput!
    $condition: ModelGameThemeConditionInput
  ) {
    createGameTheme(input: $input, condition: $condition) {
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
export const updateGameTheme = /* GraphQL */ `
  mutation UpdateGameTheme(
    $input: UpdateGameThemeInput!
    $condition: ModelGameThemeConditionInput
  ) {
    updateGameTheme(input: $input, condition: $condition) {
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
export const deleteGameTheme = /* GraphQL */ `
  mutation DeleteGameTheme(
    $input: DeleteGameThemeInput!
    $condition: ModelGameThemeConditionInput
  ) {
    deleteGameTheme(input: $input, condition: $condition) {
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
export const createGamePlatform = /* GraphQL */ `
  mutation CreateGamePlatform(
    $input: CreateGamePlatformInput!
    $condition: ModelGamePlatformConditionInput
  ) {
    createGamePlatform(input: $input, condition: $condition) {
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
export const updateGamePlatform = /* GraphQL */ `
  mutation UpdateGamePlatform(
    $input: UpdateGamePlatformInput!
    $condition: ModelGamePlatformConditionInput
  ) {
    updateGamePlatform(input: $input, condition: $condition) {
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
export const deleteGamePlatform = /* GraphQL */ `
  mutation DeleteGamePlatform(
    $input: DeleteGamePlatformInput!
    $condition: ModelGamePlatformConditionInput
  ) {
    deleteGamePlatform(input: $input, condition: $condition) {
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
export const createEnginePlatform = /* GraphQL */ `
  mutation CreateEnginePlatform(
    $input: CreateEnginePlatformInput!
    $condition: ModelEnginePlatformConditionInput
  ) {
    createEnginePlatform(input: $input, condition: $condition) {
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
export const updateEnginePlatform = /* GraphQL */ `
  mutation UpdateEnginePlatform(
    $input: UpdateEnginePlatformInput!
    $condition: ModelEnginePlatformConditionInput
  ) {
    updateEnginePlatform(input: $input, condition: $condition) {
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
export const deleteEnginePlatform = /* GraphQL */ `
  mutation DeleteEnginePlatform(
    $input: DeleteEnginePlatformInput!
    $condition: ModelEnginePlatformConditionInput
  ) {
    deleteEnginePlatform(input: $input, condition: $condition) {
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
