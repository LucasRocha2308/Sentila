import styled from "styled-components";

export const Container = styled.div`
    text-align: center;
    color: var(--dark-blue);
    margin: 2rem 0;
    max-width: 45rem;
    margin: auto;

    p {
        margin: 0.2rem;
        min-height: 80px;
        padding: 0px 28px;
        text-indent: 3ch;
        text-align: justify;
    }
    h1 {
        margin: 1rem;
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
        margin: 1rem;
    }

    svg {
        font-size: 30px;
    }
`;

export const ContainerOut = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 60rem;
    flex-direction: row;
    margin: auto;
    justify-content: center;
    align-items: center;
`;
