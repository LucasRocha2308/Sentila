import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";

export const AppBarStyled = styled(AppBar)`
    background-color: var(--dark-blue) !important;
    justify-content: center;
    h1 {
        font-size: 1.3rem;
        font-family: "Kodchasan";
        display: flex;
        justify-content: space-between;
        width: 100vw;
    }
`;

export const ToolbarStyled = styled(Toolbar)``;

export const Container = styled.header`
    /* width: 100vw;
    height: 100vh; */

    div {
    }
`;

export const Menu = styled.div`
    color: var(--white);
`;
