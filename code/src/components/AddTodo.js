import React, { useState } from 'react'
import { useDispatch } from 'react-redux' // in order to trigger an action, need useDispatch and the slice itself
import styled from 'styled-components'

import todos from '../reducers/todos'

//stlying
const AddContainer = styled.div `
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    
`
const Addbutton = styled.button `
    margin: 0;
    border: none;
    width: 20%;`


const TaskInput =styled.input`
    border: none;
`




const AddTodo = () => {
    const [input, setInput] = useState('')// using the local state here to set the input....more convenient than using global state
    const dispatch = useDispatch () // always needed
    
    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input))// This is the function which is invoked when you click the button to add a to-do
    }
    return (
        <AddContainer>
             <Addbutton onClick={onAddTodo}> + </Addbutton> 
            <TaskInput type="text" 
            placeholder="Your task here"
            value={input} 
            onChange ={(event) => setInput(event.target.value)}/>
           
        </AddContainer>
    )
}

export default AddTodo