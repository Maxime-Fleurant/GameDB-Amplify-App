import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  timestamptz: any;
};

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  _nlike?: Maybe<Scalars['String']>;
  _nsimilar?: Maybe<Scalars['String']>;
  _similar?: Maybe<Scalars['String']>;
};

/** expression to compare columns of type bigint. All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: Maybe<Scalars['bigint']>;
  _gt?: Maybe<Scalars['bigint']>;
  _gte?: Maybe<Scalars['bigint']>;
  _in?: Maybe<Array<Scalars['bigint']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['bigint']>;
  _lte?: Maybe<Scalars['bigint']>;
  _neq?: Maybe<Scalars['bigint']>;
  _nin?: Maybe<Array<Scalars['bigint']>>;
};

/** expression to compare columns of type date. All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: Maybe<Scalars['date']>;
  _gt?: Maybe<Scalars['date']>;
  _gte?: Maybe<Scalars['date']>;
  _in?: Maybe<Array<Scalars['date']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['date']>;
  _lte?: Maybe<Scalars['date']>;
  _neq?: Maybe<Scalars['date']>;
  _nin?: Maybe<Array<Scalars['date']>>;
};

/** columns and relationships of "engines" */
export type Engines = {
  __typename?: 'engines';
  /** An array relationship */
  game_engines: Array<Game_Engine>;
  /** An aggregated array relationship */
  game_engines_aggregate: Game_Engine_Aggregate;
  id: Scalars['Int'];
  igdbId: Scalars['Int'];
  name: Scalars['String'];
};

/** columns and relationships of "engines" */
export type EnginesGame_EnginesArgs = {
  distinct_on?: Maybe<Array<Game_Engine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Engine_Order_By>>;
  where?: Maybe<Game_Engine_Bool_Exp>;
};

/** columns and relationships of "engines" */
export type EnginesGame_Engines_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Engine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Engine_Order_By>>;
  where?: Maybe<Game_Engine_Bool_Exp>;
};

/** aggregated selection of "engines" */
export type Engines_Aggregate = {
  __typename?: 'engines_aggregate';
  aggregate?: Maybe<Engines_Aggregate_Fields>;
  nodes: Array<Engines>;
};

/** aggregate fields of "engines" */
export type Engines_Aggregate_Fields = {
  __typename?: 'engines_aggregate_fields';
  avg?: Maybe<Engines_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Engines_Max_Fields>;
  min?: Maybe<Engines_Min_Fields>;
  stddev?: Maybe<Engines_Stddev_Fields>;
  stddev_pop?: Maybe<Engines_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Engines_Stddev_Samp_Fields>;
  sum?: Maybe<Engines_Sum_Fields>;
  var_pop?: Maybe<Engines_Var_Pop_Fields>;
  var_samp?: Maybe<Engines_Var_Samp_Fields>;
  variance?: Maybe<Engines_Variance_Fields>;
};

