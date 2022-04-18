// Style the buttons
// Style the text

import React from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components"

import taskitems from "reducers.js/taskitems"
import StyledButton from "./StyledButton"

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 2rem 0 2rem;
`

const FooterButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
`

const CreditText = styled.p`
    margin-top: 2.5rem;
    font-size: 1rem;

    @media screen and (min-width: 1024px) {
        font-size: 1.2rem;
    }
`

const Footer = () => {
    const dispatch = useDispatch()

    const completeAllTasks = () => {
        dispatch(taskitems.actions.completeAllTaskItems())
    }

    const deleteAllTasks = () => {
        dispatch(taskitems.actions.deleteAllTaskItems())
    }

    return (
        <StyledFooter>
            <FooterButtonContainer>
                <StyledButton
                fontSize="1rem"
                margin="0.5rem"
                width="150px"
                borderHover="2px solid purple"
                widthDesktop="180px"
                fontSizeDesktop="1.2rem"
                onClick={() => completeAllTasks()}>
                    Complete all tasks
                </StyledButton>
                <StyledButton
                fontSize="1rem"
                margin="0.5rem"
                width="150px"
                borderHover="2px solid purple"
                widthDesktop="180px"
                fontSizeDesktop="1.2rem"
                onClick={() => deleteAllTasks()}>
                    Delete all tasks
                </StyledButton>
            </FooterButtonContainer>
            <CreditText>This app is created by Tiina Liukkonen</CreditText>
        </StyledFooter>
    )
}

export default Footer
