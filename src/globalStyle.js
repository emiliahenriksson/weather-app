import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
    text-align: left;
    color: #444444;
}

h1 {
    font-size: 5rem;
    font-weight: 800;
    width: 90vw;
}
h2 {
    font-size: 3.5rem;
    font-weight: 800;
    width: 90vw;
}
h3 {
    font-size: 2rem;
    font-weight: 600;
    width: 90vw;
}

ul {
    display: flex;
    overflow: auto;
    white-space: nowrap;
    padding: 5vw;
}

li {
    list-style: none;
    margin-right: 15px;
}

`

export default GlobalStyle;