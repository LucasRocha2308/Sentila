import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const ProposalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  h2 {
    color: var(--white);
    text-transform: uppercase;
  }
`;

export const StyledCarousel = styled(Carousel)`
  background: linear-gradient(
    180deg,
    #252744 0%,
    rgba(37, 39, 68, 0) 100%,
    transparent 100%
  );
  section {
    background: var(--white);
    width: 200px;
    height: 327px;
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    box-shadow: 0px 14px 12px 3px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
  }

  h4 {
    color: var(--light-blue);
    text-transform: uppercase;
  }
  a {
    color: var(--light-blue);
  }
  .carousel-item-padding-40-px {
    display: flex;
    justify-content: center;
  }
`;
