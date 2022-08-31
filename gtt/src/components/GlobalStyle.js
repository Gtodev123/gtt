import { createGlobalStyle,} from "styled-components"

const GlobalStyle = createGlobalStyle`
    

    *{
        margin:0;
        padding:0;

    }
    body {
        background:rgba(23,23,23);

    }
    button{
        font-weight:bold;
        font-size:1.1rem;
        cursor: pointer;
        padding:1rem 2rem;
        border: 3px solid #23d997;
        background:transparent;
        color:white;
        transition:all 0.5s ease;
    &:hover {
        background-color:#23d997;
        color:white;
    }
    }
    h2{
        font-weight:lighter;
        font-size: 4rem;
    }
    h3{
        color:white;
    }
    h4 {
        font-weight:bold;
    }
    span {
        font-weight:bold;
        color:#23d997;
    }
    a{
        font-size:1.1rem;
    }
    p {
        padding:3rem 0rem;
        font-size:1.4rem;
        line-height:150%;
        color:#ccc;
    }
`

export default GlobalStyle;