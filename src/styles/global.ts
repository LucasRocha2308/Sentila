import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    margin:0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
}

    :root{
            --white: #fdfdfd;
            --dark-blue: #252744;
            --blue: #34438E;
            --light-blue: #4DBFF6;
            --red: #c53030;
        }
    body{
       background: var(--white);
    }   
    body,input{
        font-family: 'DM Sans', sans-serif;
        font-size: 1rem;
    } 
    h1,h2,h3,h4,h5,h6{
        font-family: 'Rubik', sans-serif;
    }
   a,p{
        text-decoration: none;
        font-family: 'Kodchasan', sans-serif;
    }
`;
