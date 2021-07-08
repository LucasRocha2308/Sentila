import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    span {
      color: var(--red);
    }
  }
`;

interface InputsProps {
  isErrored: boolean;
}
export const InputContainer = styled.div<InputsProps>`
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) =>
    props.isErrored &&
    css`
      color: var(--red);
      border-color: var(--red);
      svg {
        color: var(--red);
      }
    `}

  input {
    all: unset;
    padding: 15px 120px 15px 5px;
    margin: 10px auto;
    border: 2px solid #4dbff6;
    box-sizing: border-box;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  input::placeholder {
    color: var(--light-blue);
  }
`;
