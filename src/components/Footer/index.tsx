import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import { useState } from "react";
import { FooterStyled, ContentStyled, IconButtonStyled } from "./styles";

import footerLogo from "../../assets/img/logo-footer.svg";

import { useHistory } from "react-router";

import useWindowDimensions from "../../provider/windowDimensions";

const Footer = () => {
  const history = useHistory();

  const [expandedNav, setExpandedNav] = useState(false);
  const [expandedContacts, setExpandedContacts] = useState(false);
  const [expandedSupport, setExpandedSupport] = useState(false);
  const { width } = useWindowDimensions();

  const handleExpandClickNav = () => {
    setExpandedNav(!expandedNav);
  };

  const handleExpandClickContacts = () => {
    setExpandedContacts(!expandedContacts);
  };

  const handleExpandClickSupport = () => {
    setExpandedSupport(!expandedSupport);
  };
  const handleRedirect = (path: string) => {
    history.push(path);
  };
  return (
    <>
      <FooterStyled>
        <div className="footer__bg">
          {Number(width) < 768 ? (
            <div className="navigation">
              <ContentStyled>
                <span className="footer__menu">navegar</span>

                <IconButtonStyled
                  onClick={handleExpandClickNav}
                  aria-expanded={expandedNav}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButtonStyled>
                <Collapse in={expandedNav} timeout="auto" unmountOnExit>
                  <nav>
                    <ul>
                      <li onClick={() => handleRedirect("/about")}>Sobre</li>
                      <li onClick={() => handleRedirect("/expenses")}>
                        Despesas
                      </li>

                      <li onClick={() => handleRedirect("/proposals")}>
                        Propostas
                      </li>
                    </ul>
                  </nav>
                </Collapse>
              </ContentStyled>
              <ContentStyled>
                <span className="footer__menu">Contato</span>
                <IconButtonStyled
                  onClick={handleExpandClickContacts}
                  aria-expanded={expandedContacts}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButtonStyled>
                <Collapse in={expandedContacts} timeout="auto" unmountOnExit>
                  <nav>
                    <ul>
                      <li onClick={() => handleRedirect("/about")}>
                        Nossa equipe
                      </li>
                    </ul>
                  </nav>
                </Collapse>
              </ContentStyled>
              <ContentStyled>
                <span className="footer__menu">Apoie</span>
                <IconButtonStyled
                  onClick={handleExpandClickSupport}
                  aria-expanded={expandedSupport}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButtonStyled>
                <Collapse in={expandedSupport} timeout="auto" unmountOnExit>
                  <nav>
                    <ul>
                      <li>Github</li>
                      <li>Sugestões</li>
                      <li>Paypal</li>
                      <li>Pix</li>
                    </ul>
                  </nav>
                </Collapse>
              </ContentStyled>
            </div>
          ) : (
            <div className="navigation">
              <ContentStyled>
                <span className="footer__menu">navegar</span>

                <nav>
                  <ul>
                    <li onClick={() => handleRedirect("/about")}>Sobre</li>
                    <li onClick={() => handleRedirect("/expenses")}>
                      Despesas
                    </li>
                    <li onClick={() => handleRedirect("/proposals")}>
                      Propostas
                    </li>
                  </ul>
                </nav>
              </ContentStyled>

              <ContentStyled>
                <span className="footer__menu">Apoie</span>

                <nav>
                  <ul>
                    <li>Github</li>
                    <li>Sugestões</li>
                    <li>Paypal</li>
                    <li>Pix</li>
                  </ul>
                </nav>
              </ContentStyled>
              <ContentStyled>
                <span className="footer__menu">Contato</span>

                <nav>
                  <ul>
                    <li onClick={() => handleRedirect("/about")}>
                      Nossa equipe
                    </li>
                  </ul>
                </nav>
              </ContentStyled>
            </div>
          )}
          {Number(width) >= 768 && (
            <div className="text">
              <p>
                <strong>Sentinela</strong> é um projeto desenvolvido por alunos
                da <em>Kenzie Academy Brasil</em> e tem o intuito de deixar
                acessível e de forma descomplicada os gastos dos deputados da
                Câmara Federal.
              </p>
            </div>
          )}
          <div className="footer__logo">
            <img src={footerLogo} alt="Sentinela" />
          </div>
        </div>
      </FooterStyled>
    </>
  );
};
export default Footer;
