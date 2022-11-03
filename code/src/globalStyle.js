import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
:root {
  --main-color: hotpink;
  --text-color: black;
  --pane-padding: 5px 42px;
}
code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: var(--main-color);
  width: 100%;
  color: var(--text-color);
  font-family: Montserrat, sans-serif;
  font-size: 15px;
  letter-spacing: 1px;
  line-height: 32px;
  height: 100%;
}
`;

export default GlobalStyle;