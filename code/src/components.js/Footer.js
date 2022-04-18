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
                fontSize="0.9rem"
                margin="0.5rem"
                width="160px"
                borderHover="2px solid black"
                widthDesktop="190px"
                fontSizeDesktop="1.1rem"
                opacityHover="0.8"
                onClick={() => completeAllTasks()}>
                    Complete all tasks
                </StyledButton>
                <StyledButton
                fontSize="0.9rem"
                margin="0.5rem"
                width="160px"
                borderHover="2px solid black"
                widthDesktop="190px"
                fontSizeDesktop="1.1rem"
                opacityHover="0.8"
                onClick={() => deleteAllTasks()}>
                    Delete all tasks
                </StyledButton>
            </FooterButtonContainer>
            <CreditText>This app is created by Tiina Liukkonen</CreditText>
        </StyledFooter>
    )
}

export default Footer
