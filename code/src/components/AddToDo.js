import React, { useState } from "react"
import { useDispatch } from "react-redux"
import styled from "styled-components/macro"

import todos from '../reducers/todos'

const Container = styled.div `
display: flex;
flex-direction: row;
width: 100%;
height: 50px;
cursor:pointer;
margin-bottom: 15px;`

const AddTodoButton = styled.button `
margin-left: 10px;
border-radius: 10px;
border: none;
width: 20%;
justify-content: flex-end;
background: #379683;
`

const TodoInput = styled.input`
border: 5px;
width: 80%;
font-size: 16px;
margin-left: 30px;
border-radius: 10px;
background-color: #edf5e1; 
`
const AddToDo = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch ()

    //function to invoke the reducer to add a todo
    const onAddToDo = () => {
        dispatch(todos.actions.addTodo(input))
    }

    return (
        <Container>
            <TodoInput 
                type="text" 
                value={input} 
                onChange={event => setInput(event.target.value)}
                />
            <AddTodoButton onClick={onAddToDo}>
                Add todo
            </AddTodoButton>
        </Container>
    )
}

export default AddToDo