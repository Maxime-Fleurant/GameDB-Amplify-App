import { gql, useQuery } from '@apollo/client';
import { FunctionComponent } from 'react';
import { GetStaticProps } from 'next';
import { initializeApollo } from '../lib/apollo';
import { Games } from '../generated/graphql';

const Home: FunctionComponent<{}> = () => {
  return <div>index</div>;
};

export default Home;
