import { CacheProvider } from '@emotion/core';
import { cache } from 'emotion';

function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <CacheProvider value={cache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
