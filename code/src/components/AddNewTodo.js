import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'

import { todos } from '../reducers/todos'

export const AddNewTodo = () => {
    const dispatch = useDispatch()
    const [newTodo, setNewTodo] = useState('')

    const onSubmit = event => {
        
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
                onClick={() => {
                    onSubmit();
                    setNewTodo(''); /* clears input field after adding a new task */
                }}
                disabled={ newTodo.length < 5 }> 
                <AddText> + </AddText>
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
`

const AddTodoButton = styled.button`
background-color: #F4F4F4;
width: 50px;
border: none;
cursor: pointer;
`

const AddText = styled.text`
font-size: 20px;
font-weight: bold;
`

const Input = styled.input`
background-color: #F4F4F4;
font-family: 'Josefin Sans', sans-serif;
width: 150px;
border: none;
border-bottom: solid 2px #baa8a8;
`