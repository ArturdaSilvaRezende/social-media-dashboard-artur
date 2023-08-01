import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    * {
        box-sizing: border-box;
        font-size: 100%;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Inter', sans-serif;
    }

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    
    :root {
        // ============== Colors ==============

        // ====== Primary ======

        --Lime-Green: hsl(163, 72%, 41%);
        --Bright-Red: hsl(356, 69%, 56%);
        --Facebook: hsl(208, 92%, 53%);
        --Twitter: hsl(203, 89%, 53%);
        --Instagram: linear-gradient(to right, hsl(37, 97%, 70%), hsl(329, 70%, 58%));
        --YouTube: hsl(348, 97%, 39%);

        // ====== Dark Theme =======

        --Toggle-Gradient-Dark: linear-gradient(to right,  hsl(210, 78%, 56%), hsl(146, 68%, 55%));
        --Very-Dark-Blue-BG: hsl(230, 17%, 14%);
        --Very-Dark-Blue-Top-BG-Pattern: hsl(232, 19%, 15%);
        --Dark-Desaturated-Blue-Card-BG: hsl(228, 28%, 20%);
        --Dark-Desaturated-Blue-hover: #343B57;
        --Desaturated-Blue-Text: hsl(228, 34%, 66%);
        --White-Text: hsl(0, 0%, 100%);

        // ====== Light Theme ======

        --Toggle-Light: hsl(230, 22%, 74%);
        --White-BG: hsl(0, 0%, 100%);
        --Very-Pale-Blue-Top-BG-Pattern: hsl(225, 100%, 98%);
        --Light-Grayish-Blue-Card-BG: hsl(227, 47%, 96%);
        --Light-Grayish-Blue-hover: #E1E3F0; 
        --Dark-Grayish-Blue-Text: hsl(228, 12%, 44%);
        --Very-Dark-Blue-Text: hsl(230, 17%, 14%);
       
    }
`;
