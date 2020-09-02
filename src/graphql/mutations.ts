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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createStudio = /* GraphQL */ `
  mutation CreateStudio(
    $input: CreateStudioInput!
    $condition: ModelStudioConditionInput
  ) {
    createStudio(input: $input, condition: $condition) {
      id
      name
      country
      description
      createdAt
      updatedAt
    }
  }
`;
export const updateStudio = /* GraphQL */ `
  mutation UpdateStudio(
    $input: UpdateStudioInput!
    $condition: ModelStudioConditionInput
  ) {
    updateStudio(input: $input, condition: $condition) {
      id
      name
      country
      description
      createdAt
      updatedAt
    }
  }
`;
export const deleteStudio = /* GraphQL */ `
  mutation DeleteStudio(
    $input: DeleteStudioInput!
    $condition: ModelStudioConditionInput
  ) {
    deleteStudio(input: $input, condition: $condition) {
      id
      name
      country
      description
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
export const updatePlatform = /* GraphQL */ `
  mutation UpdatePlatform(
    $input: UpdatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    updatePlatform(input: $input, condition: $condition) {
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
export const deletePlatform = /* GraphQL */ `
  mutation DeletePlatform(
    $input: DeletePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    deletePlatform(input: $input, condition: $condition) {
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
export const createGameGenre = /* GraphQL */ `
  mutation CreateGameGenre(
    $input: CreateGameGenreInput!
    $condition: ModelGameGenreConditionInput
  ) {
    createGameGenre(input: $input, condition: $condition) {
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
export const updateGameGenre = /* GraphQL */ `
  mutation UpdateGameGenre(
    $input: UpdateGameGenreInput!
    $condition: ModelGameGenreConditionInput
  ) {
    updateGameGenre(input: $input, condition: $condition) {
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
export const deleteGameGenre = /* GraphQL */ `
  mutation DeleteGameGenre(
    $input: DeleteGameGenreInput!
    $condition: ModelGameGenreConditionInput
  ) {
    deleteGameGenre(input: $input, condition: $condition) {
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
export const createGameTheme = /* GraphQL */ `
  mutation CreateGameTheme(
    $input: CreateGameThemeInput!
    $condition: ModelGameThemeConditionInput
  ) {
    createGameTheme(input: $input, condition: $condition) {
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
export const updateGameTheme = /* GraphQL */ `
  mutation UpdateGameTheme(
    $input: UpdateGameThemeInput!
    $condition: ModelGameThemeConditionInput
  ) {
    updateGameTheme(input: $input, condition: $condition) {
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
export const deleteGameTheme = /* GraphQL */ `
  mutation DeleteGameTheme(
    $input: DeleteGameThemeInput!
    $condition: ModelGameThemeConditionInput
  ) {
    deleteGameTheme(input: $input, condition: $condition) {
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
