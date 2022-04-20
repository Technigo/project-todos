import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import StyledButton from "./StyledButton"

import taskitems from "reducers/taskitems"

const StyledStartPage = styled.section`
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

const StartPage = () => {
    const [nameInputValue, setNameInputValue] = useState("")
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const onNameSet = () => {
        dispatch(taskitems.actions.setUserName(nameInputValue))
        navigate("/taskpage")
    }

    return (
        <StyledStartPage
        >
            <StartMainTitle>My To Dos</StartMainTitle>
            <StartSubTitle>Get yourself organized!</StartSubTitle>
            <StyledInput>
                Your name:
                <StartInput
                    type="text"
                    value={nameInputValue}
                    onChange={event => setNameInputValue(event.target.value)}
                />
            </StyledInput>
                <StyledButton
                fontSize="1rem"
                width="140px"
                fontSizeDesktop="1.2rem"
                widthDesktop="180px"
                disabled={!nameInputValue}
                borderHover="2px solid black"
                onClick={onNameSet}
                >
                    Let's get started
                </StyledButton>
        </StyledStartPage>
    )
}

export default StartPage
