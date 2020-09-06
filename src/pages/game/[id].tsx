import { FunctionComponent } from 'react';
import { GetStaticProps } from 'next';
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
    variables: { id: Number(params?.id) },
  });

  return {
    props: {
      game: games.data?.games_by_pk,
    },
  };
};

export const getStaticPaths = async () => {
  const apolloClient = initializeApollo();

  const games = await apolloClient.query<Get_Games_Id_StaticQuery>({
    query: Get_Games_Id_StaticDocument,
  });

  return {
    paths: games.data?.games.map((el) => {
      return { params: { id: el.id.toString() } };
    }),
    fallback: true,
  };
};

export default Home;
