import styled from "styled-components";

export const ContainerFormAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 80vh;
  overflow-y: hidden;
  box-sizing: border-box;
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

  @media (min-width: 320px) {
    width: 75%;
  }

  @media (min-width: 520px) {
    width: 75%;
  }
  @media (min-width: 1100px) {
    width: 40%;
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 20px;
    margin-top: 30px;
    color: var(--light-blue);
    font-family: Kodchasan;
    font-style: normal;
    font-weight: bold;
    font-size: 38px;
  }

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
