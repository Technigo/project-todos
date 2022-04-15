import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

import TodoList from 'components/TodoList'

const CounterUncompleted = styled.p`
text-align: center;
font-weight: 500;
font-size: 24px;
padding: 8px;
margin: 10px;
`
const CounterFinished = styled.p`
text-align: center;
font-weight: 500;
font-size: 24px;
margin: 10px;
`

const FinishedText = styled.p`
padding: 10px;
`

const TodoCounter = () => {
    const allTodos = useSelector((state) => state.tasks.taskList)
    const completedTodos = allTodos.filter((taskList) => taskList.isChecked === true)

    if (allTodos.length !== completedTodos.length){
        return(
            <CounterUncompleted>You have completed {completedTodos.length}/{allTodos.length} todos</CounterUncompleted> &&
            <TodoList/>
        )
    } else{
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