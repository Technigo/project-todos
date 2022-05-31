import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

import taskitems from "reducers/taskitems"
import StyledButton from "../styles/StyledButton"
import { 
    StyledStartPage,
    StartMainTitle,
    StartSubTitle,
    StyledInput,
    StartInput } from "styles/StylesForPages"


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
