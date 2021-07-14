import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 423px;

    background: linear-gradient(180deg, #252744 0%, #34438e 100%);
    border-radius: 7px;

    @media (min-width: 768px) {
        background: var(--white);
        color: var(--dark-blue);
        width: 25rem;
        padding: 2rem;
        height: 27rem;
        border-radius: 0 7px 7px 0;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);
    }

    h2 {
        color: var(--white);
        line-height: 25px;
        text-transform: uppercase;
        text-align: center;
        margin-bottom: 2rem;

        @media (min-width: 768px) {
            color: var(--dark-blue);
        }
    }
    div {
        display: flex;
        align-items: flex-end;
        flex-direction: row-reverse;
        justify-content: center;

        section {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            gap: 5px;
            p {
                font-size: 9px;
                color: var(--white);
                @media (min-width: 768px) {
                    color: var(--dark-blue);
                }
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
                    #00adff 0%,
                    #323f81 100%,
                    rgba(77, 191, 246, 0) 100%
                );
                border-radius: 6.34884px;
                width: 40.56px;
                display: flex;
                align-items: flex-start;
                color: var(--white);
                font-weight: bold;
            }
        }
    }
`;
export const Image = styled.img`
    height: 40.56px;
    transform: translateX(-10px);
    z-index: 1;
`;
