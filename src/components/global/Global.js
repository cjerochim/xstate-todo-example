import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    html {
    box-sizing: border-box;
    }
    *, *:before, *:after {
    box-sizing: inherit;
    }

    body, html {
        padding: 0;
        margin: 0;
    }

    body {
        font-size: 100%;
        font-family: Arial, Helvetica, sans-serif;
        background-color: #ccc;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default Global;
