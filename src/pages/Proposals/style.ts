import styled from "styled-components";

export const ProposalsContainer = styled.div`
  h2 {
    color: var(--dark-blue);
  }
`;

export const ContainerError = styled.div`
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  width: 40%;
  margin: 0 auto;
  text-align: center;
`;

export const ProposalsWrapper = styled.div`
  padding: 1rem;

  @media only screen and (min-width: 768px) {
    .proposals__parent {
      display: flex;
      gap: 3rem;
    }

    .proposals__column1 {
      min-width: 340px;
    }
  }
`;
