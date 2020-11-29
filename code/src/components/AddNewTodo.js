import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { todos } from '../reducers/todos'

export const AddNewTodo = () => {

    const dispatch = useDispatch()
    const [newTodo, setNewTodo] = useState('')

    const onSubmit = event => {
        event.preventDefault()
        dispatch(todos.actions.addNewTodo(newTodo))   
    } 

    return(
        <AddTodoContainer>
            <Input type="text"
                value={newTodo}
                placeholder="Add new todo..."
                required
                onChange={event => setNewTodo(event.target.value)}
            />

            <AddTodoButton type="submit"
                onClick={onSubmit}
                disabled={ newTodo.length < 5 }> ➕
            </AddTodoButton>
        </AddTodoContainer>
    )
}

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
    cursor: pointer;
`

const Input = styled.input`
width: 150px;
`