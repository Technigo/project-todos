import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const CounterText = styled.p `
display:flex;
justify-content: center;
align-text: center;
`

const TodoCounter = () => {
    const allTodos = useSelector((state) => state.tasks.taskList)
    const completedTodos = allTodos.filter((taskList) => taskList.isChecked === true)

    if (allTodos.length !== completedTodos.length){
        return(
            <CounterText>You have completed {completedTodos.length}/{allTodos.length} todos</CounterText>
        )
    } else {
        return (
            <CounterText>Noting to do right now</CounterText>
        )
    }
}

export default TodoCounter