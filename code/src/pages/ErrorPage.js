import React from "react"
import { useNavigate } from "react-router-dom"

import StyledButton from "../styles/StyledButton"
import { ErrorSection, ErrorTitle } from "styles/StylesForPages"


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
