import { AppBarStyled, ToolbarStyled, Nav } from "./styles";
import { CgMenuGridO } from "react-icons/cg";
import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useHistory } from "react-router";
import useWindowDimensions from "../../provider/windowDimensions";

export default function Header(props: any) {
  const token = localStorage.getItem("@Sentinela/token");
  const { width } = useWindowDimensions();

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
    history.push("/home");
    window.location.reload();
  };
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBarStyled openMenu={openMenu}>
        <ToolbarStyled openMenu={openMenu}>
          <h1>
            <p onClick={() => history.push("/")}>SENTINELA </p>
            {Number(width) < 768 && (
              <div className="icon" onClick={handleMenu}>
                {openMenu ? "x" : <CgMenuGridO />}
              </div>
            )}
          </h1>
          {openMenu || Number(width) > 768 ? (
            <>
              {" "}
              <Nav>
                <ul>
                  {token ? (
                    <li className="btn-1" onClick={logout}>
                      LOGOUT
                    </li>
                  ) : (
                    <li
                      className="btn-1"
                      onClick={() => handleRedirect("/login")}
                    >
                      LOGIN
                    </li>
                  )}

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
