import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
html {
  font-family: 'Roboto', Helvetica, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  @media only screen and (max-width: 480px) {
    html {
      font-size: 100%;
    }
  }
  body {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', Helvetica, sans-serif;
    color: hsla(0, 0%, 0%, 0.8);
    font-weight: normal;
    word-wrap: break-word;
    font-kerning: normal;
    -moz-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -ms-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    -webkit-font-feature-settings: 'kern', 'liga', 'clig', 'calt';
    font-feature-settings: 'kern', 'liga', 'clig', 'calt';
  }
  a {
    text-decoration: none;
  }
  input, select, textarea, button {
    &:focus {
      outline: none;
    }
  }
}
`
export default GlobalStyle
