import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const FooterStyled = styled.footer`
  color: var(--white);
  text-align: center;

  .footer__bg {
    padding-top: 10rem;
    position: absolute;
    background: var(--dark-blue);
    width: 100%;
    height: auto;
    left: 0;
    z-index: -4;

    > * {
      position: relative;
      z-index: 1;
    }
  }

  span {
    font-family: "Kodchasan", sans-serif;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
  }

  .footer__logo {
    margin: 4rem 0;
  }
`;

export const ContentStyled = styled.div`
  margin: 1rem 0;

  nav > div {
    margin: 1rem 0;
  }
`;

export const IconButtonStyled = styled(IconButton)`
  color: var(--white) !important;
`;
