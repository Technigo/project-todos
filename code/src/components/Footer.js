import React from "react"
import { useDispatch } from "react-redux"

import taskitems from "reducers/taskitems"
import StyledButton from "../styles/StyledButton"
import { StyledFooter, FooterButtonContainer, CreditText } from "styles/StylesForComponents"


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
                fontSize="0.8rem"
                margin="0.5rem"
                width="150px"
                borderHover="2px solid black"
                widthDesktop="190px"
                fontSizeDesktop="1.1rem"
                opacityHover="0.8"
                onClick={() => completeAllTasks()}>
                    Complete all tasks
                </StyledButton>
                <StyledButton
                fontSize="0.8rem"
                margin="0.5rem"
                width="150px"
                borderHover="2px solid black"
                widthDesktop="190px"
                fontSizeDesktop="1.1rem"
                opacityHover="0.8"
                onClick={() => deleteAllTasks()}>
                    Delete all tasks
                </StyledButton>
            </FooterButtonContainer>
            <CreditText>This app was created by Tiina Liukkonen</CreditText>
        </StyledFooter>
    )
}

export default Footer
