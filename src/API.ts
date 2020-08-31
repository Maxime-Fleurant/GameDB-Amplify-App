/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateGameInput = {
  id?: string | null,
  name: string,
  artworks: Array< string | null >,
  cover: string,
  videos: Array< string | null >,
  screenshots: Array< string | null >,
  ratingCountPop: number,
  releaseDate: string,
  storyline: string,
  summary: string,
  website?: string | null,
  companyId: string,
  engineId: string,
};

export type ModelGameConditionInput = {
  name?: ModelStringInput | null,
  artworks?: ModelStringInput | null,
  cover?: ModelStringInput | null,
  videos?: ModelStringInput | null,
  screenshots?: ModelStringInput | null,
  ratingCountPop?: ModelIntInput | null,
  releaseDate?: ModelStringInput | null,
  storyline?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  website?: ModelStringInput | null,
  companyId?: ModelIDInput | null,
  engineId?: ModelIDInput | null,
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
  artworks?: Array< string | null > | null,
  cover?: string | null,
  videos?: Array< string | null > | null,
  screenshots?: Array< string | null > | null,
  ratingCountPop?: number | null,
  releaseDate?: string | null,
  storyline?: string | null,
  summary?: string | null,
  website?: string | null,
  companyId?: string | null,
  engineId?: string | null,
};

export type DeleteGameInput = {
  id?: string | null,
};

export type CreateCompanyInput = {
  id?: string | null,
  name: string,
  logo: string,
  country: string,
  description?: string | null,
  creationDate: string,
  website?: string | null,
};

export type ModelCompanyConditionInput = {
  name?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  country?: ModelStringInput | null,
  description?: ModelStringInput | null,
  creationDate?: ModelStringInput | null,
  website?: ModelStringInput | null,
  and?: Array< ModelCompanyConditionInput | null > | null,
  or?: Array< ModelCompanyConditionInput | null > | null,
  not?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyInput = {
  id: string,
  name?: string | null,
  logo?: string | null,
  country?: string | null,
  description?: string | null,
  creationDate?: string | null,
  website?: string | null,
};

export type DeleteCompanyInput = {
  id?: string | null,
};

export type CreateEngineInput = {
  id?: string | null,
  name: string,
  url: string,
  logo: string,
};

export type ModelEngineConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelEngineConditionInput | null > | null,
  or?: Array< ModelEngineConditionInput | null > | null,
  not?: ModelEngineConditionInput | null,
};

export type UpdateEngineInput = {
  id: string,
  name?: string | null,
  url?: string | null,
  logo?: string | null,
};

export type DeleteEngineInput = {
  id?: string | null,
};

export type CreatePlatformInput = {
  id?: string | null,
  name: string,
  url: string,
  logo: string,
  summary: string,
};

export type ModelPlatformConditionInput = {
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  and?: Array< ModelPlatformConditionInput | null > | null,
  or?: Array< ModelPlatformConditionInput | null > | null,
  not?: ModelPlatformConditionInput | null,
};

