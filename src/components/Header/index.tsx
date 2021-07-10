import { AppBarStyled, ToolbarStyled } from "./styles";
import { CgMenuGridO } from "react-icons/cg";

import React from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";

import MenuHeader from "../MenuHeader";

function HideOnScroll(props: any) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({ target: window ? window() : undefined });

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default function Header(props: any) {
    return (
        <React.Fragment>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBarStyled>
                    <ToolbarStyled>
                        <h1>
                            SENTINELA <CgMenuGridO />
                        </h1>
                        <MenuHeader></MenuHeader>
                    </ToolbarStyled>
                </AppBarStyled>
            </HideOnScroll>
            <ToolbarStyled />
            <Container> </Container>
        </React.Fragment>
    );
}
