import styled from "styled-components/macro"


export const StyledStartPage = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    font-family: "Inter", sans-serif;
`

export const StartMainTitle = styled.h1`
    margin-bottom: 1rem;
    font-size: 3.5rem;
    text-transform: uppercase;

    @media screen and (min-width: 1024px) {
        font-size: 4rem;
        margin-bottom: 1.5rem;
    }
`

export const StartSubTitle = styled.h2`
    margin-bottom: 2rem;

    @media screen and (min-width: 1024px) {
        font-size: 2rem;
    }
`

export const StyledInput = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;

    @media screen and (min-width: 1024px) {
        font-size: 1.5rem;
    }    
`

export const StartInput = styled.input`
    appearance: none;
    border: transparent;
    background: whitesmoke;
    margin-top: 7px;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1rem;

    &:hover,
    &:focus {
        outline: none;
        border: 1px solid purple;
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.3rem;
    }  
`

export const StyledTaskPage = styled.main`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    Footer {
        margin-top: auto;
    }
`

export const ContentWrapper = styled.section`
    width: 375px;
    margin: 0 auto;

    @media screen and (min-width: 668px) {
        width: 600px;
    }

    @media screen and (min-width: 1024px) {
        width: 800px;
    }
`

export const ErrorSection = styled.section`
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: "Inter", sans-serif;
`

export const ErrorTitle = styled.h1`
text-align: center;
width: 60%;
margin-bottom: 2rem;
font-size: 1.5rem;

@media screen and (min-width: 1024px) {
    width: 40%;
    font-size: 2rem;
}
`