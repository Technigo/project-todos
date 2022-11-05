import styled from 'styled-components/macro';

export const OuterWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center; 
`

export const BorderGradient = styled.div`
    display: flex;
    justify-content: center; 
    background-color: #de4035;
    background-image: linear-gradient(225deg, #de4035 0%, #f37045 22%, #f29053 48%, #4e9e81 74%, #1b5d50 95%); 
    margin-top: 5px;
    border-radius: 10px;

    @media (min-width: 667px) {
        margin-top: 50px;
    }
`

export const BorderWhite = styled.div`
    background-color: white;
    margin: 10px;
    border-radius: 5px;
`

export const InnerWrapper = styled.div`;
    width: 290px;
    text-align: center; 
    padding: 10px 30px;
    
    @media (min-width: 667px) {
        width: 400px;
    }
`