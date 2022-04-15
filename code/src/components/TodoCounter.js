import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const devices = {
    mobile: '(min-width: 375px)',
    tablet: '(min-width: 768px)',
    desktop: '(min-width: 1024px)'
}

const CounterUncompleted = styled.p`
text-align: center;
font-weight: 500;
font-size: 18px;
padding: 8px;
margin: 10px;

@media ${devices.tablet} {
    font-size: 20px;
}

@media ${devices.tablet} {
    font-size: 24px;
}
`
const CounterFinished = styled.p`
text-align: center;
font-weight: 500;
font-size: 18px;
margin: 10px;

@media ${devices.tablet} {
    font-size: 20px;
}

@media ${devices.tablet} {
    font-size: 24px;
}
`

const FinishedText = styled.p`
padding: 10px;
`

const TodoCounter = () => {
    const allTodos = useSelector((state) => state.tasks.taskList)
    const completedTodos = allTodos.filter((taskList) => taskList.isChecked === true)

    if (allTodos.length !== completedTodos.length){
        return(
            <CounterUncompleted>You have completed {completedTodos.length}/{allTodos.length} todos</CounterUncompleted>
        )
    } else {
        return(
            <CounterFinished >
                <FinishedText>Hurray you finished all todos</FinishedText> 
                <FinishedText>time to relax<span role='img' aria-label='ballon'>🎈</span></FinishedText> 
                <FinishedText>( ... or add something new to do)</FinishedText> 
            </CounterFinished >
        )
    }
}

export default TodoCounter


//todoList stores all tasks
//completedTodos stores all checked todos