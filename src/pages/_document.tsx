import Document, { Main, NextScript, Head } from 'next/document';
import { extractCritical } from 'emotion-server';
import { css, Global } from '@emotion/core';
import { reset } from '../common/reset';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    const styles = extractCritical(initialProps.html);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    };
  }

  render() {
    return (
      <html
        lang="en"
        translate="no"
        css={[
          css`
             {
              font-size: 1.25vw;
              @media (max-width: 1023px) {
                font-size: 20px;
              }

              @media (max-width: 767px) {
                font-size: 12px;
              }
            }
          `,
        ]}
      >
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
          />
        </Head>
        <body>
          <Global
            styles={css`
              ${reset}
            `}
          />
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
