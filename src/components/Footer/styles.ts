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

    @media (min-width: 768px) {
      display: flex;
      flex-direction: row-reverse;
      justify-content: space-evenly;
      align-items: center;

      .navigation {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
      }

      .text {
        max-width: 20rem;
      }
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
    img {
      @media (min-width: 768px) {
        width: 10rem;
      }
    }
  }
`;

export const ContentStyled = styled.div`
  margin: 1rem 0;
  padding: 0.5rem;

  nav > div {
    margin: 1rem 0;
  }

  li {
    margin: 20px 0;
    list-style-type: none;
    cursor: pointer;
  }
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export const IconButtonStyled = styled(IconButton)`
  color: var(--white) !important;
`;
