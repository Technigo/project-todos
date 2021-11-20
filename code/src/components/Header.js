import React from "react";
import { useSelector } from "react-redux"
import styled from "styled-components/macro"
import logo from "../assets/logo.png"
import backgroundImage from '../assets/background-image.jpg'
import moment from 'moment'

const StyledHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-image: url(${backgroundImage});
    box-shadow: inset 0 -9px 15px -10px #625F4E;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 40vh;
    z-index: 1;
    padding: 10px;
`;

const AppName = styled.h1`
    font-size: 16px;
    margin: 0;
`;

const TasksContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-top: 10px;
`;

const StyledTasksInfo = styled.p`
    font-size: 14px;
    text-align: right;
    margin: 0;
    line-height: 4vh;
`;

const CurrentDate = styled.h3`
    text-align: right;
    margin: 0 0 5px 0;
`;

const AppLogo = styled.img`
    width: 100px;
    height: 100px;
`;

const Header = () => {
    const items = useSelector((store) => store.todos.items)
    const completedTodos = items.filter((item) => item.isComplete)
    const incompletedTodos = items.filter((item) => !item.isComplete)
    const currentDate = moment().format('Do MMMM YYYY')


    return (
        <StyledHeader>
            <div>
                <AppLogo src={logo} alt="do your dos logo" />
                <AppName>Do Your Dos!</AppName>
            </div>
            <TasksContainer>
                <CurrentDate>{currentDate}</CurrentDate>
                <StyledTasksInfo>Total tasks: {items.length}</StyledTasksInfo>
                <StyledTasksInfo>Completed tasks: {completedTodos.length}</StyledTasksInfo>
                <StyledTasksInfo>Tasks left: {incompletedTodos.length}</StyledTasksInfo>
            </TasksContainer>
        </StyledHeader>
    )
}

export default Header