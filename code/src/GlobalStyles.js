import styled, { createGlobalStyle } from 'styled-components/macro';

const GlobalStyles = createGlobalStyle`
   *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

export const OuterWrapper = styled.section`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const InnerWrapper = styled.section`
    width: 85vw;
    margin: 0 auto;

    @media (min-width: 768px) {
        width: 40vw;
    }
`

export default GlobalStyles;