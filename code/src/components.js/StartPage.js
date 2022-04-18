import React from "react"
// import { useDispatch, useSelector } from "react-redux"
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
    font-family: "Inter", sans-serif;
`

const StartMainTitle = styled.h1`
    margin-bottom: 1rem;
    font-size: 3.5rem;
    text-transform: uppercase;

    @media screen and (min-width: 1024px) {
        font-size: 4rem;
        margin-bottom: 1.5rem;
    }
`

const StartSubTitle = styled.h2`
    margin-bottom: 2rem;

    @media screen and (min-width: 1024px) {
        font-size: 2rem;
    }
`

const StyledInput = styled.label`
    display: flex;
    flex-direction: column;
    font-size: 1.1rem;

    @media screen and (min-width: 1024px) {
        font-size: 1.5rem;
    }    
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

const StartPage = ({nameInput, onNameInputChange}) => {
    // const userName = useSelector((state) => state.username)
    // const dispatch = useDispatch()

    // Tried to update global state with users name input
    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     dispatch(taskitems.actions.setUserName(nameInput))
    // }

    return (
        <StyledStartPage
        // onSubmit={handleSubmit}
        >
            <StartMainTitle>My To Dos</StartMainTitle>

            <StartSubTitle>Get yourself organized!</StartSubTitle>
            
            <StyledInput>
                Your name:
                <StartInput
                type="text"
                value={nameInput}
                onChange={onNameInputChange}
                />
            </StyledInput>
            
           
            <Link to="/taskpage">
                <StyledButton
                fontSize="1rem"
                width="140px"
                fontSizeDesktop="1.2rem"
                widthDesktop="180px"
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
