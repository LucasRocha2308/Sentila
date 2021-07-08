import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const FooterStyled = styled.footer`
  color: var(--white);
  text-align: center;

  span {
    font-family: "Kodchasan", sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
  }
`;

export const ContentStyled = styled.div`
  span,
  div {
    margin-bottom: 5px;
  }
`;

export const IconButtonStyled = styled(IconButton)`
  color: var(--white) !important;
`;
