import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'

export const ToDoInput = () => {

    const AddTodoContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 20px;
    padding-bottom: 20px;
    background-color:  #F4F4F4;
    border-top: #baa8a8 solid 2px;
    `

    const AddTodoButton = styled.button`
    background-color: #F4F4F4;
    width: 50px;
    border: none;
    `

    const dispatch = useDispatch()
    const [newTodo, setNewTodo] = useState('')

    const onSubmit = event => {
        event.preventDefault()
        dispatch(todos.actions.addTodo(newTodo))   
    }

    return(
        <AddTodoContainer>
            <input type="text"
            onChange={event => setNewTodo(event.target.value)}
            value={newTodo}
            placeholder="Add new todo..."
            required
            />
            <AddTodoButton type="submit"
            onClick={onSubmit}
            disabled={ newTodo.length < 5 }> ➕ </AddTodoButton>
        </AddTodoContainer>
    )
}