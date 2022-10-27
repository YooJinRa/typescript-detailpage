import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  :root {
    --textBlack-color: #000000;
    --textGray-color: #666666;
    --gray-color: #959595;
    --lightGray-color: #E0E0E0;
    --buttonLine-color: #cccccc;
    --font-style: 'Noto Sans KR', sans-serif;
  }

  body {
  }
  * {
    font-family: var(--font-style);
    font-weight: 400;
    line-height: 1.2;
    font-size: 1rem;
    color: var(--textBlack-color);
    margin: 0; 
    padding: 0;
    box-sizing: border-box;
    word-break: break-all;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    font-size: 1.3rem;
  }
  ul li, ol li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    transition: all 0.3s ease;
   
  }
  textarea {
    resize: none;
  }
`;

export default GlobalStyle;
