import styled from "styled-components";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export const ProposalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 7rem;

  h2 {
    color: var(--white);
    text-transform: uppercase;
    text-align: center;
  }

  .carousel__spacing {
    height: 391px;
  }

  .react-multi-carousel-list::after {
    content: "";
    height: 327px;
    width: 75.5px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    background: linear-gradient(270deg, #252744 0%, rgba(37, 39, 68, 0) 100%);
    position: absolute;
    right: 0;
    pointer-events: none;
  }

  .react-multi-carousel-list::before {
    content: "";
    transform: scaleX(-1);
    height: 327px;
    width: 75.5px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    background: linear-gradient(270deg, #252744 0%, rgba(37, 39, 68, 0) 100%);
    position: absolute;
    z-index: 10;
    left: 0;
    pointer-events: none;
  }

  @media only screen and (min-width: 464px) {
    .react-multi-carousel-list::after,
    .react-multi-carousel-list::before {
      display: none;
      background-color: lightblue;
    }
  }
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
  position: absolute;
  padding: 6rem 0 2rem 0;
  left: 0;

  section {
    background: var(--white);
    z-index: 10;
    margin: 0 0.5rem;
    padding: 1.5rem 1rem;
    width: 200px;
    height: 327px;
    display: flex;
    gap: 10px;
    flex-direction: column;
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

  a > span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .carousel-item-padding-40-px {
    display: flex;
    justify-content: center;
  }
`;
