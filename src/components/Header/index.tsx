import { AppBarStyled, ToolbarStyled, Nav } from "./styles";
import { CgMenuGridO } from "react-icons/cg";

import React, { useState } from "react";

import CssBaseline from "@material-ui/core/CssBaseline";

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
  const token = localStorage.getItem("@Sentinela/token")

  const [openMenu, setOpenMenu] = useState(false);
  const history = useHistory();
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleRedirect = (path: string) => {
    history.push(path);
    handleMenu();
  };
  const logout = () => {
    localStorage.clear();
    history.push("/home")
  }
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
                    {token ? (
                        <li
                        className="btn-1"
                        onClick={logout}
                        >
                        LOGOUT
                        </li>
                    ):(
                        <li
                        className="btn-1"
                        onClick={() => handleRedirect("/login")}
                        >
                        LOGIN
                        </li>
                    )
                    }
                  
                  <li
                    className="btn-1"
                    onClick={() => handleRedirect("/register")}
                  >
                    CADASTRO
                  </li>
                  <li
                    className="btn-1"
                    onClick={() => handleRedirect("/expenses")}
                  >
                    DESPESAS
                  </li>
                  <li
                    className="btn-1"
                    onClick={() => handleRedirect("/proposals")}
                  >
                    PROPOSTAS
                  </li>
                  <li
                    className="btn-1"
                    onClick={() => handleRedirect("/about")}
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
