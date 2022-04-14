import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components'
import tasks from 'reducers/tasks'


const HeaderContainer = styled.header`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
height: 8rem;
`
const HeaderSubject = styled.h1`
margin: 15px 0 10px 30px;

 @media (min-width: 678px) {
    margin: 15px 0 10px 60px;
 }
 @media (min-width: 1024px) {
    margin: 15px 0 10px 80px;
 }
`
const HeaderText = styled.p`
margin: 10px 30px;
font-weight: 700;

 @media (min-width: 678px) {
    margin: 15px 0 10px 60px;
 }
 @media (min-width: 1024px) {
    margin: 5px 0 5px 80px;
 }
`
const ButtonClear = styled.button`
font-size: 1rem;
padding: 8px;
margin: 0 30px;
color: white;
font-weight: 700;
background-color: #000;
border: none;
border-radius: 10px;
cursor: pointer;

 @media (min-width: 678px) {
    margin: 15px 0 10px 60px;
 }

 @media (min-width: 1024px) {
    margin: 5px 0 5px 80px;
 }
`

const TaskHeader = () => {
    const taskCounter = useSelector((store) => store.tasks.items.length)
    const completedTasks = useSelector((store) => store.tasks.items.filter((item) => item.complete).length)

    const dispatch = useDispatch()

    return (
        <HeaderContainer>
            <div>
                <HeaderSubject>Todo</HeaderSubject>
                <HeaderText>{moment().format('MMMM Do')}</HeaderText>
            </div>
            <div>
                <HeaderText>{taskCounter === 0 ? '' : `${completedTasks}/${taskCounter} completed`}</HeaderText>
                {taskCounter === 0 ? '' : 
                <ButtonClear onClick={() => dispatch(tasks.actions.removeAll())}>
                Clear tasklist
                </ButtonClear>
                }       
            </div>
        </HeaderContainer>
    )
}

export default TaskHeader
