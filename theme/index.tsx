import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

import colors from './colors';
import media from './media';

export const GlobalStyle = createGlobalStyle`
  ${normalize};
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
    outline: none !important;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  h1,h2,h3,h4,h5,p,figure {
    margin: 0;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  img {
    max-width: 100%;
  }

  body {
    font-size: 16px;
    background-color: ${colors.grayE5};
    overflow-x: hidden;
  }
`;

const theme = {
  colors,
};

export { media };

export default theme;
