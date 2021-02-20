import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding:0;
        box-sizing: border-box;
    }
    html{
        &::-webkit-scrollbar{
            width: 0.5rem;
        }
        &::-webkit-scrollbar-thumb{
            background-color: #ff7676;
        }
        &::-webkit-scrollbar-track {
            background: #777777;
        }
    }
    body{
        font-family: 'Montserrat', sans-serif;
        width: 100%;
        background-color: #333;
    }
    h2{
        font-size: 3rem;
        font-family: 'Abril Fatface', cursive;
        font-weight: lighter;
        color: #dadada;
    }
    h3{
        font-size: 1.3rem;
        color: #dadada;
        padding: 1.5rem 0rem;
    }
    p{
        font-size: 1.2rem;
        line-height: 200%;
        color: #aaaaaa;
    }
    a{
        text-decoration: none !important;
        color: #9b9b9b;
    }
    img{
        display: block;
    }
    input{
        font-weight: bold;
        font-family: "Montserrat", sans-serif;
    }
`;
