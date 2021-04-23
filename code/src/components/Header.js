import React from 'react'
// import { useSelector } from 'react-redux'
// import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const HeaderSection = styled.section`
    background-color: grey;
    margin: 0;
    height: 100px;
    display: flex;
    justify-content: space-between;
`
const LeftWrapper = styled.section`
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const RightWrapper = styled.section`
    margin: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const AppTitle = styled.h1`
    margin: 0px 0px 4px 0px;
    font-size: 25px;
`
const DateTitle = styled.p`
    margin: 0px;
`

export const Header = () => {

    const amountOfTasks = useSelector((store) => store.tasks.taskList.length)

    return (
        <HeaderSection>
            <LeftWrapper>
                <AppTitle>Todo</AppTitle>
                <DateTitle>Date</DateTitle>
           </LeftWrapper>
           <RightWrapper>
                <p>{amountOfTasks} tasks</p>
            </RightWrapper>
        </HeaderSection>
    )
}