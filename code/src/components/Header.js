import React from "react"
import { useSelector } from "react-redux"
import Moment from "react-moment"

import {
    StyledHeader,
    HeaderDetails,
    HeaderTitle,
    CurrentTasks,
    HeaderGreeting,
    HeaderDate,
    ButtonContainer,
    TaskFilterButton } from "styles/StylesForComponents"

    
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
