import styled from "styled-components";

export const ButtonStyle = styled.button`
  all: unset;
  cursor: pointer;
  background: var(--light-blue);
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  padding: 16px 150px;
  color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  margin-top: 10px;
  :hover {
    opacity: 0.8;
  }
`;
