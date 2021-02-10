import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    html, body, #root{
        width: 100%;
        height: 100%;
    }

    *, button, input {
        border: 0;
        background: none;
        font-family: Nunito, 'Roboto', 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    button:hover {
        cursor: pointer;
    }

    button:active {
        transform: scale(0.95,0.95);
    }

    html {
        background: var(--white);
    }

    :root {
        --red: #bf281d;
        --darkRed: #911d14;
        --lightRed: #e33529;
        --black: #323131;
        --white: #fff;    
        --gray: #a8a0a0;
        --lightGray: #d1cdcd;
        --darkGray: #8a8787;
    }
`;