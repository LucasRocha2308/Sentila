import styled from "styled-components";

export const MoreSpentContainer = styled.div`
  min-height: 380px;
  h2 {
    color: var(--dark-blue);
    line-height: 25px;
    text-transform: uppercase;
  }
  div {
    display: flex;
    align-items: flex-end;
    flex-direction: row-reverse;
    justify-content: center;
    gap: 1.5rem;

    section {
      /* min-width: 85px; */
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      text-align: center;
      gap: 5px;
      p {
        font-size: 9px;
      }
      p:nth-child(2) {
        width: min-content;
      }
      span {
        height: 40.56px;
        width: 40.56px;
        border-radius: 100%;
        z-index: 2;
        overflow: hidden;
      }

      div {
        background: linear-gradient(
          180deg,
          #163a4b 0%,
          #7dbff6 60%,
          rgba(77, 191, 246, 0) 100%
        );

        border-radius: 6.34884px;
        width: 40.56px;
        animation: animate-height 4s;

        @keyframes animate-height {
          0% {
            height: 10px;
            opacity: 0;
          }
          100% {
            visibility: visible;
            opacity: 1;
          }
        }
      }
    }
  }
`;
export const Image = styled.img`
  height: 40.56px;
  transform: translateX(-10px);
  z-index: 1;
`;
