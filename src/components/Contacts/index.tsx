import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";

import { useState } from "react";
import { ContentStyled, IconButtonStyled } from "./styles";
import { useIsLogin } from "../../provider/isLogin";

const Contacts = ({ data }: any) => {
  const { isLogin } = useIsLogin();
  const [expandedNav, setExpandedNav] = useState(false);

  const handleExpandClickNav = () => {
    setExpandedNav(!expandedNav);
  };

  return (
    <div>
      <div>
        {/* {isLogin && ( */}
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
            <nav>
              <p>
                <span>Telefone :</span> {data.telefone}
              </p>
              <p>
                <span>E-mail : </span>
                {data.email}
              </p>
            </nav>
          </Collapse>
        </ContentStyled>
        {/* )} */}
      </div>
    </div>
  );
};
export default Contacts;
