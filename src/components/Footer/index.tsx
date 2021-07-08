import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import { useState } from "react";
import { FooterStyled, ContentStyled, IconButtonStyled } from "./styles";

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
        <ContentStyled>
          <span>navegar</span>
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
          <span>Contato</span>
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
          <span>Apoie</span>
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
      </FooterStyled>
    </>
  );
};
export default Footer;