export type UpdatePlatformInput = {
  id: string,
  name?: string | null,
  url?: string | null,
  logo?: string | null,
  summary?: string | null,
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

export type CreateGameSimGameInput = {
  mainGameId: string,
  simGameId: string,
};

export type ModelGameSimGameConditionInput = {
  mainGameId?: ModelIDInput | null,
  simGameId?: ModelIDInput | null,
  and?: Array< ModelGameSimGameConditionInput | null > | null,
  or?: Array< ModelGameSimGameConditionInput | null > | null,
  not?: ModelGameSimGameConditionInput | null,
};

export type UpdateGameSimGameInput = {
  mainGameId?: string | null,
  simGameId?: string | null,
};

export type DeleteGameSimGameInput = {
  id?: string | null,
};

export type CreateGameGenreInput = {
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
  gameId?: string | null,
  genreId?: string | null,
};

export type DeleteGameGenreInput = {
  id?: string | null,
};

export type CreateGameThemeInput = {
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

export type CreateEnginePlatformInput = {
  engineId: string,
  platformId: string,
};

export type ModelEnginePlatformConditionInput = {
  engineId?: ModelIDInput | null,
  platformId?: ModelIDInput | null,
  and?: Array< ModelEnginePlatformConditionInput | null > | null,
  or?: Array< ModelEnginePlatformConditionInput | null > | null,
  not?: ModelEnginePlatformConditionInput | null,
};

export type UpdateEnginePlatformInput = {
  engineId?: string | null,
  platformId?: string | null,
};

export type DeleteEnginePlatformInput = {
  id?: string | null,
};

export type ModelGameFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  artworks?: ModelStringInput | null,
  cover?: ModelStringInput | null,
  videos?: ModelStringInput | null,
  screenshots?: ModelStringInput | null,
  ratingCountPop?: ModelIntInput | null,
  releaseDate?: ModelStringInput | null,
  storyline?: ModelStringInput | null,
  summary?: ModelStringInput | null,
  website?: ModelStringInput | null,
  companyId?: ModelIDInput | null,
  engineId?: ModelIDInput | null,
  and?: Array< ModelGameFilterInput | null > | null,
  or?: Array< ModelGameFilterInput | null > | null,
  not?: ModelGameFilterInput | null,
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  country?: ModelStringInput | null,
  description?: ModelStringInput | null,
  creationDate?: ModelStringInput | null,
  website?: ModelStringInput | null,
  and?: Array< ModelCompanyFilterInput | null > | null,
  or?: Array< ModelCompanyFilterInput | null > | null,
  not?: ModelCompanyFilterInput | null,
};

export type ModelEngineFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  and?: Array< ModelEngineFilterInput | null > | null,
  or?: Array< ModelEngineFilterInput | null > | null,
  not?: ModelEngineFilterInput | null,
};

export type ModelPlatformFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  url?: ModelStringInput | null,
  logo?: ModelStringInput | null,
  summary?: ModelStringInput | null,
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

export type ModelGameSimGameFilterInput = {
  mainGameId?: ModelIDInput | null,
  simGameId?: ModelIDInput | null,
  and?: Array< ModelGameSimGameFilterInput | null > | null,
  or?: Array< ModelGameSimGameFilterInput | null > | null,
  not?: ModelGameSimGameFilterInput | null,
};

export type ModelGameGenreFilterInput = {
  gameId?: ModelIDInput | null,
  genreId?: ModelIDInput | null,
  and?: Array< ModelGameGenreFilterInput | null > | null,
  or?: Array< ModelGameGenreFilterInput | null > | null,
  not?: ModelGameGenreFilterInput | null,
};

