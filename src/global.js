import { createGlobalStyle } from "styled-components";
import fundo from "./assets/fundo_bg.png"

export const Global = createGlobalStyle`   
    *{  
        font-family: 'Cherry Bomb One', cursive;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root{
        font-size: 62.5%;
    }
    :root body {
        height: 100%;
        font-family: 'Roboto Mono', monospace;
        background-color: #B1EED8;
        background-image: url(${fundo});
        background-repeat: repeat-y;
        background-size: cover;
    }
`;