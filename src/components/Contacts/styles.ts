import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";

export const ContentStyled = styled.div`
  div {
    margin-bottom: 1rem;
  }
  p:hover {
    opacity: 0.8;
    color: var(--dark-blue);
    font-weight: bold;
  }

  span {
    font-weight: bold;
    color: var(--dark-blue);
  }
`;

export const IconButtonStyled = styled(IconButton)``;

export const ButtonEmailStyled = styled.a`
  all: unset;
  cursor: pointer;
  background: var(--light-blue);
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  width: 100%;
  padding: 1rem 0;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 1rem;
  :hover {
    opacity: 0.8;
  }
`;

export const MessageStyled = styled.div`
  h4 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    a {
      color: var(--light-blue);
    }
  }
`;
