import styled from "styled-components";
// import { Link } from "react-router-dom";

export const ContainerFormAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
  @media (min-width: 571px) {
    flex-direction: row;
  }
`;

export const ContainerRegister = styled.div`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const ContainerForm = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 10px;

  @media (min-width: 520px) {
    width: 75%;
  }
  @media (min-width: 1100px) {
    width: 40%;
    height: 500px;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    margin: 20px;
    color: var(--light-blue);
    font-family: Kodchasan;
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
    line-height: 49px;
  }

  button {
    all: unset;
    background: #4dbff6;
    border-radius: 8px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;

    padding: 16px 125px;
    color: var(--white);

    display: flex;
    align-items: center;
    letter-spacing: 0.01em;

    margin-top: 20px;
  }

  h4 {
    margin: 10px;
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    a {
      color: var(--light-blue);
    }
  }
`;
