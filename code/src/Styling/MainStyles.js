import styled from 'styled-components/macro';

export const OuterWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--color-white);
    border-radius: 37px;
    padding: 1.2rem;
    width: 20rem;
    height: 40rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);

    @media (min-width: 668px) {

    }
`;