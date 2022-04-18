import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const ErrorSection = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ErrorTitle = styled.h1`
    text-align: center;
`

const ErrorButton = styled.button`
    appearance: none;
    border: none;
    border-radius: 10px;
    background: pink;
    padding: 6px;
    margin-top: 1rem;
`

const ErrorPage = () => {
    const navigate = useNavigate()

    const onBackClick = () => {
        navigate("/")
    }

    return (
        <ErrorSection>
            <ErrorTitle>Whoops, it looks like this page doesn't exist!</ErrorTitle>
            <ErrorButton onClick={onBackClick}>Go back to start</ErrorButton>
        </ErrorSection>
    )
}

export default ErrorPage
