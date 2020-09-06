import { FunctionComponent } from 'react';
import Link from 'next/link';
import { useTheme } from 'emotion-theming';
import {
  gridCss,
  navWrap,
  navCell,
  nav,
  logo,
  logoPart,
  flexNavWrap,
  menuButtonText,
  themeButton,
} from './style';
import { ITheme } from './Theme';
import {
  helveticaThin,
  helveticaMedium,
  helveticaBold,
} from '../../globalStyle';
import { Global, css } from '@emotion/core';

const Layout: FunctionComponent = ({ children }) => {
  const theme = useTheme<ITheme>();

  return (
    <>
      <Global
        styles={css`
          body {
            ${theme.background.backgroundColor100}
            cursor: crosshair
          }

          .simplebar-track.simplebar-vertical .simplebar-scrollbar:before {
            background-color: #9198a1;
          }

          * {
            transition: background-color 0.25s ease;
          }
        `}
      />
      <div css={[navWrap(theme), navCell]}>
        <div css={nav}>
          <Link href="/">
            <div css={logo}>
              <span>
                <span
                  css={[logoPart, theme.text.textColor900, helveticaMedium]}
                >
                  GameDB
                </span>
              </span>
            </div>
          </Link>

          <div css={flexNavWrap}>
            <span css={menuButtonText}>
              <div>Menu</div>
            </span>
            <span className="icon-half " css={themeButton} />
          </div>
        </div>
      </div>
      <div>
        <div>
          <div css={[gridCss]}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
