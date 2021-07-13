import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";

export const AppBarStyled = styled(AppBar)<{ openMenu: boolean }>`
    transition: all 0.5s ease-out;

    background-color: ${({ openMenu }) =>
        openMenu ? "var(--white) !important;" : "var(--dark-blue) !important;"};

    justify-content: center;
    @media (min-width: 768px) {
        background-color: var(--dark-blue) !important;
    }

    h1 {
        font-size: 1.5rem;
        font-family: "Kodchasan";
        display: flex;
        justify-content: space-between;
        width: 100vw;
        padding: 1rem;
    }
    p {
        cursor: pointer;
    }
`;

export const ToolbarStyled = styled(Toolbar)<{ openMenu: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    h1 {
        color: ${({ openMenu }) =>
            openMenu
                ? "var(--light-blue) !important;"
                : "var(--white) !important;"};

        transition: 0.5s;
        .icon {
            color: ${({ openMenu }) =>
                openMenu
                    ? "var(--dark-blue) !important;"
                    : "var(--white) !important;"};
            content: "x";
            cursor: pointer;
            display: flex;
            align-items: center;
        }
    }
`;

export const Container = styled.header`
    /* width: 100vw;
    height: 100vh; */

    div {
    }
`;

export const Menu = styled.div``;

export const Nav = styled.nav`
    width: 100vw;
    height: 92vh;
    background: var(--white);
    color: var(--blue);
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        background: transparent;
        height: 3rem;
    }

    transition: 0.5s;
    ul {
        height: 65vh;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        @media (min-width: 768px) {
            flex-direction: row;
        }
    }
    li {
        cursor: pointer;
        padding: 15px;

        list-style-type: none;
        font-family: "Rubik";
        font-size: 1.5rem;
        border-radius: 5px;

        transition: 0.3s;

        letter-spacing: 0.02rem;
        @media (min-width: 768px) {
            font-size: 1rem;
            letter-spacing: 0;
            font-family: "DM Sans";
            padding: 0.5rem;
            color: var(--white);
            font-weight: 600;
            margin: 0.3rem;

            &:hover {
                letter-spacing: 0;
                border: none;
            }
        }

        &:hover {
            color: var(--light-blue);
            border: 1px var(--light-blue) solid;
            letter-spacing: 0.1rem;
        }
    }
`;
