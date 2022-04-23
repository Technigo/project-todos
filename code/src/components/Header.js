import React from "react"
import { useSelector } from "react-redux"
import Moment from "react-moment"
import styled from "styled-components"

const StyledHeader = styled.header`
    margin: 1.5rem;
    padding: 1.3rem;
    background: linear-gradient(200deg, #e3c5f4 0%, #c56bf9 55%);
    border-radius: 10px;
    color: white;
    font-family: "Poppins", sans-serif;
`

const HeaderDetails = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const HeaderTitle = styled.h1`
    font-size: 1.7rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    font-weight: bold;
    width: 30%;

    @media screen and (min-width: 1024px) {
        font-size: 2.2rem;
    }
`

const CurrentTasks = styled.p`
    font-size: 0.8rem;
    width: 30%;
    background: white;
    padding: 6px;
    border-radius: 10px;
    color: #060624;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 3px 6px 0px #00000081;

    @media screen and (min-width: 1024px) {
        font-size: 0.9rem;
    }
`

const HeaderGreeting = styled.h2`
    font-size: 1.1rem;
    font-weight: normal;
    margin-bottom: 3px;

    @media screen and (min-width: 1024px) {
        font-size: 1.4rem;
    }
`

const HeaderDate = styled.p`
    font-size: 0.9rem;

    @media screen and (min-width: 1024px) {
        font-size: 1rem;
    }
`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2rem;
`

const TaskFilterButton = styled.button`
    appearance: none;
    border: none;
    padding: 5px;
    border-radius: 10px;
    font-size: 0.9rem;
    margin: 0;
    background: transparent;
    color: white;
    font-family: "Poppins", sans-serif;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    @media screen and (min-width: 1024px) {
        font-size: 1.1rem;
    }
`

const Header = (props) => {
    const {
        allTasks,
        setAllTasks,
        uncompletedTasks,
        setUncompletedTasks,
        completedTasks,
        setCompletedTasks
    } = props

    const taskList = useSelector((state) => state.taskitems.taskitems)
    const finishedTasks = taskList.filter(task => task.complete === true)
    const userName = useSelector((state) => state.taskitems.username)

    const showAllTasks = () => {
        setCompletedTasks(false)
        setUncompletedTasks(false)
        setAllTasks(true)
    }

    const showUncompletedTasks = () => {
        setAllTasks(false)
        setCompletedTasks(false)
        setUncompletedTasks(true)
    }

    const showCompletedTasks = () => {
        setAllTasks(false)
        setUncompletedTasks(false)
        setCompletedTasks(true)
    }

    const date = new Date()
    let time = date.getHours()

    const showGreeting = () => {
        if (time>=6 && time<12) {
            return "Good morning"
        } else if (time>=12 && time<18) {
            return "Good afternoon"
        } else if (time>=18 && time<24) {
            return "Good evening"
        } else {
            return "Good night"
        }
    }

    return (
        <StyledHeader>
            <HeaderDetails>
                <HeaderTitle>My To Dos</HeaderTitle>
                <CurrentTasks>{finishedTasks && finishedTasks === 0 ? "0"
                : finishedTasks.length} / {taskList.length} &nbsp; tasks completed</CurrentTasks>
            </HeaderDetails>

            <HeaderGreeting>{showGreeting()} {userName}!</HeaderGreeting>
            <HeaderDate>It's <Moment date={date} format="MMMM Do YYYY">{date}</Moment></HeaderDate>
           
            <ButtonContainer>
                <TaskFilterButton
                active={allTasks}
                onClick={() => showAllTasks()}>
                    All tasks
                </TaskFilterButton>
                <TaskFilterButton
                active={uncompletedTasks}
                onClick={() => showUncompletedTasks()}>
                    Uncompleted
                </TaskFilterButton>
                <TaskFilterButton
                active={completedTasks}
                onClick={() => showCompletedTasks()}>
                    Completed
                </TaskFilterButton>
            </ButtonContainer>
        </StyledHeader>

    )

}

export default Header
