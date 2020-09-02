/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGameInput = {
  id?: string | null,
  name: string,
  cover: string,
  videos: Array< string | null >,
  screenshots: Array< string | null >,
  ratingCountPop: number,
  releaseDate: string,
  storyline: string,
  summary: string,
  igdbId: string,
};

export type ModelGameConditionInput = {
  name?: ModelStringInput | null,
  cover?: ModelStringInput | null,
  videos?: ModelStringInput | null,
  screenshots?: ModelStringInput | null,
  ratingCountPop?: ModelIntInput | null,
  releaseDate?: ModelStringInput | null,
  storyline?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  igdbId?: ModelIDInput | null,
  and?: Array< ModelGameConditionInput | null > | null,
  or?: Array< ModelGameConditionInput | null > | null,
  not?: ModelGameConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateGameInput = {
  id: string,
  name?: string | null,
  cover?: string | null,
  videos?: Array< string | null > | null,
  screenshots?: Array< string | null > | null,
  ratingCountPop?: number | null,
  releaseDate?: string | null,
  storyline?: string | null,
  summary?: string | null,
  igdbId?: string | null,
};

export type DeleteGameInput = {
  id?: string | null,
};

export type CreateStudioInput = {
  id?: string | null,
  name: string,
  country?: string | null,
  description?: string | null,
};

export type ModelStudioConditionInput = {
  name?: ModelStringInput | null,
  country?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelStudioConditionInput | null > | null,
  or?: Array< ModelStudioConditionInput | null > | null,
  not?: ModelStudioConditionInput | null,
};

export type UpdateStudioInput = {
  id: string,
  name?: string | null,
  country?: string | null,
  description?: string | null,
};

export type DeleteStudioInput = {
  id?: string | null,
};

export type CreateEngineInput = {
  id?: string | null,
  name: string,
};

export type ModelEngineConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelEngineConditionInput | null > | null,
  or?: Array< ModelEngineConditionInput | null > | null,
  not?: ModelEngineConditionInput | null,
};

export type UpdateEngineInput = {
  id: string,
  name?: string | null,
};

export type DeleteEngineInput = {
  id?: string | null,
};

export type CreatePlatformInput = {
  id?: string | null,
  name: string,
};

export type ModelPlatformConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelPlatformConditionInput | null > | null,
  or?: Array< ModelPlatformConditionInput | null > | null,
  not?: ModelPlatformConditionInput | null,
};

export type UpdatePlatformInput = {
  id: string,
  name?: string | null,
};

export type DeletePlatformInput = {
  id?: string | null,
};

export type CreateThemeInput = {
  id?: string | null,
  name: string,
};

export type ModelThemeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelThemeConditionInput | null > | null,
  or?: Array< ModelThemeConditionInput | null > | null,
  not?: ModelThemeConditionInput | null,
};

export type UpdateThemeInput = {
  id: string,
  name?: string | null,
};

export type DeleteThemeInput = {
  id?: string | null,
};

export type CreateGenreInput = {
  id?: string | null,
  name: string,
};

export type ModelGenreConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelGenreConditionInput | null > | null,
  or?: Array< ModelGenreConditionInput | null > | null,
  not?: ModelGenreConditionInput | null,
};

export type UpdateGenreInput = {
  id: string,
  name?: string | null,
};

export type DeleteGenreInput = {
  id?: string | null,
};

export type CreateGameGenreInput = {
  id?: string | null,
  gameId: string,
  genreId: string,
};

export type ModelGameGenreConditionInput = {
  gameId?: ModelIDInput | null,
  genreId?: ModelIDInput | null,
  and?: Array< ModelGameGenreConditionInput | null > | null,
  or?: Array< ModelGameGenreConditionInput | null > | null,
  not?: ModelGameGenreConditionInput | null,
};

export type UpdateGameGenreInput = {
  id: string,
  gameId?: string | null,
  genreId?: string | null,
};

export type DeleteGameGenreInput = {
  id?: string | null,
};

export type CreateGameThemeInput = {
  id?: string | null,
  gameId: string,
  themeId: string,
};

export type ModelGameThemeConditionInput = {
  gameId?: ModelIDInput | null,
  themeId?: ModelIDInput | null,
  and?: Array< ModelGameThemeConditionInput | null > | null,
  or?: Array< ModelGameThemeConditionInput | null > | null,
  not?: ModelGameThemeConditionInput | null,
};

