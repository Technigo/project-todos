import styled from 'styled-components/macro';

export const OuterWrapper = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: var(--mobile-y-padding);
`;

export const InnerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--section-x-padding);

    @media (min-width: 668px) {
        align-items: flex-start;
    }
`;