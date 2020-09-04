import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';
import Amplify from 'aws-amplify';
import awsExports from '../aws-exports';

Amplify.configure(awsExports);

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
