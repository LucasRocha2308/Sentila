import styled from "styled-components";

export const ProposalsContainer = styled.div`
  h2 {
    color: var(--dark-blue);
  }
`;

export const ProposalsDeputeiContainer = styled.div`
  width: 100%;
  padding: 1rem 0 2rem 0;
  left: 0;
  section {
    background: var(--light-blue);
    padding: 1.5rem 1rem;
    margin: 0 0.5rem;
    display: flex;
    gap: 10px;
    flex-direction: column;
    border-radius: 7px;
  }

  h4 {
    color: var(--white);
    text-transform: uppercase;
  }
  a {
    color: var(--white);
  }

  a > span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

export const ProposalsCarouselContainer = styled.div`
  width: 100%;
  padding: 1rem 0 2rem 0;
  left: 0;
  section {
    background: var(--dark-blue);
    padding: 1.5rem 1rem;
    margin: 0 0.5rem;
    display: flex;
    gap: 10px;
    flex-direction: column;
    border-radius: 7px;
    color: var(--white);
  }

  h4 {
    text-transform: uppercase;
  }

  a > span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;