/** aggregate fields of "engines" */
export type Engines_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Engines_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "engines" */
export type Engines_Aggregate_Order_By = {
  avg?: Maybe<Engines_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Engines_Max_Order_By>;
  min?: Maybe<Engines_Min_Order_By>;
  stddev?: Maybe<Engines_Stddev_Order_By>;
  stddev_pop?: Maybe<Engines_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Engines_Stddev_Samp_Order_By>;
  sum?: Maybe<Engines_Sum_Order_By>;
  var_pop?: Maybe<Engines_Var_Pop_Order_By>;
  var_samp?: Maybe<Engines_Var_Samp_Order_By>;
  variance?: Maybe<Engines_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "engines" */
export type Engines_Arr_Rel_Insert_Input = {
  data: Array<Engines_Insert_Input>;
  on_conflict?: Maybe<Engines_On_Conflict>;
};

/** aggregate avg on columns */
export type Engines_Avg_Fields = {
  __typename?: 'engines_avg_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "engines" */
export type Engines_Avg_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "engines". All fields are combined with a logical 'AND'. */
export type Engines_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Engines_Bool_Exp>>>;
  _not?: Maybe<Engines_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Engines_Bool_Exp>>>;
  game_engines?: Maybe<Game_Engine_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  igdbId?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "engines" */
export enum Engines_Constraint {
  /** unique or primary key constraint */
  EnginesIgdbIdKey = 'Engines_igdbId_key',
  /** unique or primary key constraint */
  EnginesPkey = 'Engines_pkey',
}

/** input type for incrementing integer column in table "engines" */
export type Engines_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "engines" */
export type Engines_Insert_Input = {
  game_engines?: Maybe<Game_Engine_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Engines_Max_Fields = {
  __typename?: 'engines_max_fields';
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "engines" */
export type Engines_Max_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Engines_Min_Fields = {
  __typename?: 'engines_min_fields';
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "engines" */
export type Engines_Min_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "engines" */
export type Engines_Mutation_Response = {
  __typename?: 'engines_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Engines>;
};

/** input type for inserting object relation for remote table "engines" */
export type Engines_Obj_Rel_Insert_Input = {
  data: Engines_Insert_Input;
  on_conflict?: Maybe<Engines_On_Conflict>;
};

/** on conflict condition type for table "engines" */
export type Engines_On_Conflict = {
  constraint: Engines_Constraint;
  update_columns: Array<Engines_Update_Column>;
  where?: Maybe<Engines_Bool_Exp>;
};

/** ordering options when selecting data from "engines" */
export type Engines_Order_By = {
  game_engines_aggregate?: Maybe<Game_Engine_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "engines" */
export type Engines_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "engines" */
export enum Engines_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IgdbId = 'igdbId',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "engines" */
export type Engines_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Engines_Stddev_Fields = {
  __typename?: 'engines_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "engines" */
export type Engines_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Engines_Stddev_Pop_Fields = {
  __typename?: 'engines_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "engines" */
export type Engines_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Engines_Stddev_Samp_Fields = {
  __typename?: 'engines_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "engines" */
export type Engines_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Engines_Sum_Fields = {
  __typename?: 'engines_sum_fields';
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "engines" */
export type Engines_Sum_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** update columns of table "engines" */
export enum Engines_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IgdbId = 'igdbId',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
export type Engines_Var_Pop_Fields = {
  __typename?: 'engines_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "engines" */
export type Engines_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Engines_Var_Samp_Fields = {
  __typename?: 'engines_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "engines" */
export type Engines_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Engines_Variance_Fields = {
  __typename?: 'engines_variance_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "engines" */
export type Engines_Variance_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** columns and relationships of "game_engine" */
export type Game_Engine = {
  __typename?: 'game_engine';
  /** An object relationship */
  engine: Engines;
  engineId: Scalars['Int'];
  /** An object relationship */
  game: Games;
  gameId: Scalars['bigint'];
};

/** aggregated selection of "game_engine" */
export type Game_Engine_Aggregate = {
  __typename?: 'game_engine_aggregate';
  aggregate?: Maybe<Game_Engine_Aggregate_Fields>;
  nodes: Array<Game_Engine>;
};

/** aggregate fields of "game_engine" */
export type Game_Engine_Aggregate_Fields = {
  __typename?: 'game_engine_aggregate_fields';
  avg?: Maybe<Game_Engine_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Game_Engine_Max_Fields>;
  min?: Maybe<Game_Engine_Min_Fields>;
  stddev?: Maybe<Game_Engine_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Engine_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Engine_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Engine_Sum_Fields>;
  var_pop?: Maybe<Game_Engine_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Engine_Var_Samp_Fields>;
  variance?: Maybe<Game_Engine_Variance_Fields>;
};

/** aggregate fields of "game_engine" */
export type Game_Engine_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_Engine_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_engine" */
export type Game_Engine_Aggregate_Order_By = {
  avg?: Maybe<Game_Engine_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Game_Engine_Max_Order_By>;
  min?: Maybe<Game_Engine_Min_Order_By>;
  stddev?: Maybe<Game_Engine_Stddev_Order_By>;
  stddev_pop?: Maybe<Game_Engine_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Game_Engine_Stddev_Samp_Order_By>;
  sum?: Maybe<Game_Engine_Sum_Order_By>;
  var_pop?: Maybe<Game_Engine_Var_Pop_Order_By>;
  var_samp?: Maybe<Game_Engine_Var_Samp_Order_By>;
  variance?: Maybe<Game_Engine_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "game_engine" */
export type Game_Engine_Arr_Rel_Insert_Input = {
  data: Array<Game_Engine_Insert_Input>;
  on_conflict?: Maybe<Game_Engine_On_Conflict>;
};

/** aggregate avg on columns */
export type Game_Engine_Avg_Fields = {
  __typename?: 'game_engine_avg_fields';
  engineId?: Maybe<Scalars['Float']>;
  gameId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "game_engine" */
export type Game_Engine_Avg_Order_By = {
  engineId?: Maybe<Order_By>;
  gameId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_engine". All fields are combined with a logical 'AND'. */
export type Game_Engine_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Game_Engine_Bool_Exp>>>;
  _not?: Maybe<Game_Engine_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Game_Engine_Bool_Exp>>>;
  engine?: Maybe<Engines_Bool_Exp>;
  engineId?: Maybe<Int_Comparison_Exp>;
  game?: Maybe<Games_Bool_Exp>;
  gameId?: Maybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_engine" */
export enum Game_Engine_Constraint {
  /** unique or primary key constraint */
  GameEnginePkey = 'game_engine_pkey',
}

/** input type for incrementing integer column in table "game_engine" */
export type Game_Engine_Inc_Input = {
  engineId?: Maybe<Scalars['Int']>;
  gameId?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "game_engine" */
export type Game_Engine_Insert_Input = {
  engine?: Maybe<Engines_Obj_Rel_Insert_Input>;
  engineId?: Maybe<Scalars['Int']>;
  game?: Maybe<Games_Obj_Rel_Insert_Input>;
  gameId?: Maybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Game_Engine_Max_Fields = {
  __typename?: 'game_engine_max_fields';
  engineId?: Maybe<Scalars['Int']>;
  gameId?: Maybe<Scalars['bigint']>;
};

/** order by max() on columns of table "game_engine" */
export type Game_Engine_Max_Order_By = {
  engineId?: Maybe<Order_By>;
  gameId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Engine_Min_Fields = {
  __typename?: 'game_engine_min_fields';
  engineId?: Maybe<Scalars['Int']>;
  gameId?: Maybe<Scalars['bigint']>;
};

/** order by min() on columns of table "game_engine" */
export type Game_Engine_Min_Order_By = {
  engineId?: Maybe<Order_By>;
  gameId?: Maybe<Order_By>;
};

/** response of any mutation on the table "game_engine" */
export type Game_Engine_Mutation_Response = {
  __typename?: 'game_engine_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Game_Engine>;
};

/** input type for inserting object relation for remote table "game_engine" */
export type Game_Engine_Obj_Rel_Insert_Input = {
  data: Game_Engine_Insert_Input;
  on_conflict?: Maybe<Game_Engine_On_Conflict>;
};

/** on conflict condition type for table "game_engine" */
export type Game_Engine_On_Conflict = {
  constraint: Game_Engine_Constraint;
  update_columns: Array<Game_Engine_Update_Column>;
  where?: Maybe<Game_Engine_Bool_Exp>;
};

/** ordering options when selecting data from "game_engine" */
export type Game_Engine_Order_By = {
  engine?: Maybe<Engines_Order_By>;
  engineId?: Maybe<Order_By>;
  game?: Maybe<Games_Order_By>;
  gameId?: Maybe<Order_By>;
};

/** primary key columns input for table: "game_engine" */
export type Game_Engine_Pk_Columns_Input = {
  engineId: Scalars['Int'];
  gameId: Scalars['bigint'];
};

/** select columns of table "game_engine" */
export enum Game_Engine_Select_Column {
  /** column name */
  EngineId = 'engineId',
  /** column name */
  GameId = 'gameId',
}

/** input type for updating data in table "game_engine" */
export type Game_Engine_Set_Input = {
  engineId?: Maybe<Scalars['Int']>;
  gameId?: Maybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Game_Engine_Stddev_Fields = {
  __typename?: 'game_engine_stddev_fields';
  engineId?: Maybe<Scalars['Float']>;
  gameId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "game_engine" */
export type Game_Engine_Stddev_Order_By = {
  engineId?: Maybe<Order_By>;
  gameId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Engine_Stddev_Pop_Fields = {
  __typename?: 'game_engine_stddev_pop_fields';
  engineId?: Maybe<Scalars['Float']>;
  gameId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "game_engine" */
export type Game_Engine_Stddev_Pop_Order_By = {
  engineId?: Maybe<Order_By>;
  gameId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Engine_Stddev_Samp_Fields = {
  __typename?: 'game_engine_stddev_samp_fields';
  engineId?: Maybe<Scalars['Float']>;
  gameId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "game_engine" */
export type Game_Engine_Stddev_Samp_Order_By = {
  engineId?: Maybe<Order_By>;
  gameId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Game_Engine_Sum_Fields = {
  __typename?: 'game_engine_sum_fields';
  engineId?: Maybe<Scalars['Int']>;
  gameId?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "game_engine" */
export type Game_Engine_Sum_Order_By = {
  engineId?: Maybe<Order_By>;
  gameId?: Maybe<Order_By>;
};

/** update columns of table "game_engine" */
export enum Game_Engine_Update_Column {
  /** column name */
  EngineId = 'engineId',
  /** column name */
  GameId = 'gameId',
}

/** aggregate var_pop on columns */
export type Game_Engine_Var_Pop_Fields = {
  __typename?: 'game_engine_var_pop_fields';
  engineId?: Maybe<Scalars['Float']>;
  gameId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "game_engine" */
export type Game_Engine_Var_Pop_Order_By = {
  engineId?: Maybe<Order_By>;
  gameId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Engine_Var_Samp_Fields = {
  __typename?: 'game_engine_var_samp_fields';
  engineId?: Maybe<Scalars['Float']>;
  gameId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "game_engine" */
export type Game_Engine_Var_Samp_Order_By = {
  engineId?: Maybe<Order_By>;
  gameId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Engine_Variance_Fields = {
  __typename?: 'game_engine_variance_fields';
  engineId?: Maybe<Scalars['Float']>;
  gameId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "game_engine" */
export type Game_Engine_Variance_Order_By = {
  engineId?: Maybe<Order_By>;
  gameId?: Maybe<Order_By>;
};

/** columns and relationships of "game_genre" */
export type Game_Genre = {
  __typename?: 'game_genre';
  /** An object relationship */
  game: Games;
  gameId: Scalars['bigint'];
  /** An object relationship */
  genre: Genres;
  genreId: Scalars['Int'];
};

/** aggregated selection of "game_genre" */
export type Game_Genre_Aggregate = {
  __typename?: 'game_genre_aggregate';
  aggregate?: Maybe<Game_Genre_Aggregate_Fields>;
  nodes: Array<Game_Genre>;
};

/** aggregate fields of "game_genre" */
export type Game_Genre_Aggregate_Fields = {
  __typename?: 'game_genre_aggregate_fields';
  avg?: Maybe<Game_Genre_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Game_Genre_Max_Fields>;
  min?: Maybe<Game_Genre_Min_Fields>;
  stddev?: Maybe<Game_Genre_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Genre_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Genre_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Genre_Sum_Fields>;
  var_pop?: Maybe<Game_Genre_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Genre_Var_Samp_Fields>;
  variance?: Maybe<Game_Genre_Variance_Fields>;
};

/** aggregate fields of "game_genre" */
export type Game_Genre_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_Genre_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_genre" */
export type Game_Genre_Aggregate_Order_By = {
  avg?: Maybe<Game_Genre_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Game_Genre_Max_Order_By>;
  min?: Maybe<Game_Genre_Min_Order_By>;
  stddev?: Maybe<Game_Genre_Stddev_Order_By>;
  stddev_pop?: Maybe<Game_Genre_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Game_Genre_Stddev_Samp_Order_By>;
  sum?: Maybe<Game_Genre_Sum_Order_By>;
  var_pop?: Maybe<Game_Genre_Var_Pop_Order_By>;
  var_samp?: Maybe<Game_Genre_Var_Samp_Order_By>;
  variance?: Maybe<Game_Genre_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "game_genre" */
export type Game_Genre_Arr_Rel_Insert_Input = {
  data: Array<Game_Genre_Insert_Input>;
  on_conflict?: Maybe<Game_Genre_On_Conflict>;
};

/** aggregate avg on columns */
export type Game_Genre_Avg_Fields = {
  __typename?: 'game_genre_avg_fields';
  gameId?: Maybe<Scalars['Float']>;
  genreId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "game_genre" */
export type Game_Genre_Avg_Order_By = {
  gameId?: Maybe<Order_By>;
  genreId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_genre". All fields are combined with a logical 'AND'. */
export type Game_Genre_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Game_Genre_Bool_Exp>>>;
  _not?: Maybe<Game_Genre_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Game_Genre_Bool_Exp>>>;
  game?: Maybe<Games_Bool_Exp>;
  gameId?: Maybe<Bigint_Comparison_Exp>;
  genre?: Maybe<Genres_Bool_Exp>;
  genreId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_genre" */
export enum Game_Genre_Constraint {
  /** unique or primary key constraint */
  GameGenrePkey = 'game_genre_pkey',
}

/** input type for incrementing integer column in table "game_genre" */
export type Game_Genre_Inc_Input = {
  gameId?: Maybe<Scalars['bigint']>;
  genreId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "game_genre" */
export type Game_Genre_Insert_Input = {
  game?: Maybe<Games_Obj_Rel_Insert_Input>;
  gameId?: Maybe<Scalars['bigint']>;
  genre?: Maybe<Genres_Obj_Rel_Insert_Input>;
  genreId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Game_Genre_Max_Fields = {
  __typename?: 'game_genre_max_fields';
  gameId?: Maybe<Scalars['bigint']>;
  genreId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "game_genre" */
export type Game_Genre_Max_Order_By = {
  gameId?: Maybe<Order_By>;
  genreId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Genre_Min_Fields = {
  __typename?: 'game_genre_min_fields';
  gameId?: Maybe<Scalars['bigint']>;
  genreId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "game_genre" */
export type Game_Genre_Min_Order_By = {
  gameId?: Maybe<Order_By>;
  genreId?: Maybe<Order_By>;
};

/** response of any mutation on the table "game_genre" */
export type Game_Genre_Mutation_Response = {
  __typename?: 'game_genre_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Game_Genre>;
};

/** input type for inserting object relation for remote table "game_genre" */
export type Game_Genre_Obj_Rel_Insert_Input = {
  data: Game_Genre_Insert_Input;
  on_conflict?: Maybe<Game_Genre_On_Conflict>;
};

/** on conflict condition type for table "game_genre" */
export type Game_Genre_On_Conflict = {
  constraint: Game_Genre_Constraint;
  update_columns: Array<Game_Genre_Update_Column>;
  where?: Maybe<Game_Genre_Bool_Exp>;
};

/** ordering options when selecting data from "game_genre" */
export type Game_Genre_Order_By = {
  game?: Maybe<Games_Order_By>;
  gameId?: Maybe<Order_By>;
  genre?: Maybe<Genres_Order_By>;
  genreId?: Maybe<Order_By>;
};

/** primary key columns input for table: "game_genre" */
export type Game_Genre_Pk_Columns_Input = {
  gameId: Scalars['bigint'];
  genreId: Scalars['Int'];
};

/** select columns of table "game_genre" */
export enum Game_Genre_Select_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  GenreId = 'genreId',
}

/** input type for updating data in table "game_genre" */
export type Game_Genre_Set_Input = {
  gameId?: Maybe<Scalars['bigint']>;
  genreId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Game_Genre_Stddev_Fields = {
  __typename?: 'game_genre_stddev_fields';
  gameId?: Maybe<Scalars['Float']>;
  genreId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "game_genre" */
export type Game_Genre_Stddev_Order_By = {
  gameId?: Maybe<Order_By>;
  genreId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Genre_Stddev_Pop_Fields = {
  __typename?: 'game_genre_stddev_pop_fields';
  gameId?: Maybe<Scalars['Float']>;
  genreId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "game_genre" */
export type Game_Genre_Stddev_Pop_Order_By = {
  gameId?: Maybe<Order_By>;
  genreId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Genre_Stddev_Samp_Fields = {
  __typename?: 'game_genre_stddev_samp_fields';
  gameId?: Maybe<Scalars['Float']>;
  genreId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "game_genre" */
export type Game_Genre_Stddev_Samp_Order_By = {
  gameId?: Maybe<Order_By>;
  genreId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Game_Genre_Sum_Fields = {
  __typename?: 'game_genre_sum_fields';
  gameId?: Maybe<Scalars['bigint']>;
  genreId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "game_genre" */
export type Game_Genre_Sum_Order_By = {
  gameId?: Maybe<Order_By>;
  genreId?: Maybe<Order_By>;
};

/** update columns of table "game_genre" */
export enum Game_Genre_Update_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  GenreId = 'genreId',
}

/** aggregate var_pop on columns */
export type Game_Genre_Var_Pop_Fields = {
  __typename?: 'game_genre_var_pop_fields';
  gameId?: Maybe<Scalars['Float']>;
  genreId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "game_genre" */
export type Game_Genre_Var_Pop_Order_By = {
  gameId?: Maybe<Order_By>;
  genreId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Genre_Var_Samp_Fields = {
  __typename?: 'game_genre_var_samp_fields';
  gameId?: Maybe<Scalars['Float']>;
  genreId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "game_genre" */
export type Game_Genre_Var_Samp_Order_By = {
  gameId?: Maybe<Order_By>;
  genreId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Genre_Variance_Fields = {
  __typename?: 'game_genre_variance_fields';
  gameId?: Maybe<Scalars['Float']>;
  genreId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "game_genre" */
export type Game_Genre_Variance_Order_By = {
  gameId?: Maybe<Order_By>;
  genreId?: Maybe<Order_By>;
};

/** columns and relationships of "game_platform" */
export type Game_Platform = {
  __typename?: 'game_platform';
  /** An object relationship */
  game: Games;
  gameId: Scalars['bigint'];
  /** An object relationship */
  platform: Platforms;
  platformId: Scalars['Int'];
};

/** aggregated selection of "game_platform" */
export type Game_Platform_Aggregate = {
  __typename?: 'game_platform_aggregate';
  aggregate?: Maybe<Game_Platform_Aggregate_Fields>;
  nodes: Array<Game_Platform>;
};

/** aggregate fields of "game_platform" */
export type Game_Platform_Aggregate_Fields = {
  __typename?: 'game_platform_aggregate_fields';
  avg?: Maybe<Game_Platform_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Game_Platform_Max_Fields>;
  min?: Maybe<Game_Platform_Min_Fields>;
  stddev?: Maybe<Game_Platform_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Platform_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Platform_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Platform_Sum_Fields>;
  var_pop?: Maybe<Game_Platform_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Platform_Var_Samp_Fields>;
  variance?: Maybe<Game_Platform_Variance_Fields>;
};

/** aggregate fields of "game_platform" */
export type Game_Platform_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_Platform_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_platform" */
export type Game_Platform_Aggregate_Order_By = {
  avg?: Maybe<Game_Platform_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Game_Platform_Max_Order_By>;
  min?: Maybe<Game_Platform_Min_Order_By>;
  stddev?: Maybe<Game_Platform_Stddev_Order_By>;
  stddev_pop?: Maybe<Game_Platform_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Game_Platform_Stddev_Samp_Order_By>;
  sum?: Maybe<Game_Platform_Sum_Order_By>;
  var_pop?: Maybe<Game_Platform_Var_Pop_Order_By>;
  var_samp?: Maybe<Game_Platform_Var_Samp_Order_By>;
  variance?: Maybe<Game_Platform_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "game_platform" */
export type Game_Platform_Arr_Rel_Insert_Input = {
  data: Array<Game_Platform_Insert_Input>;
  on_conflict?: Maybe<Game_Platform_On_Conflict>;
};

/** aggregate avg on columns */
export type Game_Platform_Avg_Fields = {
  __typename?: 'game_platform_avg_fields';
  gameId?: Maybe<Scalars['Float']>;
  platformId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "game_platform" */
export type Game_Platform_Avg_Order_By = {
  gameId?: Maybe<Order_By>;
  platformId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_platform". All fields are combined with a logical 'AND'. */
export type Game_Platform_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Game_Platform_Bool_Exp>>>;
  _not?: Maybe<Game_Platform_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Game_Platform_Bool_Exp>>>;
  game?: Maybe<Games_Bool_Exp>;
  gameId?: Maybe<Bigint_Comparison_Exp>;
  platform?: Maybe<Platforms_Bool_Exp>;
  platformId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_platform" */
export enum Game_Platform_Constraint {
  /** unique or primary key constraint */
  GamePlatformPkey = 'game_platform_pkey',
}

/** input type for incrementing integer column in table "game_platform" */
export type Game_Platform_Inc_Input = {
  gameId?: Maybe<Scalars['bigint']>;
  platformId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "game_platform" */
export type Game_Platform_Insert_Input = {
  game?: Maybe<Games_Obj_Rel_Insert_Input>;
  gameId?: Maybe<Scalars['bigint']>;
  platform?: Maybe<Platforms_Obj_Rel_Insert_Input>;
  platformId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Game_Platform_Max_Fields = {
  __typename?: 'game_platform_max_fields';
  gameId?: Maybe<Scalars['bigint']>;
  platformId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "game_platform" */
export type Game_Platform_Max_Order_By = {
  gameId?: Maybe<Order_By>;
  platformId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Platform_Min_Fields = {
  __typename?: 'game_platform_min_fields';
  gameId?: Maybe<Scalars['bigint']>;
  platformId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "game_platform" */
export type Game_Platform_Min_Order_By = {
  gameId?: Maybe<Order_By>;
  platformId?: Maybe<Order_By>;
};

/** response of any mutation on the table "game_platform" */
export type Game_Platform_Mutation_Response = {
  __typename?: 'game_platform_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Game_Platform>;
};

/** input type for inserting object relation for remote table "game_platform" */
export type Game_Platform_Obj_Rel_Insert_Input = {
  data: Game_Platform_Insert_Input;
  on_conflict?: Maybe<Game_Platform_On_Conflict>;
};

/** on conflict condition type for table "game_platform" */
export type Game_Platform_On_Conflict = {
  constraint: Game_Platform_Constraint;
  update_columns: Array<Game_Platform_Update_Column>;
  where?: Maybe<Game_Platform_Bool_Exp>;
};

/** ordering options when selecting data from "game_platform" */
export type Game_Platform_Order_By = {
  game?: Maybe<Games_Order_By>;
  gameId?: Maybe<Order_By>;
  platform?: Maybe<Platforms_Order_By>;
  platformId?: Maybe<Order_By>;
};

/** primary key columns input for table: "game_platform" */
export type Game_Platform_Pk_Columns_Input = {
  gameId: Scalars['bigint'];
  platformId: Scalars['Int'];
};

/** select columns of table "game_platform" */
export enum Game_Platform_Select_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  PlatformId = 'platformId',
}

/** input type for updating data in table "game_platform" */
export type Game_Platform_Set_Input = {
  gameId?: Maybe<Scalars['bigint']>;
  platformId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Game_Platform_Stddev_Fields = {
  __typename?: 'game_platform_stddev_fields';
  gameId?: Maybe<Scalars['Float']>;
  platformId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "game_platform" */
export type Game_Platform_Stddev_Order_By = {
  gameId?: Maybe<Order_By>;
  platformId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Platform_Stddev_Pop_Fields = {
  __typename?: 'game_platform_stddev_pop_fields';
  gameId?: Maybe<Scalars['Float']>;
  platformId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "game_platform" */
export type Game_Platform_Stddev_Pop_Order_By = {
  gameId?: Maybe<Order_By>;
  platformId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Platform_Stddev_Samp_Fields = {
  __typename?: 'game_platform_stddev_samp_fields';
  gameId?: Maybe<Scalars['Float']>;
  platformId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "game_platform" */
export type Game_Platform_Stddev_Samp_Order_By = {
  gameId?: Maybe<Order_By>;
  platformId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Game_Platform_Sum_Fields = {
  __typename?: 'game_platform_sum_fields';
  gameId?: Maybe<Scalars['bigint']>;
  platformId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "game_platform" */
export type Game_Platform_Sum_Order_By = {
  gameId?: Maybe<Order_By>;
  platformId?: Maybe<Order_By>;
};

/** update columns of table "game_platform" */
export enum Game_Platform_Update_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  PlatformId = 'platformId',
}

/** aggregate var_pop on columns */
export type Game_Platform_Var_Pop_Fields = {
  __typename?: 'game_platform_var_pop_fields';
  gameId?: Maybe<Scalars['Float']>;
  platformId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "game_platform" */
export type Game_Platform_Var_Pop_Order_By = {
  gameId?: Maybe<Order_By>;
  platformId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Platform_Var_Samp_Fields = {
  __typename?: 'game_platform_var_samp_fields';
  gameId?: Maybe<Scalars['Float']>;
  platformId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "game_platform" */
export type Game_Platform_Var_Samp_Order_By = {
  gameId?: Maybe<Order_By>;
  platformId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Platform_Variance_Fields = {
  __typename?: 'game_platform_variance_fields';
  gameId?: Maybe<Scalars['Float']>;
  platformId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "game_platform" */
export type Game_Platform_Variance_Order_By = {
  gameId?: Maybe<Order_By>;
  platformId?: Maybe<Order_By>;
};

/** columns and relationships of "game_studio" */
export type Game_Studio = {
  __typename?: 'game_studio';
  /** An object relationship */
  game: Games;
  gameId: Scalars['Int'];
  /** An object relationship */
  studio: Studios;
  studioId: Scalars['Int'];
};

/** aggregated selection of "game_studio" */
export type Game_Studio_Aggregate = {
  __typename?: 'game_studio_aggregate';
  aggregate?: Maybe<Game_Studio_Aggregate_Fields>;
  nodes: Array<Game_Studio>;
};

/** aggregate fields of "game_studio" */
export type Game_Studio_Aggregate_Fields = {
  __typename?: 'game_studio_aggregate_fields';
  avg?: Maybe<Game_Studio_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Game_Studio_Max_Fields>;
  min?: Maybe<Game_Studio_Min_Fields>;
  stddev?: Maybe<Game_Studio_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Studio_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Studio_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Studio_Sum_Fields>;
  var_pop?: Maybe<Game_Studio_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Studio_Var_Samp_Fields>;
  variance?: Maybe<Game_Studio_Variance_Fields>;
};

/** aggregate fields of "game_studio" */
export type Game_Studio_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_Studio_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_studio" */
export type Game_Studio_Aggregate_Order_By = {
  avg?: Maybe<Game_Studio_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Game_Studio_Max_Order_By>;
  min?: Maybe<Game_Studio_Min_Order_By>;
  stddev?: Maybe<Game_Studio_Stddev_Order_By>;
  stddev_pop?: Maybe<Game_Studio_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Game_Studio_Stddev_Samp_Order_By>;
  sum?: Maybe<Game_Studio_Sum_Order_By>;
  var_pop?: Maybe<Game_Studio_Var_Pop_Order_By>;
  var_samp?: Maybe<Game_Studio_Var_Samp_Order_By>;
  variance?: Maybe<Game_Studio_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "game_studio" */
export type Game_Studio_Arr_Rel_Insert_Input = {
  data: Array<Game_Studio_Insert_Input>;
  on_conflict?: Maybe<Game_Studio_On_Conflict>;
};

/** aggregate avg on columns */
export type Game_Studio_Avg_Fields = {
  __typename?: 'game_studio_avg_fields';
  gameId?: Maybe<Scalars['Float']>;
  studioId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "game_studio" */
export type Game_Studio_Avg_Order_By = {
  gameId?: Maybe<Order_By>;
  studioId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_studio". All fields are combined with a logical 'AND'. */
export type Game_Studio_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Game_Studio_Bool_Exp>>>;
  _not?: Maybe<Game_Studio_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Game_Studio_Bool_Exp>>>;
  game?: Maybe<Games_Bool_Exp>;
  gameId?: Maybe<Int_Comparison_Exp>;
  studio?: Maybe<Studios_Bool_Exp>;
  studioId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_studio" */
export enum Game_Studio_Constraint {
  /** unique or primary key constraint */
  GameStudioPkey = 'game_studio_pkey',
}

/** input type for incrementing integer column in table "game_studio" */
export type Game_Studio_Inc_Input = {
  gameId?: Maybe<Scalars['Int']>;
  studioId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "game_studio" */
export type Game_Studio_Insert_Input = {
  game?: Maybe<Games_Obj_Rel_Insert_Input>;
  gameId?: Maybe<Scalars['Int']>;
  studio?: Maybe<Studios_Obj_Rel_Insert_Input>;
  studioId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Game_Studio_Max_Fields = {
  __typename?: 'game_studio_max_fields';
  gameId?: Maybe<Scalars['Int']>;
  studioId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "game_studio" */
export type Game_Studio_Max_Order_By = {
  gameId?: Maybe<Order_By>;
  studioId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Studio_Min_Fields = {
  __typename?: 'game_studio_min_fields';
  gameId?: Maybe<Scalars['Int']>;
  studioId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "game_studio" */
export type Game_Studio_Min_Order_By = {
  gameId?: Maybe<Order_By>;
  studioId?: Maybe<Order_By>;
};

/** response of any mutation on the table "game_studio" */
export type Game_Studio_Mutation_Response = {
  __typename?: 'game_studio_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Game_Studio>;
};

/** input type for inserting object relation for remote table "game_studio" */
export type Game_Studio_Obj_Rel_Insert_Input = {
  data: Game_Studio_Insert_Input;
  on_conflict?: Maybe<Game_Studio_On_Conflict>;
};

/** on conflict condition type for table "game_studio" */
export type Game_Studio_On_Conflict = {
  constraint: Game_Studio_Constraint;
  update_columns: Array<Game_Studio_Update_Column>;
  where?: Maybe<Game_Studio_Bool_Exp>;
};

/** ordering options when selecting data from "game_studio" */
export type Game_Studio_Order_By = {
  game?: Maybe<Games_Order_By>;
  gameId?: Maybe<Order_By>;
  studio?: Maybe<Studios_Order_By>;
  studioId?: Maybe<Order_By>;
};

/** primary key columns input for table: "game_studio" */
export type Game_Studio_Pk_Columns_Input = {
  gameId: Scalars['Int'];
  studioId: Scalars['Int'];
};

/** select columns of table "game_studio" */
export enum Game_Studio_Select_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  StudioId = 'studioId',
}

/** input type for updating data in table "game_studio" */
export type Game_Studio_Set_Input = {
  gameId?: Maybe<Scalars['Int']>;
  studioId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Game_Studio_Stddev_Fields = {
  __typename?: 'game_studio_stddev_fields';
  gameId?: Maybe<Scalars['Float']>;
  studioId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "game_studio" */
export type Game_Studio_Stddev_Order_By = {
  gameId?: Maybe<Order_By>;
  studioId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Studio_Stddev_Pop_Fields = {
  __typename?: 'game_studio_stddev_pop_fields';
  gameId?: Maybe<Scalars['Float']>;
  studioId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "game_studio" */
export type Game_Studio_Stddev_Pop_Order_By = {
  gameId?: Maybe<Order_By>;
  studioId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Studio_Stddev_Samp_Fields = {
  __typename?: 'game_studio_stddev_samp_fields';
  gameId?: Maybe<Scalars['Float']>;
  studioId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "game_studio" */
export type Game_Studio_Stddev_Samp_Order_By = {
  gameId?: Maybe<Order_By>;
  studioId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Game_Studio_Sum_Fields = {
  __typename?: 'game_studio_sum_fields';
  gameId?: Maybe<Scalars['Int']>;
  studioId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "game_studio" */
export type Game_Studio_Sum_Order_By = {
  gameId?: Maybe<Order_By>;
  studioId?: Maybe<Order_By>;
};

/** update columns of table "game_studio" */
export enum Game_Studio_Update_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  StudioId = 'studioId',
}

/** aggregate var_pop on columns */
export type Game_Studio_Var_Pop_Fields = {
  __typename?: 'game_studio_var_pop_fields';
  gameId?: Maybe<Scalars['Float']>;
  studioId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "game_studio" */
export type Game_Studio_Var_Pop_Order_By = {
  gameId?: Maybe<Order_By>;
  studioId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Studio_Var_Samp_Fields = {
  __typename?: 'game_studio_var_samp_fields';
  gameId?: Maybe<Scalars['Float']>;
  studioId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "game_studio" */
export type Game_Studio_Var_Samp_Order_By = {
  gameId?: Maybe<Order_By>;
  studioId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Studio_Variance_Fields = {
  __typename?: 'game_studio_variance_fields';
  gameId?: Maybe<Scalars['Float']>;
  studioId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "game_studio" */
export type Game_Studio_Variance_Order_By = {
  gameId?: Maybe<Order_By>;
  studioId?: Maybe<Order_By>;
};

/** columns and relationships of "game_theme" */
export type Game_Theme = {
  __typename?: 'game_theme';
  /** An object relationship */
  game: Games;
  gameId: Scalars['bigint'];
  /** An object relationship */
  theme: Themes;
  themeId: Scalars['Int'];
};

/** aggregated selection of "game_theme" */
export type Game_Theme_Aggregate = {
  __typename?: 'game_theme_aggregate';
  aggregate?: Maybe<Game_Theme_Aggregate_Fields>;
  nodes: Array<Game_Theme>;
};

/** aggregate fields of "game_theme" */
export type Game_Theme_Aggregate_Fields = {
  __typename?: 'game_theme_aggregate_fields';
  avg?: Maybe<Game_Theme_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Game_Theme_Max_Fields>;
  min?: Maybe<Game_Theme_Min_Fields>;
  stddev?: Maybe<Game_Theme_Stddev_Fields>;
  stddev_pop?: Maybe<Game_Theme_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Game_Theme_Stddev_Samp_Fields>;
  sum?: Maybe<Game_Theme_Sum_Fields>;
  var_pop?: Maybe<Game_Theme_Var_Pop_Fields>;
  var_samp?: Maybe<Game_Theme_Var_Samp_Fields>;
  variance?: Maybe<Game_Theme_Variance_Fields>;
};

/** aggregate fields of "game_theme" */
export type Game_Theme_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Game_Theme_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "game_theme" */
export type Game_Theme_Aggregate_Order_By = {
  avg?: Maybe<Game_Theme_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Game_Theme_Max_Order_By>;
  min?: Maybe<Game_Theme_Min_Order_By>;
  stddev?: Maybe<Game_Theme_Stddev_Order_By>;
  stddev_pop?: Maybe<Game_Theme_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Game_Theme_Stddev_Samp_Order_By>;
  sum?: Maybe<Game_Theme_Sum_Order_By>;
  var_pop?: Maybe<Game_Theme_Var_Pop_Order_By>;
  var_samp?: Maybe<Game_Theme_Var_Samp_Order_By>;
  variance?: Maybe<Game_Theme_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "game_theme" */
export type Game_Theme_Arr_Rel_Insert_Input = {
  data: Array<Game_Theme_Insert_Input>;
  on_conflict?: Maybe<Game_Theme_On_Conflict>;
};

/** aggregate avg on columns */
export type Game_Theme_Avg_Fields = {
  __typename?: 'game_theme_avg_fields';
  gameId?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "game_theme" */
export type Game_Theme_Avg_Order_By = {
  gameId?: Maybe<Order_By>;
  themeId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "game_theme". All fields are combined with a logical 'AND'. */
export type Game_Theme_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Game_Theme_Bool_Exp>>>;
  _not?: Maybe<Game_Theme_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Game_Theme_Bool_Exp>>>;
  game?: Maybe<Games_Bool_Exp>;
  gameId?: Maybe<Bigint_Comparison_Exp>;
  theme?: Maybe<Themes_Bool_Exp>;
  themeId?: Maybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "game_theme" */
export enum Game_Theme_Constraint {
  /** unique or primary key constraint */
  GameThemePkey = 'game_theme_pkey',
}

/** input type for incrementing integer column in table "game_theme" */
export type Game_Theme_Inc_Input = {
  gameId?: Maybe<Scalars['bigint']>;
  themeId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "game_theme" */
export type Game_Theme_Insert_Input = {
  game?: Maybe<Games_Obj_Rel_Insert_Input>;
  gameId?: Maybe<Scalars['bigint']>;
  theme?: Maybe<Themes_Obj_Rel_Insert_Input>;
  themeId?: Maybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Game_Theme_Max_Fields = {
  __typename?: 'game_theme_max_fields';
  gameId?: Maybe<Scalars['bigint']>;
  themeId?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "game_theme" */
export type Game_Theme_Max_Order_By = {
  gameId?: Maybe<Order_By>;
  themeId?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Game_Theme_Min_Fields = {
  __typename?: 'game_theme_min_fields';
  gameId?: Maybe<Scalars['bigint']>;
  themeId?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "game_theme" */
export type Game_Theme_Min_Order_By = {
  gameId?: Maybe<Order_By>;
  themeId?: Maybe<Order_By>;
};

/** response of any mutation on the table "game_theme" */
export type Game_Theme_Mutation_Response = {
  __typename?: 'game_theme_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Game_Theme>;
};

/** input type for inserting object relation for remote table "game_theme" */
export type Game_Theme_Obj_Rel_Insert_Input = {
  data: Game_Theme_Insert_Input;
  on_conflict?: Maybe<Game_Theme_On_Conflict>;
};

/** on conflict condition type for table "game_theme" */
export type Game_Theme_On_Conflict = {
  constraint: Game_Theme_Constraint;
  update_columns: Array<Game_Theme_Update_Column>;
  where?: Maybe<Game_Theme_Bool_Exp>;
};

/** ordering options when selecting data from "game_theme" */
export type Game_Theme_Order_By = {
  game?: Maybe<Games_Order_By>;
  gameId?: Maybe<Order_By>;
  theme?: Maybe<Themes_Order_By>;
  themeId?: Maybe<Order_By>;
};

/** primary key columns input for table: "game_theme" */
export type Game_Theme_Pk_Columns_Input = {
  gameId: Scalars['bigint'];
  themeId: Scalars['Int'];
};

/** select columns of table "game_theme" */
export enum Game_Theme_Select_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  ThemeId = 'themeId',
}

/** input type for updating data in table "game_theme" */
export type Game_Theme_Set_Input = {
  gameId?: Maybe<Scalars['bigint']>;
  themeId?: Maybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Game_Theme_Stddev_Fields = {
  __typename?: 'game_theme_stddev_fields';
  gameId?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "game_theme" */
export type Game_Theme_Stddev_Order_By = {
  gameId?: Maybe<Order_By>;
  themeId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Game_Theme_Stddev_Pop_Fields = {
  __typename?: 'game_theme_stddev_pop_fields';
  gameId?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "game_theme" */
export type Game_Theme_Stddev_Pop_Order_By = {
  gameId?: Maybe<Order_By>;
  themeId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Game_Theme_Stddev_Samp_Fields = {
  __typename?: 'game_theme_stddev_samp_fields';
  gameId?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "game_theme" */
export type Game_Theme_Stddev_Samp_Order_By = {
  gameId?: Maybe<Order_By>;
  themeId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Game_Theme_Sum_Fields = {
  __typename?: 'game_theme_sum_fields';
  gameId?: Maybe<Scalars['bigint']>;
  themeId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "game_theme" */
export type Game_Theme_Sum_Order_By = {
  gameId?: Maybe<Order_By>;
  themeId?: Maybe<Order_By>;
};

/** update columns of table "game_theme" */
export enum Game_Theme_Update_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  ThemeId = 'themeId',
}

/** aggregate var_pop on columns */
export type Game_Theme_Var_Pop_Fields = {
  __typename?: 'game_theme_var_pop_fields';
  gameId?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "game_theme" */
export type Game_Theme_Var_Pop_Order_By = {
  gameId?: Maybe<Order_By>;
  themeId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Game_Theme_Var_Samp_Fields = {
  __typename?: 'game_theme_var_samp_fields';
  gameId?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "game_theme" */
export type Game_Theme_Var_Samp_Order_By = {
  gameId?: Maybe<Order_By>;
  themeId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Game_Theme_Variance_Fields = {
  __typename?: 'game_theme_variance_fields';
  gameId?: Maybe<Scalars['Float']>;
  themeId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "game_theme" */
export type Game_Theme_Variance_Order_By = {
  gameId?: Maybe<Order_By>;
  themeId?: Maybe<Order_By>;
};

/** columns and relationships of "games" */
export type Games = {
  __typename?: 'games';
  cover: Scalars['String'];
  /** An array relationship */
  game_engines: Array<Game_Engine>;
  /** An aggregated array relationship */
  game_engines_aggregate: Game_Engine_Aggregate;
  /** An array relationship */
  game_genres: Array<Game_Genre>;
  /** An aggregated array relationship */
  game_genres_aggregate: Game_Genre_Aggregate;
  /** An array relationship */
  game_platforms: Array<Game_Platform>;
  /** An aggregated array relationship */
  game_platforms_aggregate: Game_Platform_Aggregate;
  /** An array relationship */
  game_studios: Array<Game_Studio>;
  /** An aggregated array relationship */
  game_studios_aggregate: Game_Studio_Aggregate;
  /** An array relationship */
  game_themes: Array<Game_Theme>;
  /** An aggregated array relationship */
  game_themes_aggregate: Game_Theme_Aggregate;
  id: Scalars['bigint'];
  igdbId: Scalars['Int'];
  name: Scalars['String'];
  popularity: Scalars['Int'];
  releaseDate: Scalars['date'];
  /** An array relationship */
  screenshots: Array<Screenshots>;
  /** An aggregated array relationship */
  screenshots_aggregate: Screenshots_Aggregate;
  storyline: Scalars['String'];
  summary: Scalars['String'];
  /** An array relationship */
  videos: Array<Videos>;
  /** An aggregated array relationship */
  videos_aggregate: Videos_Aggregate;
};

/** columns and relationships of "games" */
export type GamesGame_EnginesArgs = {
  distinct_on?: Maybe<Array<Game_Engine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Engine_Order_By>>;
  where?: Maybe<Game_Engine_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesGame_Engines_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Engine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Engine_Order_By>>;
  where?: Maybe<Game_Engine_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesGame_GenresArgs = {
  distinct_on?: Maybe<Array<Game_Genre_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Genre_Order_By>>;
  where?: Maybe<Game_Genre_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesGame_Genres_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Genre_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Genre_Order_By>>;
  where?: Maybe<Game_Genre_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesGame_PlatformsArgs = {
  distinct_on?: Maybe<Array<Game_Platform_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Platform_Order_By>>;
  where?: Maybe<Game_Platform_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesGame_Platforms_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Platform_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Platform_Order_By>>;
  where?: Maybe<Game_Platform_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesGame_StudiosArgs = {
  distinct_on?: Maybe<Array<Game_Studio_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Studio_Order_By>>;
  where?: Maybe<Game_Studio_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesGame_Studios_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Studio_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Studio_Order_By>>;
  where?: Maybe<Game_Studio_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesGame_ThemesArgs = {
  distinct_on?: Maybe<Array<Game_Theme_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Theme_Order_By>>;
  where?: Maybe<Game_Theme_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesGame_Themes_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Theme_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Theme_Order_By>>;
  where?: Maybe<Game_Theme_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesScreenshotsArgs = {
  distinct_on?: Maybe<Array<Screenshots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Screenshots_Order_By>>;
  where?: Maybe<Screenshots_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesScreenshots_AggregateArgs = {
  distinct_on?: Maybe<Array<Screenshots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Screenshots_Order_By>>;
  where?: Maybe<Screenshots_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesVideosArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};

/** columns and relationships of "games" */
export type GamesVideos_AggregateArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};

/** aggregated selection of "games" */
export type Games_Aggregate = {
  __typename?: 'games_aggregate';
  aggregate?: Maybe<Games_Aggregate_Fields>;
  nodes: Array<Games>;
};

/** aggregate fields of "games" */
export type Games_Aggregate_Fields = {
  __typename?: 'games_aggregate_fields';
  avg?: Maybe<Games_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Games_Max_Fields>;
  min?: Maybe<Games_Min_Fields>;
  stddev?: Maybe<Games_Stddev_Fields>;
  stddev_pop?: Maybe<Games_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Games_Stddev_Samp_Fields>;
  sum?: Maybe<Games_Sum_Fields>;
  var_pop?: Maybe<Games_Var_Pop_Fields>;
  var_samp?: Maybe<Games_Var_Samp_Fields>;
  variance?: Maybe<Games_Variance_Fields>;
};

/** aggregate fields of "games" */
export type Games_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Games_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "games" */
export type Games_Aggregate_Order_By = {
  avg?: Maybe<Games_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Games_Max_Order_By>;
  min?: Maybe<Games_Min_Order_By>;
  stddev?: Maybe<Games_Stddev_Order_By>;
  stddev_pop?: Maybe<Games_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Games_Stddev_Samp_Order_By>;
  sum?: Maybe<Games_Sum_Order_By>;
  var_pop?: Maybe<Games_Var_Pop_Order_By>;
  var_samp?: Maybe<Games_Var_Samp_Order_By>;
  variance?: Maybe<Games_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "games" */
export type Games_Arr_Rel_Insert_Input = {
  data: Array<Games_Insert_Input>;
  on_conflict?: Maybe<Games_On_Conflict>;
};

/** aggregate avg on columns */
export type Games_Avg_Fields = {
  __typename?: 'games_avg_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
  popularity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "games" */
export type Games_Avg_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  popularity?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "games". All fields are combined with a logical 'AND'. */
export type Games_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Games_Bool_Exp>>>;
  _not?: Maybe<Games_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Games_Bool_Exp>>>;
  cover?: Maybe<String_Comparison_Exp>;
  game_engines?: Maybe<Game_Engine_Bool_Exp>;
  game_genres?: Maybe<Game_Genre_Bool_Exp>;
  game_platforms?: Maybe<Game_Platform_Bool_Exp>;
  game_studios?: Maybe<Game_Studio_Bool_Exp>;
  game_themes?: Maybe<Game_Theme_Bool_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  igdbId?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  popularity?: Maybe<Int_Comparison_Exp>;
  releaseDate?: Maybe<Date_Comparison_Exp>;
  screenshots?: Maybe<Screenshots_Bool_Exp>;
  storyline?: Maybe<String_Comparison_Exp>;
  summary?: Maybe<String_Comparison_Exp>;
  videos?: Maybe<Videos_Bool_Exp>;
};

/** unique or primary key constraints on table "games" */
export enum Games_Constraint {
  /** unique or primary key constraint */
  GamesIgdbIdKey = 'Games_igdbId_key',
  /** unique or primary key constraint */
  GamesPkey = 'Games_pkey',
}

/** input type for incrementing integer column in table "games" */
export type Games_Inc_Input = {
  id?: Maybe<Scalars['bigint']>;
  igdbId?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "games" */
export type Games_Insert_Input = {
  cover?: Maybe<Scalars['String']>;
  game_engines?: Maybe<Game_Engine_Arr_Rel_Insert_Input>;
  game_genres?: Maybe<Game_Genre_Arr_Rel_Insert_Input>;
  game_platforms?: Maybe<Game_Platform_Arr_Rel_Insert_Input>;
  game_studios?: Maybe<Game_Studio_Arr_Rel_Insert_Input>;
  game_themes?: Maybe<Game_Theme_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['bigint']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  releaseDate?: Maybe<Scalars['date']>;
  screenshots?: Maybe<Screenshots_Arr_Rel_Insert_Input>;
  storyline?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  videos?: Maybe<Videos_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Games_Max_Fields = {
  __typename?: 'games_max_fields';
  cover?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  releaseDate?: Maybe<Scalars['date']>;
  storyline?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "games" */
export type Games_Max_Order_By = {
  cover?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  popularity?: Maybe<Order_By>;
  releaseDate?: Maybe<Order_By>;
  storyline?: Maybe<Order_By>;
  summary?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Games_Min_Fields = {
  __typename?: 'games_min_fields';
  cover?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  releaseDate?: Maybe<Scalars['date']>;
  storyline?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "games" */
export type Games_Min_Order_By = {
  cover?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  popularity?: Maybe<Order_By>;
  releaseDate?: Maybe<Order_By>;
  storyline?: Maybe<Order_By>;
  summary?: Maybe<Order_By>;
};

/** response of any mutation on the table "games" */
export type Games_Mutation_Response = {
  __typename?: 'games_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Games>;
};

/** input type for inserting object relation for remote table "games" */
export type Games_Obj_Rel_Insert_Input = {
  data: Games_Insert_Input;
  on_conflict?: Maybe<Games_On_Conflict>;
};

/** on conflict condition type for table "games" */
export type Games_On_Conflict = {
  constraint: Games_Constraint;
  update_columns: Array<Games_Update_Column>;
  where?: Maybe<Games_Bool_Exp>;
};

/** ordering options when selecting data from "games" */
export type Games_Order_By = {
  cover?: Maybe<Order_By>;
  game_engines_aggregate?: Maybe<Game_Engine_Aggregate_Order_By>;
  game_genres_aggregate?: Maybe<Game_Genre_Aggregate_Order_By>;
  game_platforms_aggregate?: Maybe<Game_Platform_Aggregate_Order_By>;
  game_studios_aggregate?: Maybe<Game_Studio_Aggregate_Order_By>;
  game_themes_aggregate?: Maybe<Game_Theme_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  popularity?: Maybe<Order_By>;
  releaseDate?: Maybe<Order_By>;
  screenshots_aggregate?: Maybe<Screenshots_Aggregate_Order_By>;
  storyline?: Maybe<Order_By>;
  summary?: Maybe<Order_By>;
  videos_aggregate?: Maybe<Videos_Aggregate_Order_By>;
};

/** primary key columns input for table: "games" */
export type Games_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "games" */
export enum Games_Select_Column {
  /** column name */
  Cover = 'cover',
  /** column name */
  Id = 'id',
  /** column name */
  IgdbId = 'igdbId',
  /** column name */
  Name = 'name',
  /** column name */
  Popularity = 'popularity',
  /** column name */
  ReleaseDate = 'releaseDate',
  /** column name */
  Storyline = 'storyline',
  /** column name */
  Summary = 'summary',
}

/** input type for updating data in table "games" */
export type Games_Set_Input = {
  cover?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  releaseDate?: Maybe<Scalars['date']>;
  storyline?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Games_Stddev_Fields = {
  __typename?: 'games_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
  popularity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "games" */
export type Games_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  popularity?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Games_Stddev_Pop_Fields = {
  __typename?: 'games_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
  popularity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "games" */
export type Games_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  popularity?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Games_Stddev_Samp_Fields = {
  __typename?: 'games_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
  popularity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "games" */
export type Games_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  popularity?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Games_Sum_Fields = {
  __typename?: 'games_sum_fields';
  id?: Maybe<Scalars['bigint']>;
  igdbId?: Maybe<Scalars['Int']>;
  popularity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "games" */
export type Games_Sum_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  popularity?: Maybe<Order_By>;
};

/** update columns of table "games" */
export enum Games_Update_Column {
  /** column name */
  Cover = 'cover',
  /** column name */
  Id = 'id',
  /** column name */
  IgdbId = 'igdbId',
  /** column name */
  Name = 'name',
  /** column name */
  Popularity = 'popularity',
  /** column name */
  ReleaseDate = 'releaseDate',
  /** column name */
  Storyline = 'storyline',
  /** column name */
  Summary = 'summary',
}

/** aggregate var_pop on columns */
export type Games_Var_Pop_Fields = {
  __typename?: 'games_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
  popularity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "games" */
export type Games_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  popularity?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Games_Var_Samp_Fields = {
  __typename?: 'games_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
  popularity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "games" */
export type Games_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  popularity?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Games_Variance_Fields = {
  __typename?: 'games_variance_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
  popularity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "games" */
export type Games_Variance_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  popularity?: Maybe<Order_By>;
};

/** columns and relationships of "genres" */
export type Genres = {
  __typename?: 'genres';
  /** An array relationship */
  game_genres: Array<Game_Genre>;
  /** An aggregated array relationship */
  game_genres_aggregate: Game_Genre_Aggregate;
  id: Scalars['Int'];
  igdbId: Scalars['Int'];
  name: Scalars['String'];
};

/** columns and relationships of "genres" */
export type GenresGame_GenresArgs = {
  distinct_on?: Maybe<Array<Game_Genre_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Genre_Order_By>>;
  where?: Maybe<Game_Genre_Bool_Exp>;
};

/** columns and relationships of "genres" */
export type GenresGame_Genres_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Genre_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Genre_Order_By>>;
  where?: Maybe<Game_Genre_Bool_Exp>;
};

/** aggregated selection of "genres" */
export type Genres_Aggregate = {
  __typename?: 'genres_aggregate';
  aggregate?: Maybe<Genres_Aggregate_Fields>;
  nodes: Array<Genres>;
};

/** aggregate fields of "genres" */
export type Genres_Aggregate_Fields = {
  __typename?: 'genres_aggregate_fields';
  avg?: Maybe<Genres_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Genres_Max_Fields>;
  min?: Maybe<Genres_Min_Fields>;
  stddev?: Maybe<Genres_Stddev_Fields>;
  stddev_pop?: Maybe<Genres_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Genres_Stddev_Samp_Fields>;
  sum?: Maybe<Genres_Sum_Fields>;
  var_pop?: Maybe<Genres_Var_Pop_Fields>;
  var_samp?: Maybe<Genres_Var_Samp_Fields>;
  variance?: Maybe<Genres_Variance_Fields>;
};

/** aggregate fields of "genres" */
export type Genres_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Genres_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "genres" */
export type Genres_Aggregate_Order_By = {
  avg?: Maybe<Genres_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Genres_Max_Order_By>;
  min?: Maybe<Genres_Min_Order_By>;
  stddev?: Maybe<Genres_Stddev_Order_By>;
  stddev_pop?: Maybe<Genres_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Genres_Stddev_Samp_Order_By>;
  sum?: Maybe<Genres_Sum_Order_By>;
  var_pop?: Maybe<Genres_Var_Pop_Order_By>;
  var_samp?: Maybe<Genres_Var_Samp_Order_By>;
  variance?: Maybe<Genres_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "genres" */
export type Genres_Arr_Rel_Insert_Input = {
  data: Array<Genres_Insert_Input>;
  on_conflict?: Maybe<Genres_On_Conflict>;
};

/** aggregate avg on columns */
export type Genres_Avg_Fields = {
  __typename?: 'genres_avg_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "genres" */
export type Genres_Avg_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "genres". All fields are combined with a logical 'AND'. */
export type Genres_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Genres_Bool_Exp>>>;
  _not?: Maybe<Genres_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Genres_Bool_Exp>>>;
  game_genres?: Maybe<Game_Genre_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  igdbId?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "genres" */
export enum Genres_Constraint {
  /** unique or primary key constraint */
  GenresIgdbIdKey = 'Genres_igdbId_key',
  /** unique or primary key constraint */
  GenresPkey = 'Genres_pkey',
}

/** input type for incrementing integer column in table "genres" */
export type Genres_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "genres" */
export type Genres_Insert_Input = {
  game_genres?: Maybe<Game_Genre_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Genres_Max_Fields = {
  __typename?: 'genres_max_fields';
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "genres" */
export type Genres_Max_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Genres_Min_Fields = {
  __typename?: 'genres_min_fields';
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "genres" */
export type Genres_Min_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "genres" */
export type Genres_Mutation_Response = {
  __typename?: 'genres_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Genres>;
};

/** input type for inserting object relation for remote table "genres" */
export type Genres_Obj_Rel_Insert_Input = {
  data: Genres_Insert_Input;
  on_conflict?: Maybe<Genres_On_Conflict>;
};

/** on conflict condition type for table "genres" */
export type Genres_On_Conflict = {
  constraint: Genres_Constraint;
  update_columns: Array<Genres_Update_Column>;
  where?: Maybe<Genres_Bool_Exp>;
};

/** ordering options when selecting data from "genres" */
export type Genres_Order_By = {
  game_genres_aggregate?: Maybe<Game_Genre_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "genres" */
export type Genres_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "genres" */
export enum Genres_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IgdbId = 'igdbId',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "genres" */
export type Genres_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Genres_Stddev_Fields = {
  __typename?: 'genres_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "genres" */
export type Genres_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Genres_Stddev_Pop_Fields = {
  __typename?: 'genres_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "genres" */
export type Genres_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Genres_Stddev_Samp_Fields = {
  __typename?: 'genres_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "genres" */
export type Genres_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Genres_Sum_Fields = {
  __typename?: 'genres_sum_fields';
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "genres" */
export type Genres_Sum_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** update columns of table "genres" */
export enum Genres_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IgdbId = 'igdbId',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
export type Genres_Var_Pop_Fields = {
  __typename?: 'genres_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "genres" */
export type Genres_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Genres_Var_Samp_Fields = {
  __typename?: 'genres_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "genres" */
export type Genres_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Genres_Variance_Fields = {
  __typename?: 'genres_variance_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "genres" */
export type Genres_Variance_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "engines" */
  delete_engines?: Maybe<Engines_Mutation_Response>;
  /** delete single row from the table: "engines" */
  delete_engines_by_pk?: Maybe<Engines>;
  /** delete data from the table: "game_engine" */
  delete_game_engine?: Maybe<Game_Engine_Mutation_Response>;
  /** delete single row from the table: "game_engine" */
  delete_game_engine_by_pk?: Maybe<Game_Engine>;
  /** delete data from the table: "game_genre" */
  delete_game_genre?: Maybe<Game_Genre_Mutation_Response>;
  /** delete single row from the table: "game_genre" */
  delete_game_genre_by_pk?: Maybe<Game_Genre>;
  /** delete data from the table: "game_platform" */
  delete_game_platform?: Maybe<Game_Platform_Mutation_Response>;
  /** delete single row from the table: "game_platform" */
  delete_game_platform_by_pk?: Maybe<Game_Platform>;
  /** delete data from the table: "game_studio" */
  delete_game_studio?: Maybe<Game_Studio_Mutation_Response>;
  /** delete single row from the table: "game_studio" */
  delete_game_studio_by_pk?: Maybe<Game_Studio>;
  /** delete data from the table: "game_theme" */
  delete_game_theme?: Maybe<Game_Theme_Mutation_Response>;
  /** delete single row from the table: "game_theme" */
  delete_game_theme_by_pk?: Maybe<Game_Theme>;
  /** delete data from the table: "games" */
  delete_games?: Maybe<Games_Mutation_Response>;
  /** delete single row from the table: "games" */
  delete_games_by_pk?: Maybe<Games>;
  /** delete data from the table: "genres" */
  delete_genres?: Maybe<Genres_Mutation_Response>;
  /** delete single row from the table: "genres" */
  delete_genres_by_pk?: Maybe<Genres>;
  /** delete data from the table: "platforms" */
  delete_platforms?: Maybe<Platforms_Mutation_Response>;
  /** delete single row from the table: "platforms" */
  delete_platforms_by_pk?: Maybe<Platforms>;
  /** delete data from the table: "screenshots" */
  delete_screenshots?: Maybe<Screenshots_Mutation_Response>;
  /** delete single row from the table: "screenshots" */
  delete_screenshots_by_pk?: Maybe<Screenshots>;
  /** delete data from the table: "studios" */
  delete_studios?: Maybe<Studios_Mutation_Response>;
  /** delete single row from the table: "studios" */
  delete_studios_by_pk?: Maybe<Studios>;
  /** delete data from the table: "themes" */
  delete_themes?: Maybe<Themes_Mutation_Response>;
  /** delete single row from the table: "themes" */
  delete_themes_by_pk?: Maybe<Themes>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** delete data from the table: "videos" */
  delete_videos?: Maybe<Videos_Mutation_Response>;
  /** delete single row from the table: "videos" */
  delete_videos_by_pk?: Maybe<Videos>;
  /** insert data into the table: "engines" */
  insert_engines?: Maybe<Engines_Mutation_Response>;
  /** insert a single row into the table: "engines" */
  insert_engines_one?: Maybe<Engines>;
  /** insert data into the table: "game_engine" */
  insert_game_engine?: Maybe<Game_Engine_Mutation_Response>;
  /** insert a single row into the table: "game_engine" */
  insert_game_engine_one?: Maybe<Game_Engine>;
  /** insert data into the table: "game_genre" */
  insert_game_genre?: Maybe<Game_Genre_Mutation_Response>;
  /** insert a single row into the table: "game_genre" */
  insert_game_genre_one?: Maybe<Game_Genre>;
  /** insert data into the table: "game_platform" */
  insert_game_platform?: Maybe<Game_Platform_Mutation_Response>;
  /** insert a single row into the table: "game_platform" */
  insert_game_platform_one?: Maybe<Game_Platform>;
  /** insert data into the table: "game_studio" */
  insert_game_studio?: Maybe<Game_Studio_Mutation_Response>;
  /** insert a single row into the table: "game_studio" */
  insert_game_studio_one?: Maybe<Game_Studio>;
  /** insert data into the table: "game_theme" */
  insert_game_theme?: Maybe<Game_Theme_Mutation_Response>;
  /** insert a single row into the table: "game_theme" */
  insert_game_theme_one?: Maybe<Game_Theme>;
  /** insert data into the table: "games" */
  insert_games?: Maybe<Games_Mutation_Response>;
  /** insert a single row into the table: "games" */
  insert_games_one?: Maybe<Games>;
  /** insert data into the table: "genres" */
  insert_genres?: Maybe<Genres_Mutation_Response>;
  /** insert a single row into the table: "genres" */
  insert_genres_one?: Maybe<Genres>;
  /** insert data into the table: "platforms" */
  insert_platforms?: Maybe<Platforms_Mutation_Response>;
  /** insert a single row into the table: "platforms" */
  insert_platforms_one?: Maybe<Platforms>;
  /** insert data into the table: "screenshots" */
  insert_screenshots?: Maybe<Screenshots_Mutation_Response>;
  /** insert a single row into the table: "screenshots" */
  insert_screenshots_one?: Maybe<Screenshots>;
  /** insert data into the table: "studios" */
  insert_studios?: Maybe<Studios_Mutation_Response>;
  /** insert a single row into the table: "studios" */
  insert_studios_one?: Maybe<Studios>;
  /** insert data into the table: "themes" */
  insert_themes?: Maybe<Themes_Mutation_Response>;
  /** insert a single row into the table: "themes" */
  insert_themes_one?: Maybe<Themes>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  /** insert data into the table: "videos" */
  insert_videos?: Maybe<Videos_Mutation_Response>;
  /** insert a single row into the table: "videos" */
  insert_videos_one?: Maybe<Videos>;
  /** update data of the table: "engines" */
  update_engines?: Maybe<Engines_Mutation_Response>;
  /** update single row of the table: "engines" */
  update_engines_by_pk?: Maybe<Engines>;
  /** update data of the table: "game_engine" */
  update_game_engine?: Maybe<Game_Engine_Mutation_Response>;
  /** update single row of the table: "game_engine" */
  update_game_engine_by_pk?: Maybe<Game_Engine>;
  /** update data of the table: "game_genre" */
  update_game_genre?: Maybe<Game_Genre_Mutation_Response>;
  /** update single row of the table: "game_genre" */
  update_game_genre_by_pk?: Maybe<Game_Genre>;
  /** update data of the table: "game_platform" */
  update_game_platform?: Maybe<Game_Platform_Mutation_Response>;
  /** update single row of the table: "game_platform" */
  update_game_platform_by_pk?: Maybe<Game_Platform>;
  /** update data of the table: "game_studio" */
  update_game_studio?: Maybe<Game_Studio_Mutation_Response>;
  /** update single row of the table: "game_studio" */
  update_game_studio_by_pk?: Maybe<Game_Studio>;
  /** update data of the table: "game_theme" */
  update_game_theme?: Maybe<Game_Theme_Mutation_Response>;
  /** update single row of the table: "game_theme" */
  update_game_theme_by_pk?: Maybe<Game_Theme>;
  /** update data of the table: "games" */
  update_games?: Maybe<Games_Mutation_Response>;
  /** update single row of the table: "games" */
  update_games_by_pk?: Maybe<Games>;
  /** update data of the table: "genres" */
  update_genres?: Maybe<Genres_Mutation_Response>;
  /** update single row of the table: "genres" */
  update_genres_by_pk?: Maybe<Genres>;
  /** update data of the table: "platforms" */
  update_platforms?: Maybe<Platforms_Mutation_Response>;
  /** update single row of the table: "platforms" */
  update_platforms_by_pk?: Maybe<Platforms>;
  /** update data of the table: "screenshots" */
  update_screenshots?: Maybe<Screenshots_Mutation_Response>;
  /** update single row of the table: "screenshots" */
  update_screenshots_by_pk?: Maybe<Screenshots>;
  /** update data of the table: "studios" */
  update_studios?: Maybe<Studios_Mutation_Response>;
  /** update single row of the table: "studios" */
  update_studios_by_pk?: Maybe<Studios>;
  /** update data of the table: "themes" */
  update_themes?: Maybe<Themes_Mutation_Response>;
  /** update single row of the table: "themes" */
  update_themes_by_pk?: Maybe<Themes>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
  /** update data of the table: "videos" */
  update_videos?: Maybe<Videos_Mutation_Response>;
  /** update single row of the table: "videos" */
  update_videos_by_pk?: Maybe<Videos>;
};

/** mutation root */
export type Mutation_RootDelete_EnginesArgs = {
  where: Engines_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Engines_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Game_EngineArgs = {
  where: Game_Engine_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Game_Engine_By_PkArgs = {
  engineId: Scalars['Int'];
  gameId: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_Game_GenreArgs = {
  where: Game_Genre_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Game_Genre_By_PkArgs = {
  gameId: Scalars['bigint'];
  genreId: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Game_PlatformArgs = {
  where: Game_Platform_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Game_Platform_By_PkArgs = {
  gameId: Scalars['bigint'];
  platformId: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Game_StudioArgs = {
  where: Game_Studio_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Game_Studio_By_PkArgs = {
  gameId: Scalars['Int'];
  studioId: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_Game_ThemeArgs = {
  where: Game_Theme_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Game_Theme_By_PkArgs = {
  gameId: Scalars['bigint'];
  themeId: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_GamesArgs = {
  where: Games_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Games_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_GenresArgs = {
  where: Genres_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Genres_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_PlatformsArgs = {
  where: Platforms_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Platforms_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_ScreenshotsArgs = {
  where: Screenshots_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Screenshots_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootDelete_StudiosArgs = {
  where: Studios_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Studios_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_ThemesArgs = {
  where: Themes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Themes_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['Int'];
};

/** mutation root */
export type Mutation_RootDelete_VideosArgs = {
  where: Videos_Bool_Exp;
};

/** mutation root */
export type Mutation_RootDelete_Videos_By_PkArgs = {
  id: Scalars['bigint'];
};

/** mutation root */
export type Mutation_RootInsert_EnginesArgs = {
  objects: Array<Engines_Insert_Input>;
  on_conflict?: Maybe<Engines_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Engines_OneArgs = {
  object: Engines_Insert_Input;
  on_conflict?: Maybe<Engines_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_EngineArgs = {
  objects: Array<Game_Engine_Insert_Input>;
  on_conflict?: Maybe<Game_Engine_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_Engine_OneArgs = {
  object: Game_Engine_Insert_Input;
  on_conflict?: Maybe<Game_Engine_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_GenreArgs = {
  objects: Array<Game_Genre_Insert_Input>;
  on_conflict?: Maybe<Game_Genre_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_Genre_OneArgs = {
  object: Game_Genre_Insert_Input;
  on_conflict?: Maybe<Game_Genre_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_PlatformArgs = {
  objects: Array<Game_Platform_Insert_Input>;
  on_conflict?: Maybe<Game_Platform_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_Platform_OneArgs = {
  object: Game_Platform_Insert_Input;
  on_conflict?: Maybe<Game_Platform_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_StudioArgs = {
  objects: Array<Game_Studio_Insert_Input>;
  on_conflict?: Maybe<Game_Studio_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_Studio_OneArgs = {
  object: Game_Studio_Insert_Input;
  on_conflict?: Maybe<Game_Studio_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_ThemeArgs = {
  objects: Array<Game_Theme_Insert_Input>;
  on_conflict?: Maybe<Game_Theme_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Game_Theme_OneArgs = {
  object: Game_Theme_Insert_Input;
  on_conflict?: Maybe<Game_Theme_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GamesArgs = {
  objects: Array<Games_Insert_Input>;
  on_conflict?: Maybe<Games_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Games_OneArgs = {
  object: Games_Insert_Input;
  on_conflict?: Maybe<Games_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_GenresArgs = {
  objects: Array<Genres_Insert_Input>;
  on_conflict?: Maybe<Genres_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Genres_OneArgs = {
  object: Genres_Insert_Input;
  on_conflict?: Maybe<Genres_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_PlatformsArgs = {
  objects: Array<Platforms_Insert_Input>;
  on_conflict?: Maybe<Platforms_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Platforms_OneArgs = {
  object: Platforms_Insert_Input;
  on_conflict?: Maybe<Platforms_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ScreenshotsArgs = {
  objects: Array<Screenshots_Insert_Input>;
  on_conflict?: Maybe<Screenshots_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Screenshots_OneArgs = {
  object: Screenshots_Insert_Input;
  on_conflict?: Maybe<Screenshots_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_StudiosArgs = {
  objects: Array<Studios_Insert_Input>;
  on_conflict?: Maybe<Studios_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Studios_OneArgs = {
  object: Studios_Insert_Input;
  on_conflict?: Maybe<Studios_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_ThemesArgs = {
  objects: Array<Themes_Insert_Input>;
  on_conflict?: Maybe<Themes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Themes_OneArgs = {
  object: Themes_Insert_Input;
  on_conflict?: Maybe<Themes_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_VideosArgs = {
  objects: Array<Videos_Insert_Input>;
  on_conflict?: Maybe<Videos_On_Conflict>;
};

/** mutation root */
export type Mutation_RootInsert_Videos_OneArgs = {
  object: Videos_Insert_Input;
  on_conflict?: Maybe<Videos_On_Conflict>;
};

/** mutation root */
export type Mutation_RootUpdate_EnginesArgs = {
  _inc?: Maybe<Engines_Inc_Input>;
  _set?: Maybe<Engines_Set_Input>;
  where: Engines_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Engines_By_PkArgs = {
  _inc?: Maybe<Engines_Inc_Input>;
  _set?: Maybe<Engines_Set_Input>;
  pk_columns: Engines_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Game_EngineArgs = {
  _inc?: Maybe<Game_Engine_Inc_Input>;
  _set?: Maybe<Game_Engine_Set_Input>;
  where: Game_Engine_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Game_Engine_By_PkArgs = {
  _inc?: Maybe<Game_Engine_Inc_Input>;
  _set?: Maybe<Game_Engine_Set_Input>;
  pk_columns: Game_Engine_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Game_GenreArgs = {
  _inc?: Maybe<Game_Genre_Inc_Input>;
  _set?: Maybe<Game_Genre_Set_Input>;
  where: Game_Genre_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Game_Genre_By_PkArgs = {
  _inc?: Maybe<Game_Genre_Inc_Input>;
  _set?: Maybe<Game_Genre_Set_Input>;
  pk_columns: Game_Genre_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Game_PlatformArgs = {
  _inc?: Maybe<Game_Platform_Inc_Input>;
  _set?: Maybe<Game_Platform_Set_Input>;
  where: Game_Platform_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Game_Platform_By_PkArgs = {
  _inc?: Maybe<Game_Platform_Inc_Input>;
  _set?: Maybe<Game_Platform_Set_Input>;
  pk_columns: Game_Platform_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Game_StudioArgs = {
  _inc?: Maybe<Game_Studio_Inc_Input>;
  _set?: Maybe<Game_Studio_Set_Input>;
  where: Game_Studio_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Game_Studio_By_PkArgs = {
  _inc?: Maybe<Game_Studio_Inc_Input>;
  _set?: Maybe<Game_Studio_Set_Input>;
  pk_columns: Game_Studio_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_Game_ThemeArgs = {
  _inc?: Maybe<Game_Theme_Inc_Input>;
  _set?: Maybe<Game_Theme_Set_Input>;
  where: Game_Theme_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Game_Theme_By_PkArgs = {
  _inc?: Maybe<Game_Theme_Inc_Input>;
  _set?: Maybe<Game_Theme_Set_Input>;
  pk_columns: Game_Theme_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_GamesArgs = {
  _inc?: Maybe<Games_Inc_Input>;
  _set?: Maybe<Games_Set_Input>;
  where: Games_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Games_By_PkArgs = {
  _inc?: Maybe<Games_Inc_Input>;
  _set?: Maybe<Games_Set_Input>;
  pk_columns: Games_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_GenresArgs = {
  _inc?: Maybe<Genres_Inc_Input>;
  _set?: Maybe<Genres_Set_Input>;
  where: Genres_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Genres_By_PkArgs = {
  _inc?: Maybe<Genres_Inc_Input>;
  _set?: Maybe<Genres_Set_Input>;
  pk_columns: Genres_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_PlatformsArgs = {
  _inc?: Maybe<Platforms_Inc_Input>;
  _set?: Maybe<Platforms_Set_Input>;
  where: Platforms_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Platforms_By_PkArgs = {
  _inc?: Maybe<Platforms_Inc_Input>;
  _set?: Maybe<Platforms_Set_Input>;
  pk_columns: Platforms_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ScreenshotsArgs = {
  _inc?: Maybe<Screenshots_Inc_Input>;
  _set?: Maybe<Screenshots_Set_Input>;
  where: Screenshots_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Screenshots_By_PkArgs = {
  _inc?: Maybe<Screenshots_Inc_Input>;
  _set?: Maybe<Screenshots_Set_Input>;
  pk_columns: Screenshots_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_StudiosArgs = {
  _inc?: Maybe<Studios_Inc_Input>;
  _set?: Maybe<Studios_Set_Input>;
  where: Studios_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Studios_By_PkArgs = {
  _inc?: Maybe<Studios_Inc_Input>;
  _set?: Maybe<Studios_Set_Input>;
  pk_columns: Studios_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_ThemesArgs = {
  _inc?: Maybe<Themes_Inc_Input>;
  _set?: Maybe<Themes_Set_Input>;
  where: Themes_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Themes_By_PkArgs = {
  _inc?: Maybe<Themes_Inc_Input>;
  _set?: Maybe<Themes_Set_Input>;
  pk_columns: Themes_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _inc?: Maybe<Users_Inc_Input>;
  _set?: Maybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

/** mutation root */
export type Mutation_RootUpdate_VideosArgs = {
  _inc?: Maybe<Videos_Inc_Input>;
  _set?: Maybe<Videos_Set_Input>;
  where: Videos_Bool_Exp;
};

/** mutation root */
export type Mutation_RootUpdate_Videos_By_PkArgs = {
  _inc?: Maybe<Videos_Inc_Input>;
  _set?: Maybe<Videos_Set_Input>;
  pk_columns: Videos_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last',
}

/** columns and relationships of "platforms" */
export type Platforms = {
  __typename?: 'platforms';
  /** An array relationship */
  game_platforms: Array<Game_Platform>;
  /** An aggregated array relationship */
  game_platforms_aggregate: Game_Platform_Aggregate;
  id: Scalars['Int'];
  igdbId: Scalars['Int'];
  name: Scalars['String'];
};

/** columns and relationships of "platforms" */
export type PlatformsGame_PlatformsArgs = {
  distinct_on?: Maybe<Array<Game_Platform_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Platform_Order_By>>;
  where?: Maybe<Game_Platform_Bool_Exp>;
};

/** columns and relationships of "platforms" */
export type PlatformsGame_Platforms_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Platform_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Platform_Order_By>>;
  where?: Maybe<Game_Platform_Bool_Exp>;
};

/** aggregated selection of "platforms" */
export type Platforms_Aggregate = {
  __typename?: 'platforms_aggregate';
  aggregate?: Maybe<Platforms_Aggregate_Fields>;
  nodes: Array<Platforms>;
};

/** aggregate fields of "platforms" */
export type Platforms_Aggregate_Fields = {
  __typename?: 'platforms_aggregate_fields';
  avg?: Maybe<Platforms_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Platforms_Max_Fields>;
  min?: Maybe<Platforms_Min_Fields>;
  stddev?: Maybe<Platforms_Stddev_Fields>;
  stddev_pop?: Maybe<Platforms_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Platforms_Stddev_Samp_Fields>;
  sum?: Maybe<Platforms_Sum_Fields>;
  var_pop?: Maybe<Platforms_Var_Pop_Fields>;
  var_samp?: Maybe<Platforms_Var_Samp_Fields>;
  variance?: Maybe<Platforms_Variance_Fields>;
};

/** aggregate fields of "platforms" */
export type Platforms_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Platforms_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "platforms" */
export type Platforms_Aggregate_Order_By = {
  avg?: Maybe<Platforms_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Platforms_Max_Order_By>;
  min?: Maybe<Platforms_Min_Order_By>;
  stddev?: Maybe<Platforms_Stddev_Order_By>;
  stddev_pop?: Maybe<Platforms_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Platforms_Stddev_Samp_Order_By>;
  sum?: Maybe<Platforms_Sum_Order_By>;
  var_pop?: Maybe<Platforms_Var_Pop_Order_By>;
  var_samp?: Maybe<Platforms_Var_Samp_Order_By>;
  variance?: Maybe<Platforms_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "platforms" */
export type Platforms_Arr_Rel_Insert_Input = {
  data: Array<Platforms_Insert_Input>;
  on_conflict?: Maybe<Platforms_On_Conflict>;
};

/** aggregate avg on columns */
export type Platforms_Avg_Fields = {
  __typename?: 'platforms_avg_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "platforms" */
export type Platforms_Avg_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "platforms". All fields are combined with a logical 'AND'. */
export type Platforms_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Platforms_Bool_Exp>>>;
  _not?: Maybe<Platforms_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Platforms_Bool_Exp>>>;
  game_platforms?: Maybe<Game_Platform_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  igdbId?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "platforms" */
export enum Platforms_Constraint {
  /** unique or primary key constraint */
  PlatformIgdbIdKey = 'Platform_igdbId_key',
  /** unique or primary key constraint */
  PlatformPkey = 'Platform_pkey',
}

/** input type for incrementing integer column in table "platforms" */
export type Platforms_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "platforms" */
export type Platforms_Insert_Input = {
  game_platforms?: Maybe<Game_Platform_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Platforms_Max_Fields = {
  __typename?: 'platforms_max_fields';
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "platforms" */
export type Platforms_Max_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Platforms_Min_Fields = {
  __typename?: 'platforms_min_fields';
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "platforms" */
export type Platforms_Min_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "platforms" */
export type Platforms_Mutation_Response = {
  __typename?: 'platforms_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Platforms>;
};

/** input type for inserting object relation for remote table "platforms" */
export type Platforms_Obj_Rel_Insert_Input = {
  data: Platforms_Insert_Input;
  on_conflict?: Maybe<Platforms_On_Conflict>;
};

/** on conflict condition type for table "platforms" */
export type Platforms_On_Conflict = {
  constraint: Platforms_Constraint;
  update_columns: Array<Platforms_Update_Column>;
  where?: Maybe<Platforms_Bool_Exp>;
};

/** ordering options when selecting data from "platforms" */
export type Platforms_Order_By = {
  game_platforms_aggregate?: Maybe<Game_Platform_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "platforms" */
export type Platforms_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "platforms" */
export enum Platforms_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IgdbId = 'igdbId',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "platforms" */
export type Platforms_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Platforms_Stddev_Fields = {
  __typename?: 'platforms_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "platforms" */
export type Platforms_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Platforms_Stddev_Pop_Fields = {
  __typename?: 'platforms_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "platforms" */
export type Platforms_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Platforms_Stddev_Samp_Fields = {
  __typename?: 'platforms_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "platforms" */
export type Platforms_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Platforms_Sum_Fields = {
  __typename?: 'platforms_sum_fields';
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "platforms" */
export type Platforms_Sum_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** update columns of table "platforms" */
export enum Platforms_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IgdbId = 'igdbId',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
export type Platforms_Var_Pop_Fields = {
  __typename?: 'platforms_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "platforms" */
export type Platforms_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Platforms_Var_Samp_Fields = {
  __typename?: 'platforms_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "platforms" */
export type Platforms_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Platforms_Variance_Fields = {
  __typename?: 'platforms_variance_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "platforms" */
export type Platforms_Variance_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** query root */
export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "engines" */
  engines: Array<Engines>;
  /** fetch aggregated fields from the table: "engines" */
  engines_aggregate: Engines_Aggregate;
  /** fetch data from the table: "engines" using primary key columns */
  engines_by_pk?: Maybe<Engines>;
  /** fetch data from the table: "game_engine" */
  game_engine: Array<Game_Engine>;
  /** fetch aggregated fields from the table: "game_engine" */
  game_engine_aggregate: Game_Engine_Aggregate;
  /** fetch data from the table: "game_engine" using primary key columns */
  game_engine_by_pk?: Maybe<Game_Engine>;
  /** fetch data from the table: "game_genre" */
  game_genre: Array<Game_Genre>;
  /** fetch aggregated fields from the table: "game_genre" */
  game_genre_aggregate: Game_Genre_Aggregate;
  /** fetch data from the table: "game_genre" using primary key columns */
  game_genre_by_pk?: Maybe<Game_Genre>;
  /** fetch data from the table: "game_platform" */
  game_platform: Array<Game_Platform>;
  /** fetch aggregated fields from the table: "game_platform" */
  game_platform_aggregate: Game_Platform_Aggregate;
  /** fetch data from the table: "game_platform" using primary key columns */
  game_platform_by_pk?: Maybe<Game_Platform>;
  /** fetch data from the table: "game_studio" */
  game_studio: Array<Game_Studio>;
  /** fetch aggregated fields from the table: "game_studio" */
  game_studio_aggregate: Game_Studio_Aggregate;
  /** fetch data from the table: "game_studio" using primary key columns */
  game_studio_by_pk?: Maybe<Game_Studio>;
  /** fetch data from the table: "game_theme" */
  game_theme: Array<Game_Theme>;
  /** fetch aggregated fields from the table: "game_theme" */
  game_theme_aggregate: Game_Theme_Aggregate;
  /** fetch data from the table: "game_theme" using primary key columns */
  game_theme_by_pk?: Maybe<Game_Theme>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** fetch aggregated fields from the table: "games" */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "genres" */
  genres: Array<Genres>;
  /** fetch aggregated fields from the table: "genres" */
  genres_aggregate: Genres_Aggregate;
  /** fetch data from the table: "genres" using primary key columns */
  genres_by_pk?: Maybe<Genres>;
  /** fetch data from the table: "platforms" */
  platforms: Array<Platforms>;
  /** fetch aggregated fields from the table: "platforms" */
  platforms_aggregate: Platforms_Aggregate;
  /** fetch data from the table: "platforms" using primary key columns */
  platforms_by_pk?: Maybe<Platforms>;
  /** fetch data from the table: "screenshots" */
  screenshots: Array<Screenshots>;
  /** fetch aggregated fields from the table: "screenshots" */
  screenshots_aggregate: Screenshots_Aggregate;
  /** fetch data from the table: "screenshots" using primary key columns */
  screenshots_by_pk?: Maybe<Screenshots>;
  /** fetch data from the table: "studios" */
  studios: Array<Studios>;
  /** fetch aggregated fields from the table: "studios" */
  studios_aggregate: Studios_Aggregate;
  /** fetch data from the table: "studios" using primary key columns */
  studios_by_pk?: Maybe<Studios>;
  /** fetch data from the table: "themes" */
  themes: Array<Themes>;
  /** fetch aggregated fields from the table: "themes" */
  themes_aggregate: Themes_Aggregate;
  /** fetch data from the table: "themes" using primary key columns */
  themes_by_pk?: Maybe<Themes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "videos" */
  videos: Array<Videos>;
  /** fetch aggregated fields from the table: "videos" */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
};

/** query root */
export type Query_RootEnginesArgs = {
  distinct_on?: Maybe<Array<Engines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Engines_Order_By>>;
  where?: Maybe<Engines_Bool_Exp>;
};

/** query root */
export type Query_RootEngines_AggregateArgs = {
  distinct_on?: Maybe<Array<Engines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Engines_Order_By>>;
  where?: Maybe<Engines_Bool_Exp>;
};

/** query root */
export type Query_RootEngines_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootGame_EngineArgs = {
  distinct_on?: Maybe<Array<Game_Engine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Engine_Order_By>>;
  where?: Maybe<Game_Engine_Bool_Exp>;
};

/** query root */
export type Query_RootGame_Engine_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Engine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Engine_Order_By>>;
  where?: Maybe<Game_Engine_Bool_Exp>;
};

/** query root */
export type Query_RootGame_Engine_By_PkArgs = {
  engineId: Scalars['Int'];
  gameId: Scalars['bigint'];
};

/** query root */
export type Query_RootGame_GenreArgs = {
  distinct_on?: Maybe<Array<Game_Genre_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Genre_Order_By>>;
  where?: Maybe<Game_Genre_Bool_Exp>;
};

/** query root */
export type Query_RootGame_Genre_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Genre_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Genre_Order_By>>;
  where?: Maybe<Game_Genre_Bool_Exp>;
};

/** query root */
export type Query_RootGame_Genre_By_PkArgs = {
  gameId: Scalars['bigint'];
  genreId: Scalars['Int'];
};

/** query root */
export type Query_RootGame_PlatformArgs = {
  distinct_on?: Maybe<Array<Game_Platform_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Platform_Order_By>>;
  where?: Maybe<Game_Platform_Bool_Exp>;
};

/** query root */
export type Query_RootGame_Platform_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Platform_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Platform_Order_By>>;
  where?: Maybe<Game_Platform_Bool_Exp>;
};

/** query root */
export type Query_RootGame_Platform_By_PkArgs = {
  gameId: Scalars['bigint'];
  platformId: Scalars['Int'];
};

/** query root */
export type Query_RootGame_StudioArgs = {
  distinct_on?: Maybe<Array<Game_Studio_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Studio_Order_By>>;
  where?: Maybe<Game_Studio_Bool_Exp>;
};

/** query root */
export type Query_RootGame_Studio_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Studio_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Studio_Order_By>>;
  where?: Maybe<Game_Studio_Bool_Exp>;
};

/** query root */
export type Query_RootGame_Studio_By_PkArgs = {
  gameId: Scalars['Int'];
  studioId: Scalars['Int'];
};

/** query root */
export type Query_RootGame_ThemeArgs = {
  distinct_on?: Maybe<Array<Game_Theme_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Theme_Order_By>>;
  where?: Maybe<Game_Theme_Bool_Exp>;
};

/** query root */
export type Query_RootGame_Theme_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Theme_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Theme_Order_By>>;
  where?: Maybe<Game_Theme_Bool_Exp>;
};

/** query root */
export type Query_RootGame_Theme_By_PkArgs = {
  gameId: Scalars['bigint'];
  themeId: Scalars['Int'];
};

/** query root */
export type Query_RootGamesArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

/** query root */
export type Query_RootGames_AggregateArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

/** query root */
export type Query_RootGames_By_PkArgs = {
  id: Scalars['bigint'];
};

/** query root */
export type Query_RootGenresArgs = {
  distinct_on?: Maybe<Array<Genres_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genres_Order_By>>;
  where?: Maybe<Genres_Bool_Exp>;
};

/** query root */
export type Query_RootGenres_AggregateArgs = {
  distinct_on?: Maybe<Array<Genres_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genres_Order_By>>;
  where?: Maybe<Genres_Bool_Exp>;
};

/** query root */
export type Query_RootGenres_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootPlatformsArgs = {
  distinct_on?: Maybe<Array<Platforms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Platforms_Order_By>>;
  where?: Maybe<Platforms_Bool_Exp>;
};

/** query root */
export type Query_RootPlatforms_AggregateArgs = {
  distinct_on?: Maybe<Array<Platforms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Platforms_Order_By>>;
  where?: Maybe<Platforms_Bool_Exp>;
};

/** query root */
export type Query_RootPlatforms_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootScreenshotsArgs = {
  distinct_on?: Maybe<Array<Screenshots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Screenshots_Order_By>>;
  where?: Maybe<Screenshots_Bool_Exp>;
};

/** query root */
export type Query_RootScreenshots_AggregateArgs = {
  distinct_on?: Maybe<Array<Screenshots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Screenshots_Order_By>>;
  where?: Maybe<Screenshots_Bool_Exp>;
};

/** query root */
export type Query_RootScreenshots_By_PkArgs = {
  id: Scalars['bigint'];
};

/** query root */
export type Query_RootStudiosArgs = {
  distinct_on?: Maybe<Array<Studios_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Studios_Order_By>>;
  where?: Maybe<Studios_Bool_Exp>;
};

/** query root */
export type Query_RootStudios_AggregateArgs = {
  distinct_on?: Maybe<Array<Studios_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Studios_Order_By>>;
  where?: Maybe<Studios_Bool_Exp>;
};

/** query root */
export type Query_RootStudios_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootThemesArgs = {
  distinct_on?: Maybe<Array<Themes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Themes_Order_By>>;
  where?: Maybe<Themes_Bool_Exp>;
};

/** query root */
export type Query_RootThemes_AggregateArgs = {
  distinct_on?: Maybe<Array<Themes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Themes_Order_By>>;
  where?: Maybe<Themes_Bool_Exp>;
};

/** query root */
export type Query_RootThemes_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** query root */
export type Query_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** query root */
export type Query_RootVideosArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};

/** query root */
export type Query_RootVideos_AggregateArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};

/** query root */
export type Query_RootVideos_By_PkArgs = {
  id: Scalars['bigint'];
};

/** columns and relationships of "screenshots" */
export type Screenshots = {
  __typename?: 'screenshots';
  gameId: Scalars['Int'];
  id: Scalars['bigint'];
  url: Scalars['String'];
};

/** aggregated selection of "screenshots" */
export type Screenshots_Aggregate = {
  __typename?: 'screenshots_aggregate';
  aggregate?: Maybe<Screenshots_Aggregate_Fields>;
  nodes: Array<Screenshots>;
};

/** aggregate fields of "screenshots" */
export type Screenshots_Aggregate_Fields = {
  __typename?: 'screenshots_aggregate_fields';
  avg?: Maybe<Screenshots_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Screenshots_Max_Fields>;
  min?: Maybe<Screenshots_Min_Fields>;
  stddev?: Maybe<Screenshots_Stddev_Fields>;
  stddev_pop?: Maybe<Screenshots_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Screenshots_Stddev_Samp_Fields>;
  sum?: Maybe<Screenshots_Sum_Fields>;
  var_pop?: Maybe<Screenshots_Var_Pop_Fields>;
  var_samp?: Maybe<Screenshots_Var_Samp_Fields>;
  variance?: Maybe<Screenshots_Variance_Fields>;
};

/** aggregate fields of "screenshots" */
export type Screenshots_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Screenshots_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "screenshots" */
export type Screenshots_Aggregate_Order_By = {
  avg?: Maybe<Screenshots_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Screenshots_Max_Order_By>;
  min?: Maybe<Screenshots_Min_Order_By>;
  stddev?: Maybe<Screenshots_Stddev_Order_By>;
  stddev_pop?: Maybe<Screenshots_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Screenshots_Stddev_Samp_Order_By>;
  sum?: Maybe<Screenshots_Sum_Order_By>;
  var_pop?: Maybe<Screenshots_Var_Pop_Order_By>;
  var_samp?: Maybe<Screenshots_Var_Samp_Order_By>;
  variance?: Maybe<Screenshots_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "screenshots" */
export type Screenshots_Arr_Rel_Insert_Input = {
  data: Array<Screenshots_Insert_Input>;
  on_conflict?: Maybe<Screenshots_On_Conflict>;
};

/** aggregate avg on columns */
export type Screenshots_Avg_Fields = {
  __typename?: 'screenshots_avg_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "screenshots" */
export type Screenshots_Avg_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "screenshots". All fields are combined with a logical 'AND'. */
export type Screenshots_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Screenshots_Bool_Exp>>>;
  _not?: Maybe<Screenshots_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Screenshots_Bool_Exp>>>;
  gameId?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "screenshots" */
export enum Screenshots_Constraint {
  /** unique or primary key constraint */
  ScreenshotsPkey = 'screenshots_pkey',
}

/** input type for incrementing integer column in table "screenshots" */
export type Screenshots_Inc_Input = {
  gameId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "screenshots" */
export type Screenshots_Insert_Input = {
  gameId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Screenshots_Max_Fields = {
  __typename?: 'screenshots_max_fields';
  gameId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "screenshots" */
export type Screenshots_Max_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Screenshots_Min_Fields = {
  __typename?: 'screenshots_min_fields';
  gameId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "screenshots" */
export type Screenshots_Min_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "screenshots" */
export type Screenshots_Mutation_Response = {
  __typename?: 'screenshots_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Screenshots>;
};

/** input type for inserting object relation for remote table "screenshots" */
export type Screenshots_Obj_Rel_Insert_Input = {
  data: Screenshots_Insert_Input;
  on_conflict?: Maybe<Screenshots_On_Conflict>;
};

/** on conflict condition type for table "screenshots" */
export type Screenshots_On_Conflict = {
  constraint: Screenshots_Constraint;
  update_columns: Array<Screenshots_Update_Column>;
  where?: Maybe<Screenshots_Bool_Exp>;
};

/** ordering options when selecting data from "screenshots" */
export type Screenshots_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: "screenshots" */
export type Screenshots_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "screenshots" */
export enum Screenshots_Select_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  Id = 'id',
  /** column name */
  Url = 'url',
}

/** input type for updating data in table "screenshots" */
export type Screenshots_Set_Input = {
  gameId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Screenshots_Stddev_Fields = {
  __typename?: 'screenshots_stddev_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "screenshots" */
export type Screenshots_Stddev_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Screenshots_Stddev_Pop_Fields = {
  __typename?: 'screenshots_stddev_pop_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "screenshots" */
export type Screenshots_Stddev_Pop_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Screenshots_Stddev_Samp_Fields = {
  __typename?: 'screenshots_stddev_samp_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "screenshots" */
export type Screenshots_Stddev_Samp_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Screenshots_Sum_Fields = {
  __typename?: 'screenshots_sum_fields';
  gameId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "screenshots" */
export type Screenshots_Sum_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "screenshots" */
export enum Screenshots_Update_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  Id = 'id',
  /** column name */
  Url = 'url',
}

/** aggregate var_pop on columns */
export type Screenshots_Var_Pop_Fields = {
  __typename?: 'screenshots_var_pop_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "screenshots" */
export type Screenshots_Var_Pop_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Screenshots_Var_Samp_Fields = {
  __typename?: 'screenshots_var_samp_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "screenshots" */
export type Screenshots_Var_Samp_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Screenshots_Variance_Fields = {
  __typename?: 'screenshots_variance_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "screenshots" */
export type Screenshots_Variance_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** columns and relationships of "studios" */
export type Studios = {
  __typename?: 'studios';
  country?: Maybe<Scalars['Int']>;
  /** An array relationship */
  game_studios: Array<Game_Studio>;
  /** An aggregated array relationship */
  game_studios_aggregate: Game_Studio_Aggregate;
  id: Scalars['Int'];
  igdbId: Scalars['Int'];
  name: Scalars['String'];
};

/** columns and relationships of "studios" */
export type StudiosGame_StudiosArgs = {
  distinct_on?: Maybe<Array<Game_Studio_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Studio_Order_By>>;
  where?: Maybe<Game_Studio_Bool_Exp>;
};

/** columns and relationships of "studios" */
export type StudiosGame_Studios_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Studio_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Studio_Order_By>>;
  where?: Maybe<Game_Studio_Bool_Exp>;
};

/** aggregated selection of "studios" */
export type Studios_Aggregate = {
  __typename?: 'studios_aggregate';
  aggregate?: Maybe<Studios_Aggregate_Fields>;
  nodes: Array<Studios>;
};

/** aggregate fields of "studios" */
export type Studios_Aggregate_Fields = {
  __typename?: 'studios_aggregate_fields';
  avg?: Maybe<Studios_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Studios_Max_Fields>;
  min?: Maybe<Studios_Min_Fields>;
  stddev?: Maybe<Studios_Stddev_Fields>;
  stddev_pop?: Maybe<Studios_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Studios_Stddev_Samp_Fields>;
  sum?: Maybe<Studios_Sum_Fields>;
  var_pop?: Maybe<Studios_Var_Pop_Fields>;
  var_samp?: Maybe<Studios_Var_Samp_Fields>;
  variance?: Maybe<Studios_Variance_Fields>;
};

/** aggregate fields of "studios" */
export type Studios_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Studios_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "studios" */
export type Studios_Aggregate_Order_By = {
  avg?: Maybe<Studios_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Studios_Max_Order_By>;
  min?: Maybe<Studios_Min_Order_By>;
  stddev?: Maybe<Studios_Stddev_Order_By>;
  stddev_pop?: Maybe<Studios_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Studios_Stddev_Samp_Order_By>;
  sum?: Maybe<Studios_Sum_Order_By>;
  var_pop?: Maybe<Studios_Var_Pop_Order_By>;
  var_samp?: Maybe<Studios_Var_Samp_Order_By>;
  variance?: Maybe<Studios_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "studios" */
export type Studios_Arr_Rel_Insert_Input = {
  data: Array<Studios_Insert_Input>;
  on_conflict?: Maybe<Studios_On_Conflict>;
};

/** aggregate avg on columns */
export type Studios_Avg_Fields = {
  __typename?: 'studios_avg_fields';
  country?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "studios" */
export type Studios_Avg_Order_By = {
  country?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "studios". All fields are combined with a logical 'AND'. */
export type Studios_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Studios_Bool_Exp>>>;
  _not?: Maybe<Studios_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Studios_Bool_Exp>>>;
  country?: Maybe<Int_Comparison_Exp>;
  game_studios?: Maybe<Game_Studio_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  igdbId?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "studios" */
export enum Studios_Constraint {
  /** unique or primary key constraint */
  StudiosIgdbIdKey = 'Studios_igdbId_key',
  /** unique or primary key constraint */
  StudiosPkey = 'Studios_pkey',
}

/** input type for incrementing integer column in table "studios" */
export type Studios_Inc_Input = {
  country?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "studios" */
export type Studios_Insert_Input = {
  country?: Maybe<Scalars['Int']>;
  game_studios?: Maybe<Game_Studio_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Studios_Max_Fields = {
  __typename?: 'studios_max_fields';
  country?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "studios" */
export type Studios_Max_Order_By = {
  country?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Studios_Min_Fields = {
  __typename?: 'studios_min_fields';
  country?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "studios" */
export type Studios_Min_Order_By = {
  country?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "studios" */
export type Studios_Mutation_Response = {
  __typename?: 'studios_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Studios>;
};

/** input type for inserting object relation for remote table "studios" */
export type Studios_Obj_Rel_Insert_Input = {
  data: Studios_Insert_Input;
  on_conflict?: Maybe<Studios_On_Conflict>;
};

/** on conflict condition type for table "studios" */
export type Studios_On_Conflict = {
  constraint: Studios_Constraint;
  update_columns: Array<Studios_Update_Column>;
  where?: Maybe<Studios_Bool_Exp>;
};

/** ordering options when selecting data from "studios" */
export type Studios_Order_By = {
  country?: Maybe<Order_By>;
  game_studios_aggregate?: Maybe<Game_Studio_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "studios" */
export type Studios_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "studios" */
export enum Studios_Select_Column {
  /** column name */
  Country = 'country',
  /** column name */
  Id = 'id',
  /** column name */
  IgdbId = 'igdbId',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "studios" */
export type Studios_Set_Input = {
  country?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Studios_Stddev_Fields = {
  __typename?: 'studios_stddev_fields';
  country?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "studios" */
export type Studios_Stddev_Order_By = {
  country?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Studios_Stddev_Pop_Fields = {
  __typename?: 'studios_stddev_pop_fields';
  country?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "studios" */
export type Studios_Stddev_Pop_Order_By = {
  country?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Studios_Stddev_Samp_Fields = {
  __typename?: 'studios_stddev_samp_fields';
  country?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "studios" */
export type Studios_Stddev_Samp_Order_By = {
  country?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Studios_Sum_Fields = {
  __typename?: 'studios_sum_fields';
  country?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "studios" */
export type Studios_Sum_Order_By = {
  country?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** update columns of table "studios" */
export enum Studios_Update_Column {
  /** column name */
  Country = 'country',
  /** column name */
  Id = 'id',
  /** column name */
  IgdbId = 'igdbId',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
export type Studios_Var_Pop_Fields = {
  __typename?: 'studios_var_pop_fields';
  country?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "studios" */
export type Studios_Var_Pop_Order_By = {
  country?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Studios_Var_Samp_Fields = {
  __typename?: 'studios_var_samp_fields';
  country?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "studios" */
export type Studios_Var_Samp_Order_By = {
  country?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Studios_Variance_Fields = {
  __typename?: 'studios_variance_fields';
  country?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "studios" */
export type Studios_Variance_Order_By = {
  country?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** subscription root */
export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "engines" */
  engines: Array<Engines>;
  /** fetch aggregated fields from the table: "engines" */
  engines_aggregate: Engines_Aggregate;
  /** fetch data from the table: "engines" using primary key columns */
  engines_by_pk?: Maybe<Engines>;
  /** fetch data from the table: "game_engine" */
  game_engine: Array<Game_Engine>;
  /** fetch aggregated fields from the table: "game_engine" */
  game_engine_aggregate: Game_Engine_Aggregate;
  /** fetch data from the table: "game_engine" using primary key columns */
  game_engine_by_pk?: Maybe<Game_Engine>;
  /** fetch data from the table: "game_genre" */
  game_genre: Array<Game_Genre>;
  /** fetch aggregated fields from the table: "game_genre" */
  game_genre_aggregate: Game_Genre_Aggregate;
  /** fetch data from the table: "game_genre" using primary key columns */
  game_genre_by_pk?: Maybe<Game_Genre>;
  /** fetch data from the table: "game_platform" */
  game_platform: Array<Game_Platform>;
  /** fetch aggregated fields from the table: "game_platform" */
  game_platform_aggregate: Game_Platform_Aggregate;
  /** fetch data from the table: "game_platform" using primary key columns */
  game_platform_by_pk?: Maybe<Game_Platform>;
  /** fetch data from the table: "game_studio" */
  game_studio: Array<Game_Studio>;
  /** fetch aggregated fields from the table: "game_studio" */
  game_studio_aggregate: Game_Studio_Aggregate;
  /** fetch data from the table: "game_studio" using primary key columns */
  game_studio_by_pk?: Maybe<Game_Studio>;
  /** fetch data from the table: "game_theme" */
  game_theme: Array<Game_Theme>;
  /** fetch aggregated fields from the table: "game_theme" */
  game_theme_aggregate: Game_Theme_Aggregate;
  /** fetch data from the table: "game_theme" using primary key columns */
  game_theme_by_pk?: Maybe<Game_Theme>;
  /** fetch data from the table: "games" */
  games: Array<Games>;
  /** fetch aggregated fields from the table: "games" */
  games_aggregate: Games_Aggregate;
  /** fetch data from the table: "games" using primary key columns */
  games_by_pk?: Maybe<Games>;
  /** fetch data from the table: "genres" */
  genres: Array<Genres>;
  /** fetch aggregated fields from the table: "genres" */
  genres_aggregate: Genres_Aggregate;
  /** fetch data from the table: "genres" using primary key columns */
  genres_by_pk?: Maybe<Genres>;
  /** fetch data from the table: "platforms" */
  platforms: Array<Platforms>;
  /** fetch aggregated fields from the table: "platforms" */
  platforms_aggregate: Platforms_Aggregate;
  /** fetch data from the table: "platforms" using primary key columns */
  platforms_by_pk?: Maybe<Platforms>;
  /** fetch data from the table: "screenshots" */
  screenshots: Array<Screenshots>;
  /** fetch aggregated fields from the table: "screenshots" */
  screenshots_aggregate: Screenshots_Aggregate;
  /** fetch data from the table: "screenshots" using primary key columns */
  screenshots_by_pk?: Maybe<Screenshots>;
  /** fetch data from the table: "studios" */
  studios: Array<Studios>;
  /** fetch aggregated fields from the table: "studios" */
  studios_aggregate: Studios_Aggregate;
  /** fetch data from the table: "studios" using primary key columns */
  studios_by_pk?: Maybe<Studios>;
  /** fetch data from the table: "themes" */
  themes: Array<Themes>;
  /** fetch aggregated fields from the table: "themes" */
  themes_aggregate: Themes_Aggregate;
  /** fetch data from the table: "themes" using primary key columns */
  themes_by_pk?: Maybe<Themes>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
  /** fetch data from the table: "videos" */
  videos: Array<Videos>;
  /** fetch aggregated fields from the table: "videos" */
  videos_aggregate: Videos_Aggregate;
  /** fetch data from the table: "videos" using primary key columns */
  videos_by_pk?: Maybe<Videos>;
};

/** subscription root */
export type Subscription_RootEnginesArgs = {
  distinct_on?: Maybe<Array<Engines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Engines_Order_By>>;
  where?: Maybe<Engines_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootEngines_AggregateArgs = {
  distinct_on?: Maybe<Array<Engines_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Engines_Order_By>>;
  where?: Maybe<Engines_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootEngines_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootGame_EngineArgs = {
  distinct_on?: Maybe<Array<Game_Engine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Engine_Order_By>>;
  where?: Maybe<Game_Engine_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGame_Engine_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Engine_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Engine_Order_By>>;
  where?: Maybe<Game_Engine_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGame_Engine_By_PkArgs = {
  engineId: Scalars['Int'];
  gameId: Scalars['bigint'];
};

/** subscription root */
export type Subscription_RootGame_GenreArgs = {
  distinct_on?: Maybe<Array<Game_Genre_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Genre_Order_By>>;
  where?: Maybe<Game_Genre_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGame_Genre_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Genre_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Genre_Order_By>>;
  where?: Maybe<Game_Genre_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGame_Genre_By_PkArgs = {
  gameId: Scalars['bigint'];
  genreId: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootGame_PlatformArgs = {
  distinct_on?: Maybe<Array<Game_Platform_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Platform_Order_By>>;
  where?: Maybe<Game_Platform_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGame_Platform_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Platform_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Platform_Order_By>>;
  where?: Maybe<Game_Platform_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGame_Platform_By_PkArgs = {
  gameId: Scalars['bigint'];
  platformId: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootGame_StudioArgs = {
  distinct_on?: Maybe<Array<Game_Studio_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Studio_Order_By>>;
  where?: Maybe<Game_Studio_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGame_Studio_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Studio_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Studio_Order_By>>;
  where?: Maybe<Game_Studio_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGame_Studio_By_PkArgs = {
  gameId: Scalars['Int'];
  studioId: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootGame_ThemeArgs = {
  distinct_on?: Maybe<Array<Game_Theme_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Theme_Order_By>>;
  where?: Maybe<Game_Theme_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGame_Theme_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Theme_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Theme_Order_By>>;
  where?: Maybe<Game_Theme_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGame_Theme_By_PkArgs = {
  gameId: Scalars['bigint'];
  themeId: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootGamesArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGames_AggregateArgs = {
  distinct_on?: Maybe<Array<Games_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Games_Order_By>>;
  where?: Maybe<Games_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGames_By_PkArgs = {
  id: Scalars['bigint'];
};

/** subscription root */
export type Subscription_RootGenresArgs = {
  distinct_on?: Maybe<Array<Genres_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genres_Order_By>>;
  where?: Maybe<Genres_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGenres_AggregateArgs = {
  distinct_on?: Maybe<Array<Genres_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Genres_Order_By>>;
  where?: Maybe<Genres_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootGenres_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootPlatformsArgs = {
  distinct_on?: Maybe<Array<Platforms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Platforms_Order_By>>;
  where?: Maybe<Platforms_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPlatforms_AggregateArgs = {
  distinct_on?: Maybe<Array<Platforms_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Platforms_Order_By>>;
  where?: Maybe<Platforms_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootPlatforms_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootScreenshotsArgs = {
  distinct_on?: Maybe<Array<Screenshots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Screenshots_Order_By>>;
  where?: Maybe<Screenshots_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootScreenshots_AggregateArgs = {
  distinct_on?: Maybe<Array<Screenshots_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Screenshots_Order_By>>;
  where?: Maybe<Screenshots_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootScreenshots_By_PkArgs = {
  id: Scalars['bigint'];
};

/** subscription root */
export type Subscription_RootStudiosArgs = {
  distinct_on?: Maybe<Array<Studios_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Studios_Order_By>>;
  where?: Maybe<Studios_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudios_AggregateArgs = {
  distinct_on?: Maybe<Array<Studios_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Studios_Order_By>>;
  where?: Maybe<Studios_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootStudios_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootThemesArgs = {
  distinct_on?: Maybe<Array<Themes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Themes_Order_By>>;
  where?: Maybe<Themes_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootThemes_AggregateArgs = {
  distinct_on?: Maybe<Array<Themes_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Themes_Order_By>>;
  where?: Maybe<Themes_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootThemes_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootUsersArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: Maybe<Array<Users_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Users_Order_By>>;
  where?: Maybe<Users_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['Int'];
};

/** subscription root */
export type Subscription_RootVideosArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVideos_AggregateArgs = {
  distinct_on?: Maybe<Array<Videos_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Videos_Order_By>>;
  where?: Maybe<Videos_Bool_Exp>;
};

/** subscription root */
export type Subscription_RootVideos_By_PkArgs = {
  id: Scalars['bigint'];
};

/** columns and relationships of "themes" */
export type Themes = {
  __typename?: 'themes';
  /** An array relationship */
  game_themes: Array<Game_Theme>;
  /** An aggregated array relationship */
  game_themes_aggregate: Game_Theme_Aggregate;
  id: Scalars['Int'];
  igdbId: Scalars['Int'];
  name: Scalars['String'];
};

/** columns and relationships of "themes" */
export type ThemesGame_ThemesArgs = {
  distinct_on?: Maybe<Array<Game_Theme_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Theme_Order_By>>;
  where?: Maybe<Game_Theme_Bool_Exp>;
};

/** columns and relationships of "themes" */
export type ThemesGame_Themes_AggregateArgs = {
  distinct_on?: Maybe<Array<Game_Theme_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Game_Theme_Order_By>>;
  where?: Maybe<Game_Theme_Bool_Exp>;
};

/** aggregated selection of "themes" */
export type Themes_Aggregate = {
  __typename?: 'themes_aggregate';
  aggregate?: Maybe<Themes_Aggregate_Fields>;
  nodes: Array<Themes>;
};

/** aggregate fields of "themes" */
export type Themes_Aggregate_Fields = {
  __typename?: 'themes_aggregate_fields';
  avg?: Maybe<Themes_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Themes_Max_Fields>;
  min?: Maybe<Themes_Min_Fields>;
  stddev?: Maybe<Themes_Stddev_Fields>;
  stddev_pop?: Maybe<Themes_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Themes_Stddev_Samp_Fields>;
  sum?: Maybe<Themes_Sum_Fields>;
  var_pop?: Maybe<Themes_Var_Pop_Fields>;
  var_samp?: Maybe<Themes_Var_Samp_Fields>;
  variance?: Maybe<Themes_Variance_Fields>;
};

/** aggregate fields of "themes" */
export type Themes_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Themes_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "themes" */
export type Themes_Aggregate_Order_By = {
  avg?: Maybe<Themes_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Themes_Max_Order_By>;
  min?: Maybe<Themes_Min_Order_By>;
  stddev?: Maybe<Themes_Stddev_Order_By>;
  stddev_pop?: Maybe<Themes_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Themes_Stddev_Samp_Order_By>;
  sum?: Maybe<Themes_Sum_Order_By>;
  var_pop?: Maybe<Themes_Var_Pop_Order_By>;
  var_samp?: Maybe<Themes_Var_Samp_Order_By>;
  variance?: Maybe<Themes_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "themes" */
export type Themes_Arr_Rel_Insert_Input = {
  data: Array<Themes_Insert_Input>;
  on_conflict?: Maybe<Themes_On_Conflict>;
};

/** aggregate avg on columns */
export type Themes_Avg_Fields = {
  __typename?: 'themes_avg_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "themes" */
export type Themes_Avg_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "themes". All fields are combined with a logical 'AND'. */
export type Themes_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Themes_Bool_Exp>>>;
  _not?: Maybe<Themes_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Themes_Bool_Exp>>>;
  game_themes?: Maybe<Game_Theme_Bool_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  igdbId?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "themes" */
export enum Themes_Constraint {
  /** unique or primary key constraint */
  ThemesIgdbIdKey = 'Themes_igdbId_key',
  /** unique or primary key constraint */
  ThemesPkey = 'Themes_pkey',
}

/** input type for incrementing integer column in table "themes" */
export type Themes_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "themes" */
export type Themes_Insert_Input = {
  game_themes?: Maybe<Game_Theme_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Themes_Max_Fields = {
  __typename?: 'themes_max_fields';
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "themes" */
export type Themes_Max_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Themes_Min_Fields = {
  __typename?: 'themes_min_fields';
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "themes" */
export type Themes_Min_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "themes" */
export type Themes_Mutation_Response = {
  __typename?: 'themes_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Themes>;
};

/** input type for inserting object relation for remote table "themes" */
export type Themes_Obj_Rel_Insert_Input = {
  data: Themes_Insert_Input;
  on_conflict?: Maybe<Themes_On_Conflict>;
};

/** on conflict condition type for table "themes" */
export type Themes_On_Conflict = {
  constraint: Themes_Constraint;
  update_columns: Array<Themes_Update_Column>;
  where?: Maybe<Themes_Bool_Exp>;
};

/** ordering options when selecting data from "themes" */
export type Themes_Order_By = {
  game_themes_aggregate?: Maybe<Game_Theme_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "themes" */
export type Themes_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "themes" */
export enum Themes_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IgdbId = 'igdbId',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "themes" */
export type Themes_Set_Input = {
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Themes_Stddev_Fields = {
  __typename?: 'themes_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "themes" */
export type Themes_Stddev_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Themes_Stddev_Pop_Fields = {
  __typename?: 'themes_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "themes" */
export type Themes_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Themes_Stddev_Samp_Fields = {
  __typename?: 'themes_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "themes" */
export type Themes_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Themes_Sum_Fields = {
  __typename?: 'themes_sum_fields';
  id?: Maybe<Scalars['Int']>;
  igdbId?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "themes" */
export type Themes_Sum_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** update columns of table "themes" */
export enum Themes_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  IgdbId = 'igdbId',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
export type Themes_Var_Pop_Fields = {
  __typename?: 'themes_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "themes" */
export type Themes_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Themes_Var_Samp_Fields = {
  __typename?: 'themes_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "themes" */
export type Themes_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Themes_Variance_Fields = {
  __typename?: 'themes_variance_fields';
  id?: Maybe<Scalars['Float']>;
  igdbId?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "themes" */
export type Themes_Variance_Order_By = {
  id?: Maybe<Order_By>;
  igdbId?: Maybe<Order_By>;
};

/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  avg?: Maybe<Users_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
  stddev?: Maybe<Users_Stddev_Fields>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Fields>;
  sum?: Maybe<Users_Sum_Fields>;
  var_pop?: Maybe<Users_Var_Pop_Fields>;
  var_samp?: Maybe<Users_Var_Samp_Fields>;
  variance?: Maybe<Users_Variance_Fields>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Users_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "users" */
export type Users_Aggregate_Order_By = {
  avg?: Maybe<Users_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Users_Max_Order_By>;
  min?: Maybe<Users_Min_Order_By>;
  stddev?: Maybe<Users_Stddev_Order_By>;
  stddev_pop?: Maybe<Users_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Users_Stddev_Samp_Order_By>;
  sum?: Maybe<Users_Sum_Order_By>;
  var_pop?: Maybe<Users_Var_Pop_Order_By>;
  var_samp?: Maybe<Users_Var_Samp_Order_By>;
  variance?: Maybe<Users_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "users" */
export type Users_Arr_Rel_Insert_Input = {
  data: Array<Users_Insert_Input>;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** aggregate avg on columns */
export type Users_Avg_Fields = {
  __typename?: 'users_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "users" */
export type Users_Avg_Order_By = {
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  _not?: Maybe<Users_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Users_Bool_Exp>>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Int_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
  UsersPkey = 'users_pkey',
}

/** input type for incrementing integer column in table "users" */
export type Users_Inc_Input = {
  id?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "users" */
export type Users_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "users" */
export type Users_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  on_conflict?: Maybe<Users_On_Conflict>;
};

/** on conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns: Array<Users_Update_Column>;
  where?: Maybe<Users_Bool_Exp>;
};

/** ordering options when selecting data from "users" */
export type Users_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
};

/** primary key columns input for table: "users" */
export type Users_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Users_Stddev_Fields = {
  __typename?: 'users_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "users" */
export type Users_Stddev_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Users_Stddev_Pop_Fields = {
  __typename?: 'users_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "users" */
export type Users_Stddev_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Users_Stddev_Samp_Fields = {
  __typename?: 'users_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "users" */
export type Users_Stddev_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Users_Sum_Fields = {
  __typename?: 'users_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "users" */
export type Users_Sum_Order_By = {
  id?: Maybe<Order_By>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
}

/** aggregate var_pop on columns */
export type Users_Var_Pop_Fields = {
  __typename?: 'users_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "users" */
export type Users_Var_Pop_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Users_Var_Samp_Fields = {
  __typename?: 'users_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "users" */
export type Users_Var_Samp_Order_By = {
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Users_Variance_Fields = {
  __typename?: 'users_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "users" */
export type Users_Variance_Order_By = {
  id?: Maybe<Order_By>;
};

/** columns and relationships of "videos" */
export type Videos = {
  __typename?: 'videos';
  gameId: Scalars['Int'];
  id: Scalars['bigint'];
  url: Scalars['String'];
};

/** aggregated selection of "videos" */
export type Videos_Aggregate = {
  __typename?: 'videos_aggregate';
  aggregate?: Maybe<Videos_Aggregate_Fields>;
  nodes: Array<Videos>;
};

/** aggregate fields of "videos" */
export type Videos_Aggregate_Fields = {
  __typename?: 'videos_aggregate_fields';
  avg?: Maybe<Videos_Avg_Fields>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<Videos_Max_Fields>;
  min?: Maybe<Videos_Min_Fields>;
  stddev?: Maybe<Videos_Stddev_Fields>;
  stddev_pop?: Maybe<Videos_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Videos_Stddev_Samp_Fields>;
  sum?: Maybe<Videos_Sum_Fields>;
  var_pop?: Maybe<Videos_Var_Pop_Fields>;
  var_samp?: Maybe<Videos_Var_Samp_Fields>;
  variance?: Maybe<Videos_Variance_Fields>;
};

/** aggregate fields of "videos" */
export type Videos_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Videos_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "videos" */
export type Videos_Aggregate_Order_By = {
  avg?: Maybe<Videos_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Videos_Max_Order_By>;
  min?: Maybe<Videos_Min_Order_By>;
  stddev?: Maybe<Videos_Stddev_Order_By>;
  stddev_pop?: Maybe<Videos_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Videos_Stddev_Samp_Order_By>;
  sum?: Maybe<Videos_Sum_Order_By>;
  var_pop?: Maybe<Videos_Var_Pop_Order_By>;
  var_samp?: Maybe<Videos_Var_Samp_Order_By>;
  variance?: Maybe<Videos_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "videos" */
export type Videos_Arr_Rel_Insert_Input = {
  data: Array<Videos_Insert_Input>;
  on_conflict?: Maybe<Videos_On_Conflict>;
};

/** aggregate avg on columns */
export type Videos_Avg_Fields = {
  __typename?: 'videos_avg_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "videos" */
export type Videos_Avg_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "videos". All fields are combined with a logical 'AND'. */
export type Videos_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Videos_Bool_Exp>>>;
  _not?: Maybe<Videos_Bool_Exp>;
  _or?: Maybe<Array<Maybe<Videos_Bool_Exp>>>;
  gameId?: Maybe<Int_Comparison_Exp>;
  id?: Maybe<Bigint_Comparison_Exp>;
  url?: Maybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "videos" */
export enum Videos_Constraint {
  /** unique or primary key constraint */
  VideosPkey = 'videos_pkey',
}

/** input type for incrementing integer column in table "videos" */
export type Videos_Inc_Input = {
  gameId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** input type for inserting data into table "videos" */
export type Videos_Insert_Input = {
  gameId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Videos_Max_Fields = {
  __typename?: 'videos_max_fields';
  gameId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "videos" */
export type Videos_Max_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Videos_Min_Fields = {
  __typename?: 'videos_min_fields';
  gameId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "videos" */
export type Videos_Min_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** response of any mutation on the table "videos" */
export type Videos_Mutation_Response = {
  __typename?: 'videos_mutation_response';
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'];
  /** data of the affected rows by the mutation */
  returning: Array<Videos>;
};

/** input type for inserting object relation for remote table "videos" */
export type Videos_Obj_Rel_Insert_Input = {
  data: Videos_Insert_Input;
  on_conflict?: Maybe<Videos_On_Conflict>;
};

/** on conflict condition type for table "videos" */
export type Videos_On_Conflict = {
  constraint: Videos_Constraint;
  update_columns: Array<Videos_Update_Column>;
  where?: Maybe<Videos_Bool_Exp>;
};

/** ordering options when selecting data from "videos" */
export type Videos_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  url?: Maybe<Order_By>;
};

/** primary key columns input for table: "videos" */
export type Videos_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "videos" */
export enum Videos_Select_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  Id = 'id',
  /** column name */
  Url = 'url',
}

/** input type for updating data in table "videos" */
export type Videos_Set_Input = {
  gameId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
  url?: Maybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Videos_Stddev_Fields = {
  __typename?: 'videos_stddev_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "videos" */
export type Videos_Stddev_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Videos_Stddev_Pop_Fields = {
  __typename?: 'videos_stddev_pop_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "videos" */
export type Videos_Stddev_Pop_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Videos_Stddev_Samp_Fields = {
  __typename?: 'videos_stddev_samp_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "videos" */
export type Videos_Stddev_Samp_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Videos_Sum_Fields = {
  __typename?: 'videos_sum_fields';
  gameId?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "videos" */
export type Videos_Sum_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** update columns of table "videos" */
export enum Videos_Update_Column {
  /** column name */
  GameId = 'gameId',
  /** column name */
  Id = 'id',
  /** column name */
  Url = 'url',
}

/** aggregate var_pop on columns */
export type Videos_Var_Pop_Fields = {
  __typename?: 'videos_var_pop_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "videos" */
export type Videos_Var_Pop_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Videos_Var_Samp_Fields = {
  __typename?: 'videos_var_samp_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "videos" */
export type Videos_Var_Samp_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Videos_Variance_Fields = {
  __typename?: 'videos_variance_fields';
  gameId?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "videos" */
export type Videos_Variance_Order_By = {
  gameId?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
};

export type Get_Games_Id_StaticQueryVariables = Exact<{ [key: string]: never }>;

export type Get_Games_Id_StaticQuery = { __typename?: 'query_root' } & {
  games: Array<{ __typename?: 'games' } & Pick<Games, 'id'>>;
};

export type Get_Single_GameQueryVariables = Exact<{
  id: Scalars['bigint'];
}>;

export type Get_Single_GameQuery = { __typename?: 'query_root' } & {
  games_by_pk?: Maybe<
    { __typename?: 'games' } & Pick<
      Games,
      'id' | 'name' | 'cover' | 'releaseDate' | 'storyline' | 'summary'
    > & {
        videos: Array<{ __typename?: 'videos' } & Pick<Videos, 'url'>>;
        screenshots: Array<
          { __typename?: 'screenshots' } & Pick<Screenshots, 'url'>
        >;
        game_studios: Array<
          { __typename?: 'game_studio' } & {
            studio: { __typename?: 'studios' } & Pick<Studios, 'name' | 'id'>;
          }
        >;
        game_platforms: Array<
          { __typename?: 'game_platform' } & {
            platform: { __typename?: 'platforms' } & Pick<
              Platforms,
              'name' | 'id'
            >;
          }
        >;
        game_engines: Array<
          { __typename?: 'game_engine' } & {
            engine: { __typename?: 'engines' } & Pick<Engines, 'name' | 'id'>;
          }
        >;
      }
  >;
};

export const Get_Games_Id_StaticDocument = gql`
  query GET_GAMES_ID_STATIC {
    games {
      id
    }
  }
`;

/**
 * __useGet_Games_Id_StaticQuery__
 *
 * To run a query within a React component, call `useGet_Games_Id_StaticQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Games_Id_StaticQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Games_Id_StaticQuery({
 *   variables: {
 *   },
 * });
 */
export function useGet_Games_Id_StaticQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Get_Games_Id_StaticQuery,
    Get_Games_Id_StaticQueryVariables
  >
) {
  return Apollo.useQuery<
    Get_Games_Id_StaticQuery,
    Get_Games_Id_StaticQueryVariables
  >(Get_Games_Id_StaticDocument, baseOptions);
}
export function useGet_Games_Id_StaticLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Get_Games_Id_StaticQuery,
    Get_Games_Id_StaticQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Get_Games_Id_StaticQuery,
    Get_Games_Id_StaticQueryVariables
  >(Get_Games_Id_StaticDocument, baseOptions);
}
export type Get_Games_Id_StaticQueryHookResult = ReturnType<
  typeof useGet_Games_Id_StaticQuery
>;
export type Get_Games_Id_StaticLazyQueryHookResult = ReturnType<
  typeof useGet_Games_Id_StaticLazyQuery
>;
export type Get_Games_Id_StaticQueryResult = Apollo.QueryResult<
  Get_Games_Id_StaticQuery,
  Get_Games_Id_StaticQueryVariables
>;
export const Get_Single_GameDocument = gql`
  query GET_SINGLE_GAME($id: bigint!) {
    games_by_pk(id: $id) {
      id
      name
      cover
      releaseDate
      storyline
      summary
      videos {
        url
      }
      screenshots {
        url
      }
      game_studios {
        studio {
          name
          id
        }
      }
      game_platforms {
        platform {
          name
          id
        }
      }
      game_engines {
        engine {
          name
          id
        }
      }
    }
  }
`;

/**
 * __useGet_Single_GameQuery__
 *
 * To run a query within a React component, call `useGet_Single_GameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGet_Single_GameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGet_Single_GameQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGet_Single_GameQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Get_Single_GameQuery,
    Get_Single_GameQueryVariables
  >
) {
  return Apollo.useQuery<Get_Single_GameQuery, Get_Single_GameQueryVariables>(
    Get_Single_GameDocument,
    baseOptions
  );
}
export function useGet_Single_GameLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Get_Single_GameQuery,
    Get_Single_GameQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Get_Single_GameQuery,
    Get_Single_GameQueryVariables
  >(Get_Single_GameDocument, baseOptions);
}
export type Get_Single_GameQueryHookResult = ReturnType<
  typeof useGet_Single_GameQuery
>;
export type Get_Single_GameLazyQueryHookResult = ReturnType<
  typeof useGet_Single_GameLazyQuery
>;
export type Get_Single_GameQueryResult = Apollo.QueryResult<
  Get_Single_GameQuery,
  Get_Single_GameQueryVariables
>;
