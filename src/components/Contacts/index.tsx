import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ContentStyled,
  IconButtonStyled,
  ButtonEmailStyled,
  MessageStyled,
} from "./styles";
import { useIsLogin } from "../../provider/isLogin";

const Contacts = ({ data }: any) => {
  const { isLogin } = useIsLogin();
  const [expandedNav, setExpandedNav] = useState(false);

  const handleExpandClickNav = () => {
    setExpandedNav(!expandedNav);
  };

  return (
    <div>
      {isLogin ? (
        <ContentStyled>
          <span>Exibir contato</span>
          <IconButtonStyled
            onClick={handleExpandClickNav}
            aria-expanded={expandedNav}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButtonStyled>
          <Collapse in={expandedNav} timeout="auto" unmountOnExit>
            {data && (
              <>
                <nav>
                  <div>
                    <span>Telefone :</span>
                    <p>(61) {data.telefone}</p>
                  </div>
                  <div>
                    <span>E-mail : </span>
                    <p>{data.email}</p>
                  </div>
                </nav>
                <ButtonEmailStyled href={`mailto:${data.email}`}>
                  Enviar email
                </ButtonEmailStyled>
              </>
            )}
          </Collapse>
        </ContentStyled>
      ) : (
        <MessageStyled>
          <h4>
            Quer entrar em contato com seu parlamentar?
            <Link to="/register"> Cadastre-se aqui</Link>
          </h4>
        </MessageStyled>
      )}
    </div>
  );
};
export default Contacts;
