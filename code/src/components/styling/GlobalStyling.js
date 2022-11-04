import styled from 'styled-components'

// --------------- WRAPPERS --------------------
export const OuterWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(to left, rgba(0,126,159,0.5), rgba(0,126,159,1));
`
export const InnerWrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    padding-bottom: 20px;
    min-height: 50vh;

    @media (min-width: 668px){ 
        width: 75%;
    } 

    @media (min-width: 1025px) {
        width: 50%; 
    }
`