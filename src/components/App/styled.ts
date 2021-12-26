import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #151515;
  }
  * {
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  height: calc(100vh - 44px);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export { GlobalStyle, Container };
