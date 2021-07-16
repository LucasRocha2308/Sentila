import styled from "styled-components";
import { Modal } from "@material-ui/core";

export const ProposalsCarouselContainer = styled.div`
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
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
  b {
    color: var(--light-blue);
  }
  a > span {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;
export const ModalStyle = styled(Modal)`
  margin-top: 60px;
  overflow-y: scroll;
`;
