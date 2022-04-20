import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import StyledButton from "./StyledButton"

const ErrorSection = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Inter", sans-serif;
`

const ErrorTitle = styled.h1`
    text-align: center;
    width: 60%;
    margin-bottom: 2rem;
    font-size: 1.5rem;

    @media screen and (min-width: 1024px) {
        width: 40%;
        font-size: 2rem;
    }
`

const ErrorPage = () => {
    const navigate = useNavigate()

    const onBackClick = () => {
        navigate("/")
    }

    return (
        <ErrorSection>
            <ErrorTitle>Whoops, it looks like this page doesn't exist!</ErrorTitle>
            <StyledButton
            width="140px"
            fontSize="0.9rem"
            borderHover="2px solid black"
            fontSizeDesktop="1.2rem"
            widthDesktop="190px"
            onClick={onBackClick}>
                Go back to start
            </StyledButton>
        </ErrorSection>
    )
}

export default ErrorPage
