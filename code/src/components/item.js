import React from "react"
import { useDispatch } from "react-redux"

import { todos } from "reducer/todos"

import styled from "styled-components"

export const TodoItem = (props) => {
    const dispatch = useDispatch()
    const todoStatus = props.todo.completed
    const handleToggleTodo = () => {
        dispatch(todos.actions.toggleTodo(props.todo.id))
    }
    const handleRemoveTodo = () => {
        dispatch(todos.actions.removeTodo(props.todo.id))
    }

    return (
        <Main>
            <TodoDiv>
                <ToggleTodoButton todoStatus={todoStatus} onClick={handleToggleTodo}/>
                <TodoText todoStatus={todoStatus}>{props.todo.text}</TodoText>
                <RemoveButton onClick={handleRemoveTodo} aria-label="remove">Delete</RemoveButton>
            </TodoDiv>
        </Main>
    )
}

const Main = styled.section`
    width: 100%;
`

const TodoDiv = styled.div``

const ToggleTodoButton = styled.button``

const TodoText = styled.text``

const RemoveButton = styled.button``