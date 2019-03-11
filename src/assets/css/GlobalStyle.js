import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
  }

  img,
  object,
  embed,
  video,
  iframe {
    max-width:100%;
    height: auto;
  }

  a {
    text-decoration:none;
    color:inherit;
    
      &:hover {
        text-decoration: none;
    }
  }
  
  ul {
    list-style:none;
  }

  body {
    background-color: #F4F6F9;
    font-family: "Helvetica neue", sans-serif;
  }
`;

export default GlobalStyle;
