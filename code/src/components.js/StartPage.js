// Add an image?

import React from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

import StyledButton from "./StyledButton"

// import taskitems from "reducers.js/taskitems"

const StyledStartPage = styled.form`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
`

const StartMainTitle = styled.h1`
    margin-bottom: 1rem;
    font-size: 3.5rem;
    text-transform: uppercase;
`

const StartSubTitle = styled.h2`
    margin-bottom: 2rem;
`

const StyledInput = styled.label`
    display: flex;
    flex-direction: column;
`

const StartInput = styled.input`
    appearance: none;
    border: transparent;
    background: whitesmoke;
    margin-top: 7px;
    border-radius: 10px;
    padding: 5px;
    margin-bottom: 2rem;
    text-align: center;
    font-soze: 1rem;

    &:hover,
    &:focus {
        outline: none;
        border: 1px solid purple;
    }
`

const StartPage = ({nameInput, onNameInputChange}) => {
  

    return (
        <StyledStartPage>

            <StartMainTitle>My To Dos</StartMainTitle>

            <StartSubTitle>Get yourself organized!</StartSubTitle>
            
            <StyledInput>
                Your name:
                <StartInput
                type="text"
                value={nameInput}
                onChange={onNameInputChange}/>
            </StyledInput>
            
           
            <Link to="/taskpage">
                <StyledButton
                fontSize="1rem"
                fontSizeDesktop="1.1rem"
                disabled={!nameInput}
                borderHover="none"
                type="submit"
                >
                    Let's get started
                </StyledButton>
            </Link>
        
           
        </StyledStartPage>
    )
}

export default StartPage
