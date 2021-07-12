import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import { useState } from "react";
import { FooterStyled, ContentStyled, IconButtonStyled } from "./styles";

import footerLogo from "../../assets/img/logo-footer.svg";

const Footer = () => {
  const [expandedNav, setExpandedNav] = useState(false);
  const [expandedContacts, setExpandedContacts] = useState(false);
  const [expandedSupport, setExpandedSupport] = useState(false);

  const handleExpandClickNav = () => {
    setExpandedNav(!expandedNav);
  };

  const handleExpandClickContacts = () => {
    setExpandedContacts(!expandedContacts);
  };

  const handleExpandClickSupport = () => {
    setExpandedSupport(!expandedSupport);
  };
  return (
    <>
      <FooterStyled>
        <div className="footer__bg">
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
                <div>Sobre</div>
                <div>Quem mais gastou</div>
                <div>Quem mais economizou</div>
                <div>Propostas</div>
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
                <div>Nossa equipe</div>
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
                <div>Github</div>
                <div>Sugestões</div>
                <div>Paypal</div>
                <div>Pix</div>
              </nav>
            </Collapse>
          </ContentStyled>
          <div className="footer__logo">
            <img src={footerLogo} alt="Sentinel" />
          </div>
        </div>
      </FooterStyled>
    </>
  );
};
export default Footer;
