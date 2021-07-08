import styled from "styled-components";

export const ProposalsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  section {
    background: var(--white);
    width: 150px;
    height: 327px;
    display: flex;
    flex-direction: column;
    box-shadow: 0px 14px 12px 3px rgba(0, 0, 0, 0.07);
    border-radius: 7px;
    text-align: justify;
  }
  h2 {
    color: var(--white);
    text-transform: uppercase;
  }
  h4 {
    color: var(--light-blue);
    text-transform: uppercase;
  }
  a {
    color: var(--light-blue);
  }
`;
