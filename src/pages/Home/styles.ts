import styled from "styled-components";

export const Container = styled.div`
    max-width: 1180px;
    margin: 0 auto;
    padding: 2rem;

    .g1 {
        width: max-content;
        margin: 0 auto;
    }
    @media (min-width: 768px) {
        .flex {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`;

export const BackgroundWrapper = styled.div`
    inset: 0;
    z-index: -3;
    position: absolute;

    .background1 {
        width: 100%;
        height: 907px;
        position: relative;
        background: linear-gradient(126.85deg, #252744 5.86%, #34438e 101.25%);
    }

    .background2 {
        bottom: 0;
        height: 546px;
        position: absolute;
        background: var(--white);
        width: calc(100% + 26px);
        transform: translateX(-26px);
        border-top-left-radius: 141px;
    }

    .background3 {
        height: 321px;
        width: calc(100% + 26px);
        background: var(--light-blue);
        border-top-left-radius: 141px;
        border-bottom-left-radius: 141px;
        transform: translate(-26px, -65px);
    }

    .background4 {
        bottom: 0;
        height: 546px;
        margin-top: 52px;
        width: calc(100% + 26px);
        transform: translateX(-26px);
        border-top-left-radius: 141px;
        background: linear-gradient(180deg, #34438e 0%, #252744 100%);
    }

    .background5 {
        width: 100%;
        height: 607px;
        position: relative;
        background: linear-gradient(126.85deg, #252744 5.86%, #34438e 101.25%);
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
    /* 
    .background6 {
        bottom: 0;
        height: 100px;
        position: absolute;
        background: var(--white);
        width: calc(100% + 26px);
        transform: translateX(-26px);
    } */

    /* .background7 {
        height: 321px;
        width: calc(100% + 26px);
        background: var(--light-blue);
        border-top-left-radius: 141px;
        border-bottom-left-radius: 141px;
        transform: translate(-26px, -65px);
    } */

    .background8 {
        bottom: 0;
        height: 806px;
        margin-top: 52px;
        width: calc(100% + 26px);
        transform: translateX(-26px);
        border-top-left-radius: 141px;
        background: var(--dark-blue);
    }
`;
