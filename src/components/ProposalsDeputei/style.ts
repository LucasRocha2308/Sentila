import styled from "styled-components";

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
