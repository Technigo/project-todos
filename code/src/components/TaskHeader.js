import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'
import styled from 'styled-components'

import tasks from 'reducers/tasks'


const HeaderContainer = styled.header`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
height: 5rem;
`
const HeaderSubject = styled.h2`
margin: 15px 0 10px 0;
`
const HeaderText = styled.p`
margin: 10px 0;
`
const ButtonClear = styled.button`
font-size: 1rem;
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
                <HeaderText>{taskCounter === 0 ? '' : `${completedTasks}/${taskCounter} tasks completed`}</HeaderText>
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
