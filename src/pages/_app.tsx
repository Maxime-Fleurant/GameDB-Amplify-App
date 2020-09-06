import { ApolloProvider } from '@apollo/client';
import type { AppProps } from 'next/app';
import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import Layout from '../common/components/Layout';
import Theme from '../common/components/Layout/Theme';

import { useApollo } from '../lib/apollo';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient}>
      <CacheProvider value={cache}>
        <Theme>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Theme>
      </CacheProvider>
    </ApolloProvider>
  );
}
