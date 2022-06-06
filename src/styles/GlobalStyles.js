import { createGlobalStyle } from 'styled-components';
import '@fontsource/akaya-telivigala';
import '@fontsource/sora';
import '@fontsource/exo';
import '@fontsource/pacifico';
import '@fontsource/itim';

const GlobalStyles = createGlobalStyle`
    :root{
        --green:#8bc34a;
        --orange:#ff4c24;
        --red:#c62828;
        --blue:#64b5f6;
    }

    *,*::before, *::after{
        margin: 0;
        padding: 0;
    }
    body{
        font-family: "Exo", sans-serif;
        overflow-x: hidden;
    }
    h1, h2, h3, h4, h5, h6{
        margin: 0;
        padding: 0;
    }
    a{
        color: inherit;
        text-decoration: none ;
    }

    input[type=number]::-webkit-inner-spin-button {
        opacity: 0;
        display: none;
    }
    input[type="date"]::before {
  content: attr(placeholder);
  position: absolute;
  color: #999999;
}

input[type="date"] {
  color: #ffffff;
}

input[type="date"]:focus,
input[type="date"]:valid {
  color: #666666;
}

input[type="date"]:focus::before,
input[type="date"]:valid::before {
  content: "";
}
`;

export default GlobalStyles;