export type UpdateGameThemeInput = {
  id: string,
  gameId?: string | null,
  themeId?: string | null,
};

export type DeleteGameThemeInput = {
  id?: string | null,
};

export type CreateGamePlatformInput = {
  gameId: string,
  platformId: string,
};

export type ModelGamePlatformConditionInput = {
  gameId?: ModelIDInput | null,
  platformId?: ModelIDInput | null,
  and?: Array< ModelGamePlatformConditionInput | null > | null,
  or?: Array< ModelGamePlatformConditionInput | null > | null,
  not?: ModelGamePlatformConditionInput | null,
};

export type UpdateGamePlatformInput = {
  gameId?: string | null,
  platformId?: string | null,
};

export type DeleteGamePlatformInput = {
  id?: string | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  cover?: ModelStringInput | null,
  videos?: ModelStringInput | null,
  screenshots?: ModelStringInput | null,
  ratingCountPop?: ModelIntInput | null,
  releaseDate?: ModelStringInput | null,
  storyline?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  igdbId?: ModelIDInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelStudioFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  country?: ModelStringInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelStudioFilterInput | null > | null,
  or?: Array< ModelStudioFilterInput | null > | null,
  not?: ModelStudioFilterInput | null,
};

export type ModelEngineFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelEngineFilterInput | null > | null,
  or?: Array< ModelEngineFilterInput | null > | null,
  not?: ModelEngineFilterInput | null,
};

export type ModelPlatformFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelPlatformFilterInput | null > | null,
  or?: Array< ModelPlatformFilterInput | null > | null,
  not?: ModelPlatformFilterInput | null,
};

export type ModelThemeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelThemeFilterInput | null > | null,
  or?: Array< ModelThemeFilterInput | null > | null,
  not?: ModelThemeFilterInput | null,
};

export type ModelGenreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelGenreFilterInput | null > | null,
  or?: Array< ModelGenreFilterInput | null > | null,
  not?: ModelGenreFilterInput | null,
};

export type ModelGameGenreFilterInput = {
  id?: ModelIDInput | null,
  gameId?: ModelIDInput | null,
  genreId?: ModelIDInput | null,
  and?: Array< ModelGameGenreFilterInput | null > | null,
  or?: Array< ModelGameGenreFilterInput | null > | null,
  not?: ModelGameGenreFilterInput | null,
};

export type ModelGameThemeFilterInput = {
  id?: ModelIDInput | null,
  gameId?: ModelIDInput | null,
  themeId?: ModelIDInput | null,
  and?: Array< ModelGameThemeFilterInput | null > | null,
  or?: Array< ModelGameThemeFilterInput | null > | null,
  not?: ModelGameThemeFilterInput | null,
};

export type ModelGamePlatformFilterInput = {
  gameId?: ModelIDInput | null,
  platformId?: ModelIDInput | null,
  and?: Array< ModelGamePlatformFilterInput | null > | null,
  or?: Array< ModelGamePlatformFilterInput | null > | null,
  not?: ModelGamePlatformFilterInput | null,
};

