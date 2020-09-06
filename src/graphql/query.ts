import { gql } from '@apollo/client';

export const GET_GAMES_ID_STATIC = gql`
  query GET_GAMES_ID_STATIC {
    games {
      id
    }
  }
`;

export const GET_SINGLE_GAME = gql`
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
