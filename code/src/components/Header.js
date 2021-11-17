import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components/macro";
import logo from "../assets/logo.png"

const StyledHeader = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
column-gap: 70px;
background-color: #00254F;
position: fixed;
top: 0;
left: 0;
right: 0;
height: 15vh;
z-index: 1;
`;

const TasksContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
`;

const StyledP = styled.p`
font-size: 14px;
text-align: right;
margin: 0;
line-height: 3vh;
`;

const Header = () => {
    const items = useSelector((store) => store.todos.items)
    const completedTodos = items.filter((item) => item.isComplete)
    const incompletedTodos = items.filter((item) => !item.isComplete)

    return (
        <StyledHeader>
            <img src={logo} alt="do your dos logo" />
            <TasksContainer>
                <StyledP>Total tasks: {items.length}</StyledP>
                <StyledP>Completed tasks: {completedTodos.length}</StyledP>
                <StyledP>Tasks left: {incompletedTodos.length}</StyledP>
            </TasksContainer>
        </StyledHeader>
    )
}

export default Header