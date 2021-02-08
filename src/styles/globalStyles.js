import { createGlobalStyle } from 'styled-components';
import normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

  ${normalize};

  body {
    font-family:  'Share Tech Mono', 'Courier New', monospace;
    min-width: 320px;
  }
`;

export default GlobalStyle;