export type CreateGameMutationVariables = {
  input: CreateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type CreateGameMutation = {
  createGame:  {
    __typename: "Game",
    id: string,
    name: string,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    igdbId: string,
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    themes:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameMutationVariables = {
  input: UpdateGameInput,
  condition?: ModelGameConditionInput | null,
};

export type UpdateGameMutation = {
  updateGame:  {
    __typename: "Game",
    id: string,
    name: string,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    igdbId: string,
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    themes:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameMutationVariables = {
  input: DeleteGameInput,
  condition?: ModelGameConditionInput | null,
};

export type DeleteGameMutation = {
  deleteGame:  {
    __typename: "Game",
    id: string,
    name: string,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    igdbId: string,
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    themes:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudioMutationVariables = {
  input: CreateStudioInput,
  condition?: ModelStudioConditionInput | null,
};

export type CreateStudioMutation = {
  createStudio:  {
    __typename: "Studio",
    id: string,
    name: string,
    country: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudioMutationVariables = {
  input: UpdateStudioInput,
  condition?: ModelStudioConditionInput | null,
};

export type UpdateStudioMutation = {
  updateStudio:  {
    __typename: "Studio",
    id: string,
    name: string,
    country: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudioMutationVariables = {
  input: DeleteStudioInput,
  condition?: ModelStudioConditionInput | null,
};

export type DeleteStudioMutation = {
  deleteStudio:  {
    __typename: "Studio",
    id: string,
    name: string,
    country: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateEngineMutationVariables = {
  input: CreateEngineInput,
  condition?: ModelEngineConditionInput | null,
};

export type CreateEngineMutation = {
  createEngine:  {
    __typename: "Engine",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateEngineMutationVariables = {
  input: UpdateEngineInput,
  condition?: ModelEngineConditionInput | null,
};

export type UpdateEngineMutation = {
  updateEngine:  {
    __typename: "Engine",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteEngineMutationVariables = {
  input: DeleteEngineInput,
  condition?: ModelEngineConditionInput | null,
};

export type DeleteEngineMutation = {
  deleteEngine:  {
    __typename: "Engine",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreatePlatformMutationVariables = {
  input: CreatePlatformInput,
  condition?: ModelPlatformConditionInput | null,
};

export type CreatePlatformMutation = {
  createPlatform:  {
    __typename: "Platform",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePlatformMutationVariables = {
  input: UpdatePlatformInput,
  condition?: ModelPlatformConditionInput | null,
};

export type UpdatePlatformMutation = {
  updatePlatform:  {
    __typename: "Platform",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePlatformMutationVariables = {
  input: DeletePlatformInput,
  condition?: ModelPlatformConditionInput | null,
};

export type DeletePlatformMutation = {
  deletePlatform:  {
    __typename: "Platform",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateThemeMutationVariables = {
  input: CreateThemeInput,
  condition?: ModelThemeConditionInput | null,
};

export type CreateThemeMutation = {
  createTheme:  {
    __typename: "Theme",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateThemeMutationVariables = {
  input: UpdateThemeInput,
  condition?: ModelThemeConditionInput | null,
};

export type UpdateThemeMutation = {
  updateTheme:  {
    __typename: "Theme",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteThemeMutationVariables = {
  input: DeleteThemeInput,
  condition?: ModelThemeConditionInput | null,
};

export type DeleteThemeMutation = {
  deleteTheme:  {
    __typename: "Theme",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGenreMutationVariables = {
  input: CreateGenreInput,
  condition?: ModelGenreConditionInput | null,
};

export type CreateGenreMutation = {
  createGenre:  {
    __typename: "Genre",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGenreMutationVariables = {
  input: UpdateGenreInput,
  condition?: ModelGenreConditionInput | null,
};

export type UpdateGenreMutation = {
  updateGenre:  {
    __typename: "Genre",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGenreMutationVariables = {
  input: DeleteGenreInput,
  condition?: ModelGenreConditionInput | null,
};

export type DeleteGenreMutation = {
  deleteGenre:  {
    __typename: "Genre",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGameGenreMutationVariables = {
  input: CreateGameGenreInput,
  condition?: ModelGameGenreConditionInput | null,
};

export type CreateGameGenreMutation = {
  createGameGenre:  {
    __typename: "GameGenre",
    id: string,
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genre:  {
      __typename: "Genre",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameGenreMutationVariables = {
  input: UpdateGameGenreInput,
  condition?: ModelGameGenreConditionInput | null,
};

export type UpdateGameGenreMutation = {
  updateGameGenre:  {
    __typename: "GameGenre",
    id: string,
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genre:  {
      __typename: "Genre",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameGenreMutationVariables = {
  input: DeleteGameGenreInput,
  condition?: ModelGameGenreConditionInput | null,
};

export type DeleteGameGenreMutation = {
  deleteGameGenre:  {
    __typename: "GameGenre",
    id: string,
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genre:  {
      __typename: "Genre",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGameThemeMutationVariables = {
  input: CreateGameThemeInput,
  condition?: ModelGameThemeConditionInput | null,
};

export type CreateGameThemeMutation = {
  createGameTheme:  {
    __typename: "GameTheme",
    id: string,
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    theme:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameThemeMutationVariables = {
  input: UpdateGameThemeInput,
  condition?: ModelGameThemeConditionInput | null,
};

export type UpdateGameThemeMutation = {
  updateGameTheme:  {
    __typename: "GameTheme",
    id: string,
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    theme:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameThemeMutationVariables = {
  input: DeleteGameThemeInput,
  condition?: ModelGameThemeConditionInput | null,
};

export type DeleteGameThemeMutation = {
  deleteGameTheme:  {
    __typename: "GameTheme",
    id: string,
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    theme:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGamePlatformMutationVariables = {
  input: CreateGamePlatformInput,
  condition?: ModelGamePlatformConditionInput | null,
};

export type CreateGamePlatformMutation = {
  createGamePlatform:  {
    __typename: "GamePlatform",
    gameId: string,
    platformId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    platform:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGamePlatformMutationVariables = {
  input: UpdateGamePlatformInput,
  condition?: ModelGamePlatformConditionInput | null,
};

export type UpdateGamePlatformMutation = {
  updateGamePlatform:  {
    __typename: "GamePlatform",
    gameId: string,
    platformId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    platform:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGamePlatformMutationVariables = {
  input: DeleteGamePlatformInput,
  condition?: ModelGamePlatformConditionInput | null,
};

export type DeleteGamePlatformMutation = {
  deleteGamePlatform:  {
    __typename: "GamePlatform",
    gameId: string,
    platformId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    platform:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetGameQueryVariables = {
  id: string,
};

export type GetGameQuery = {
  getGame:  {
    __typename: "Game",
    id: string,
    name: string,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    igdbId: string,
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    themes:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamesQueryVariables = {
  filter?: ModelGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamesQuery = {
  listGames:  {
    __typename: "ModelGameConnection",
    items:  Array< {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetStudioQueryVariables = {
  id: string,
};

export type GetStudioQuery = {
  getStudio:  {
    __typename: "Studio",
    id: string,
    name: string,
    country: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudiosQueryVariables = {
  filter?: ModelStudioFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudiosQuery = {
  listStudios:  {
    __typename: "ModelStudioConnection",
    items:  Array< {
      __typename: "Studio",
      id: string,
      name: string,
      country: string | null,
      description: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEngineQueryVariables = {
  id: string,
};

export type GetEngineQuery = {
  getEngine:  {
    __typename: "Engine",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListEnginesQueryVariables = {
  filter?: ModelEngineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnginesQuery = {
  listEngines:  {
    __typename: "ModelEngineConnection",
    items:  Array< {
      __typename: "Engine",
      id: string,
      name: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetPlatformQueryVariables = {
  id: string,
};

export type GetPlatformQuery = {
  getPlatform:  {
    __typename: "Platform",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPlatformsQueryVariables = {
  filter?: ModelPlatformFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPlatformsQuery = {
  listPlatforms:  {
    __typename: "ModelPlatformConnection",
    items:  Array< {
      __typename: "Platform",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetThemeQueryVariables = {
  id: string,
};

export type GetThemeQuery = {
  getTheme:  {
    __typename: "Theme",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListThemesQueryVariables = {
  filter?: ModelThemeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListThemesQuery = {
  listThemes:  {
    __typename: "ModelThemeConnection",
    items:  Array< {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGenreQueryVariables = {
  id: string,
};

export type GetGenreQuery = {
  getGenre:  {
    __typename: "Genre",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGenresQueryVariables = {
  filter?: ModelGenreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGenresQuery = {
  listGenres:  {
    __typename: "ModelGenreConnection",
    items:  Array< {
      __typename: "Genre",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGameGenreQueryVariables = {
  id: string,
};

export type GetGameGenreQuery = {
  getGameGenre:  {
    __typename: "GameGenre",
    id: string,
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genre:  {
      __typename: "Genre",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGameGenresQueryVariables = {
  filter?: ModelGameGenreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGameGenresQuery = {
  listGameGenres:  {
    __typename: "ModelGameGenreConnection",
    items:  Array< {
      __typename: "GameGenre",
      id: string,
      gameId: string,
      genreId: string,
      game:  {
        __typename: "Game",
        id: string,
        name: string,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        igdbId: string,
        createdAt: string,
        updatedAt: string,
      },
      genre:  {
        __typename: "Genre",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGameThemeQueryVariables = {
  id: string,
};

export type GetGameThemeQuery = {
  getGameTheme:  {
    __typename: "GameTheme",
    id: string,
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    theme:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGameThemesQueryVariables = {
  filter?: ModelGameThemeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGameThemesQuery = {
  listGameThemes:  {
    __typename: "ModelGameThemeConnection",
    items:  Array< {
      __typename: "GameTheme",
      id: string,
      gameId: string,
      themeId: string,
      game:  {
        __typename: "Game",
        id: string,
        name: string,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        igdbId: string,
        createdAt: string,
        updatedAt: string,
      },
      theme:  {
        __typename: "Theme",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetGamePlatformQueryVariables = {
  id: string,
};

export type GetGamePlatformQuery = {
  getGamePlatform:  {
    __typename: "GamePlatform",
    gameId: string,
    platformId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    platform:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGamePlatformsQueryVariables = {
  filter?: ModelGamePlatformFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGamePlatformsQuery = {
  listGamePlatforms:  {
    __typename: "ModelGamePlatformConnection",
    items:  Array< {
      __typename: "GamePlatform",
      gameId: string,
      platformId: string,
      game:  {
        __typename: "Game",
        id: string,
        name: string,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        igdbId: string,
        createdAt: string,
        updatedAt: string,
      },
      platform:  {
        __typename: "Theme",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      },
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateGameSubscription = {
  onCreateGame:  {
    __typename: "Game",
    id: string,
    name: string,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    igdbId: string,
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    themes:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSubscription = {
  onUpdateGame:  {
    __typename: "Game",
    id: string,
    name: string,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    igdbId: string,
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    themes:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSubscription = {
  onDeleteGame:  {
    __typename: "Game",
    id: string,
    name: string,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    igdbId: string,
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    themes:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    platforms:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudioSubscription = {
  onCreateStudio:  {
    __typename: "Studio",
    id: string,
    name: string,
    country: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudioSubscription = {
  onUpdateStudio:  {
    __typename: "Studio",
    id: string,
    name: string,
    country: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudioSubscription = {
  onDeleteStudio:  {
    __typename: "Studio",
    id: string,
    name: string,
    country: string | null,
    description: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEngineSubscription = {
  onCreateEngine:  {
    __typename: "Engine",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEngineSubscription = {
  onUpdateEngine:  {
    __typename: "Engine",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEngineSubscription = {
  onDeleteEngine:  {
    __typename: "Engine",
    id: string,
    name: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlatformSubscription = {
  onCreatePlatform:  {
    __typename: "Platform",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePlatformSubscription = {
  onUpdatePlatform:  {
    __typename: "Platform",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePlatformSubscription = {
  onDeletePlatform:  {
    __typename: "Platform",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGamePlatformConnection",
      items:  Array< {
        __typename: "GamePlatform",
        gameId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateThemeSubscription = {
  onCreateTheme:  {
    __typename: "Theme",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateThemeSubscription = {
  onUpdateTheme:  {
    __typename: "Theme",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteThemeSubscription = {
  onDeleteTheme:  {
    __typename: "Theme",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameThemeConnection",
      items:  Array< {
        __typename: "GameTheme",
        id: string,
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGenreSubscription = {
  onCreateGenre:  {
    __typename: "Genre",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGenreSubscription = {
  onUpdateGenre:  {
    __typename: "Genre",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGenreSubscription = {
  onDeleteGenre:  {
    __typename: "Genre",
    id: string,
    name: string,
    games:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
        id: string,
        gameId: string,
        genreId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameGenreSubscription = {
  onCreateGameGenre:  {
    __typename: "GameGenre",
    id: string,
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genre:  {
      __typename: "Genre",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameGenreSubscription = {
  onUpdateGameGenre:  {
    __typename: "GameGenre",
    id: string,
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genre:  {
      __typename: "Genre",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameGenreSubscription = {
  onDeleteGameGenre:  {
    __typename: "GameGenre",
    id: string,
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genre:  {
      __typename: "Genre",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameThemeSubscription = {
  onCreateGameTheme:  {
    __typename: "GameTheme",
    id: string,
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    theme:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameThemeSubscription = {
  onUpdateGameTheme:  {
    __typename: "GameTheme",
    id: string,
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    theme:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameThemeSubscription = {
  onDeleteGameTheme:  {
    __typename: "GameTheme",
    id: string,
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    theme:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGamePlatformSubscription = {
  onCreateGamePlatform:  {
    __typename: "GamePlatform",
    gameId: string,
    platformId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    platform:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGamePlatformSubscription = {
  onUpdateGamePlatform:  {
    __typename: "GamePlatform",
    gameId: string,
    platformId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    platform:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGamePlatformSubscription = {
  onDeleteGamePlatform:  {
    __typename: "GamePlatform",
    gameId: string,
    platformId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      igdbId: string,
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    platform:  {
      __typename: "Theme",
      id: string,
      name: string,
      games:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    createdAt: string,
    updatedAt: string,
  } | null,
};
