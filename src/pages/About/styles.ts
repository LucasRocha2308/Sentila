import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  color: var(--dark-blue);
  margin: 2rem 0;

  p {
    margin: 1rem 0;
    min-height: 80px;
    padding: 0px 28px;
  }

  margin-bottom: 7rem;
`;

export const ContainerAbout = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;

  border-radius: 50%;
  color: var(--dark-blue);

  h4 {
    font-size: 14px;
  }

  img {
    border-radius: 50%;
    width: 120px;
  }

  svg {
    font-size: 30px;
  }
`;
