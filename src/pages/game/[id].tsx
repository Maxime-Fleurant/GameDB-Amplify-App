import { FunctionComponent } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { initializeApollo } from '../../lib/apollo';
import {
  Get_Games_Id_StaticDocument,
  Get_Games_Id_StaticQuery,
  Get_Single_GameDocument,
  Get_Single_GameQueryVariables,
  Get_Single_GameQuery,
} from '../../generated/graphql';

const Home: FunctionComponent<{
  game: Get_Single_GameQuery['games_by_pk'];
}> = ({ game }) => {
  console.log(game?.__typename);

  return <div>index</div>;
};

export const getStaticProps: GetStaticProps<
  { game: Get_Single_GameQuery['games_by_pk'] },
  { id: string }
> = async ({ params }) => {
  const apolloClient = initializeApollo();

  const games = await apolloClient.query<
    Get_Single_GameQuery,
    Get_Single_GameQueryVariables
  >({
    query: Get_Single_GameDocument,
    variables: { id: BigInt(params?.id) },
  });

  return {
    props: {
      game: games.data?.games_by_pk,
    },
  };
};

interface IStaticPath {
  params: {
    id: string;
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  const apolloClient = initializeApollo();
  let x: IStaticPath[];

  const games = await apolloClient.query<Get_Games_Id_StaticQuery>({
    query: Get_Games_Id_StaticDocument,
  });

  if (games.data) {
    x = games.data.games.map((el) => {
      return { params: { id: el.id.toString() } };
    });
  } else {
    x = [];
  }

  return {
    paths: x,
    fallback: true,
  };
};

export default Home;
