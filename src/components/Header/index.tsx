import { AppBarStyled, ToolbarStyled, Nav } from "./styles";
import { CgMenuGridO } from "react-icons/cg";

import React, { useState } from "react";
import PropTypes from "prop-types";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
import { useHistory } from "react-router";

// function HideOnScroll(props: any) {
//     const { children, window } = props;
//     // Note that you normally won't need to set the window ref as useScrollTrigger
//     // will default to window.
//     // This is only being set here because the demo is in an iframe.
//     const trigger = useScrollTrigger({ target: window ? window() : undefined });

//     return (
//         <Slide appear={false} direction="down" in={!trigger}>
//             {children}
//         </Slide>
//     );
// }

// HideOnScroll.propTypes = {
//     children: PropTypes.element.isRequired,
//     /**
//      * Injected by the documentation to work in an iframe.
//      * You won't need it on your project.
//      */
//     window: PropTypes.func,
// };

export default function Header(props: any) {
    const [openMenu, setOpenMenu] = useState(false);
    const history = useHistory();
    const handleMenu = () => {
        setOpenMenu(!openMenu);
    };
    const handleRedirect = (path: string) => {
        history.push(path);
        handleMenu();
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBarStyled openMenu={openMenu}>
                <ToolbarStyled openMenu={openMenu}>
                    <h1>
                        <p onClick={() => history.push("/")}>SENTINELA </p>

                        <div className="icon" onClick={handleMenu}>
                            {openMenu ? "x" : <CgMenuGridO />}
                        </div>
                    </h1>
                    {openMenu ? (
                        <>
                            {" "}
                            <Nav>
                                <ul>
                                    <li
                                        className="btn-1"
                                        onClick={() => handleRedirect("/login")}
                                    >
                                        LOGIN
                                    </li>
                                    <li
                                        className="btn-1"
                                        onClick={() =>
                                            handleRedirect("/register")
                                        }
                                    >
                                        CADASTRO
                                    </li>
                                    <li
                                        className="btn-1"
                                        onClick={() =>
                                            handleRedirect("/register")
                                        }
                                    >
                                        DESPESAS
                                    </li>
                                    <li
                                        className="btn-1"
                                        onClick={() =>
                                            handleRedirect("/register")
                                        }
                                    >
                                        PROPOSTAS
                                    </li>
                                    <li
                                        className="btn-1"
                                        onClick={() =>
                                            handleRedirect("/register")
                                        }
                                    >
                                        SOBRE NÓS
                                    </li>
                                </ul>
                            </Nav>{" "}
                        </>
                    ) : (
                        <></>
                    )}
                </ToolbarStyled>
            </AppBarStyled>
        </React.Fragment>
    );
}
