import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

const GlobalStyle = createGlobalStyle`
    ${normalize}
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
   html, body {
     height: 100%;
}
    html {
        font-size: 62.5%;
        /* height: 100%; */
    }
    body {
        /* min-height: 100%; */
        height: 100%;
        font-size: 18px;
        font-family: 'Barlow', sans-serif;
    }
    #root {
        height: 100%;
    }
    a {
        text-decoration: none;
        cursor: pointer;
    }
`;

export default GlobalStyle;