export type ModelGameThemeFilterInput = {
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

export type ModelEnginePlatformFilterInput = {
  engineId?: ModelIDInput | null,
  platformId?: ModelIDInput | null,
  and?: Array< ModelEnginePlatformFilterInput | null > | null,
  or?: Array< ModelEnginePlatformFilterInput | null > | null,
  not?: ModelEnginePlatformFilterInput | null,
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
    artworks: Array< string | null >,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    website: string | null,
    companyId: string,
    engineId: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      logo: string,
      country: string,
      description: string | null,
      creationDate: string,
      website: string | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    engine:  {
      __typename: "Engine",
      id: string,
      name: string,
      url: string,
      logo: string,
      platforms:  {
        __typename: "ModelEnginePlatformConnection",
        nextToken: string | null,
      } | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
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
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    simGames:  {
      __typename: "ModelGameSimGameConnection",
      items:  Array< {
        __typename: "GameSimGame",
        mainGameId: string,
        simGameId: string,
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
    artworks: Array< string | null >,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    website: string | null,
    companyId: string,
    engineId: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      logo: string,
      country: string,
      description: string | null,
      creationDate: string,
      website: string | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    engine:  {
      __typename: "Engine",
      id: string,
      name: string,
      url: string,
      logo: string,
      platforms:  {
        __typename: "ModelEnginePlatformConnection",
        nextToken: string | null,
      } | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
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
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    simGames:  {
      __typename: "ModelGameSimGameConnection",
      items:  Array< {
        __typename: "GameSimGame",
        mainGameId: string,
        simGameId: string,
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
    artworks: Array< string | null >,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    website: string | null,
    companyId: string,
    engineId: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      logo: string,
      country: string,
      description: string | null,
      creationDate: string,
      website: string | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    engine:  {
      __typename: "Engine",
      id: string,
      name: string,
      url: string,
      logo: string,
      platforms:  {
        __typename: "ModelEnginePlatformConnection",
        nextToken: string | null,
      } | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
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
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    simGames:  {
      __typename: "ModelGameSimGameConnection",
      items:  Array< {
        __typename: "GameSimGame",
        mainGameId: string,
        simGameId: string,
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

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type CreateCompanyMutation = {
  createCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    logo: string,
    country: string,
    description: string | null,
    creationDate: string,
    website: string | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type UpdateCompanyMutation = {
  updateCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    logo: string,
    country: string,
    description: string | null,
    creationDate: string,
    website: string | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput,
  condition?: ModelCompanyConditionInput | null,
};

export type DeleteCompanyMutation = {
  deleteCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    logo: string,
    country: string,
    description: string | null,
    creationDate: string,
    website: string | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    url: string,
    logo: string,
    platforms:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    url: string,
    logo: string,
    platforms:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    url: string,
    logo: string,
    platforms:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
    url: string,
    logo: string,
    summary: string,
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
    engines:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
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
    url: string,
    logo: string,
    summary: string,
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
    engines:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
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
    url: string,
    logo: string,
    summary: string,
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
    engines:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
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

export type CreateGameSimGameMutationVariables = {
  input: CreateGameSimGameInput,
  condition?: ModelGameSimGameConditionInput | null,
};

export type CreateGameSimGameMutation = {
  createGameSimGame:  {
    __typename: "GameSimGame",
    simGame:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mainGameId: string,
    simGameId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGameSimGameMutationVariables = {
  input: UpdateGameSimGameInput,
  condition?: ModelGameSimGameConditionInput | null,
};

export type UpdateGameSimGameMutation = {
  updateGameSimGame:  {
    __typename: "GameSimGame",
    simGame:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mainGameId: string,
    simGameId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGameSimGameMutationVariables = {
  input: DeleteGameSimGameInput,
  condition?: ModelGameSimGameConditionInput | null,
};

export type DeleteGameSimGameMutation = {
  deleteGameSimGame:  {
    __typename: "GameSimGame",
    simGame:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mainGameId: string,
    simGameId: string,
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
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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

export type CreateEnginePlatformMutationVariables = {
  input: CreateEnginePlatformInput,
  condition?: ModelEnginePlatformConditionInput | null,
};

export type CreateEnginePlatformMutation = {
  createEnginePlatform:  {
    __typename: "EnginePlatform",
    engineId: string,
    platformId: string,
    engine:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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

export type UpdateEnginePlatformMutationVariables = {
  input: UpdateEnginePlatformInput,
  condition?: ModelEnginePlatformConditionInput | null,
};

export type UpdateEnginePlatformMutation = {
  updateEnginePlatform:  {
    __typename: "EnginePlatform",
    engineId: string,
    platformId: string,
    engine:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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

export type DeleteEnginePlatformMutationVariables = {
  input: DeleteEnginePlatformInput,
  condition?: ModelEnginePlatformConditionInput | null,
};

export type DeleteEnginePlatformMutation = {
  deleteEnginePlatform:  {
    __typename: "EnginePlatform",
    engineId: string,
    platformId: string,
    engine:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
    artworks: Array< string | null >,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    website: string | null,
    companyId: string,
    engineId: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      logo: string,
      country: string,
      description: string | null,
      creationDate: string,
      website: string | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    engine:  {
      __typename: "Engine",
      id: string,
      name: string,
      url: string,
      logo: string,
      platforms:  {
        __typename: "ModelEnginePlatformConnection",
        nextToken: string | null,
      } | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
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
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    simGames:  {
      __typename: "ModelGameSimGameConnection",
      items:  Array< {
        __typename: "GameSimGame",
        mainGameId: string,
        simGameId: string,
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
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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

export type GetCompanyQueryVariables = {
  id: string,
};

export type GetCompanyQuery = {
  getCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    logo: string,
    country: string,
    description: string | null,
    creationDate: string,
    website: string | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCompanysQueryVariables = {
  filter?: ModelCompanyFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCompanysQuery = {
  listCompanys:  {
    __typename: "ModelCompanyConnection",
    items:  Array< {
      __typename: "Company",
      id: string,
      name: string,
      logo: string,
      country: string,
      description: string | null,
      creationDate: string,
      website: string | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
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
    url: string,
    logo: string,
    platforms:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
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
      url: string,
      logo: string,
      platforms:  {
        __typename: "ModelEnginePlatformConnection",
        nextToken: string | null,
      } | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
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
    url: string,
    logo: string,
    summary: string,
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
    engines:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
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
      url: string,
      logo: string,
      summary: string,
      games:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      engines:  {
        __typename: "ModelEnginePlatformConnection",
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

export type GetGameSimGameQueryVariables = {
  id: string,
};

export type GetGameSimGameQuery = {
  getGameSimGame:  {
    __typename: "GameSimGame",
    simGame:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mainGameId: string,
    simGameId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGameSimGamesQueryVariables = {
  filter?: ModelGameSimGameFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGameSimGamesQuery = {
  listGameSimGames:  {
    __typename: "ModelGameSimGameConnection",
    items:  Array< {
      __typename: "GameSimGame",
      simGame:  {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      mainGameId: string,
      simGameId: string,
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
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
      gameId: string,
      genreId: string,
      game:  {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
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
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
      gameId: string,
      themeId: string,
      game:  {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
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
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
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

export type GetEnginePlatformQueryVariables = {
  id: string,
};

export type GetEnginePlatformQuery = {
  getEnginePlatform:  {
    __typename: "EnginePlatform",
    engineId: string,
    platformId: string,
    engine:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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

export type ListEnginePlatformsQueryVariables = {
  filter?: ModelEnginePlatformFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEnginePlatformsQuery = {
  listEnginePlatforms:  {
    __typename: "ModelEnginePlatformConnection",
    items:  Array< {
      __typename: "EnginePlatform",
      engineId: string,
      platformId: string,
      engine:  {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
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
    artworks: Array< string | null >,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    website: string | null,
    companyId: string,
    engineId: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      logo: string,
      country: string,
      description: string | null,
      creationDate: string,
      website: string | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    engine:  {
      __typename: "Engine",
      id: string,
      name: string,
      url: string,
      logo: string,
      platforms:  {
        __typename: "ModelEnginePlatformConnection",
        nextToken: string | null,
      } | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
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
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    simGames:  {
      __typename: "ModelGameSimGameConnection",
      items:  Array< {
        __typename: "GameSimGame",
        mainGameId: string,
        simGameId: string,
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
    artworks: Array< string | null >,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    website: string | null,
    companyId: string,
    engineId: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      logo: string,
      country: string,
      description: string | null,
      creationDate: string,
      website: string | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    engine:  {
      __typename: "Engine",
      id: string,
      name: string,
      url: string,
      logo: string,
      platforms:  {
        __typename: "ModelEnginePlatformConnection",
        nextToken: string | null,
      } | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
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
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    simGames:  {
      __typename: "ModelGameSimGameConnection",
      items:  Array< {
        __typename: "GameSimGame",
        mainGameId: string,
        simGameId: string,
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
    artworks: Array< string | null >,
    cover: string,
    videos: Array< string | null >,
    screenshots: Array< string | null >,
    ratingCountPop: number,
    releaseDate: string,
    storyline: string,
    summary: string,
    website: string | null,
    companyId: string,
    engineId: string,
    company:  {
      __typename: "Company",
      id: string,
      name: string,
      logo: string,
      country: string,
      description: string | null,
      creationDate: string,
      website: string | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    engine:  {
      __typename: "Engine",
      id: string,
      name: string,
      url: string,
      logo: string,
      platforms:  {
        __typename: "ModelEnginePlatformConnection",
        nextToken: string | null,
      } | null,
      games:  {
        __typename: "ModelGameConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    genres:  {
      __typename: "ModelGameGenreConnection",
      items:  Array< {
        __typename: "GameGenre",
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
        gameId: string,
        themeId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    simGames:  {
      __typename: "ModelGameSimGameConnection",
      items:  Array< {
        __typename: "GameSimGame",
        mainGameId: string,
        simGameId: string,
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

export type OnCreateCompanySubscription = {
  onCreateCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    logo: string,
    country: string,
    description: string | null,
    creationDate: string,
    website: string | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    logo: string,
    country: string,
    description: string | null,
    creationDate: string,
    website: string | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany:  {
    __typename: "Company",
    id: string,
    name: string,
    logo: string,
    country: string,
    description: string | null,
    creationDate: string,
    website: string | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateEngineSubscription = {
  onCreateEngine:  {
    __typename: "Engine",
    id: string,
    name: string,
    url: string,
    logo: string,
    platforms:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateEngineSubscription = {
  onUpdateEngine:  {
    __typename: "Engine",
    id: string,
    name: string,
    url: string,
    logo: string,
    platforms:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteEngineSubscription = {
  onDeleteEngine:  {
    __typename: "Engine",
    id: string,
    name: string,
    url: string,
    logo: string,
    platforms:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
        platformId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    games:  {
      __typename: "ModelGameConnection",
      items:  Array< {
        __typename: "Game",
        id: string,
        name: string,
        artworks: Array< string | null >,
        cover: string,
        videos: Array< string | null >,
        screenshots: Array< string | null >,
        ratingCountPop: number,
        releaseDate: string,
        storyline: string,
        summary: string,
        website: string | null,
        companyId: string,
        engineId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreatePlatformSubscription = {
  onCreatePlatform:  {
    __typename: "Platform",
    id: string,
    name: string,
    url: string,
    logo: string,
    summary: string,
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
    engines:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
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
    url: string,
    logo: string,
    summary: string,
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
    engines:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
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
    url: string,
    logo: string,
    summary: string,
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
    engines:  {
      __typename: "ModelEnginePlatformConnection",
      items:  Array< {
        __typename: "EnginePlatform",
        engineId: string,
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

export type OnCreateGameSimGameSubscription = {
  onCreateGameSimGame:  {
    __typename: "GameSimGame",
    simGame:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mainGameId: string,
    simGameId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGameSimGameSubscription = {
  onUpdateGameSimGame:  {
    __typename: "GameSimGame",
    simGame:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mainGameId: string,
    simGameId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGameSimGameSubscription = {
  onDeleteGameSimGame:  {
    __typename: "GameSimGame",
    simGame:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
        nextToken: string | null,
      } | null,
      platforms:  {
        __typename: "ModelGamePlatformConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    mainGameId: string,
    simGameId: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGameGenreSubscription = {
  onCreateGameGenre:  {
    __typename: "GameGenre",
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
    gameId: string,
    genreId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
    gameId: string,
    themeId: string,
    game:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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

export type OnCreateEnginePlatformSubscription = {
  onCreateEnginePlatform:  {
    __typename: "EnginePlatform",
    engineId: string,
    platformId: string,
    engine:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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

export type OnUpdateEnginePlatformSubscription = {
  onUpdateEnginePlatform:  {
    __typename: "EnginePlatform",
    engineId: string,
    platformId: string,
    engine:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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

export type OnDeleteEnginePlatformSubscription = {
  onDeleteEnginePlatform:  {
    __typename: "EnginePlatform",
    engineId: string,
    platformId: string,
    engine:  {
      __typename: "Game",
      id: string,
      name: string,
      artworks: Array< string | null >,
      cover: string,
      videos: Array< string | null >,
      screenshots: Array< string | null >,
      ratingCountPop: number,
      releaseDate: string,
      storyline: string,
      summary: string,
      website: string | null,
      companyId: string,
      engineId: string,
      company:  {
        __typename: "Company",
        id: string,
        name: string,
        logo: string,
        country: string,
        description: string | null,
        creationDate: string,
        website: string | null,
        createdAt: string,
        updatedAt: string,
      },
      engine:  {
        __typename: "Engine",
        id: string,
        name: string,
        url: string,
        logo: string,
        createdAt: string,
        updatedAt: string,
      },
      genres:  {
        __typename: "ModelGameGenreConnection",
        nextToken: string | null,
      } | null,
      themes:  {
        __typename: "ModelGameThemeConnection",
        nextToken: string | null,
      } | null,
      simGames:  {
        __typename: "ModelGameSimGameConnection",
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
