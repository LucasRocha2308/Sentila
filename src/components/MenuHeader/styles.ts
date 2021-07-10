import styled from "styled-components";

export const Nav = styled.nav`
    width: 100vw;
    height: 100vh;
    background: var(--white);
    color: var(--blue);
    display: flex;
    align-items: center;

    ul {
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    li {
        cursor: pointer;
        padding: 15px;

        list-style-type: none;
        font-family: "Rubik";
        font-size: 1.5rem;
        border-radius: 5px;

        transition: 0.3s;

        &:hover {
            color: var(--light-blue);
            border: 1px var(--light-blue) solid;
            letter-spacing: 1px;
        }
    }
`;
