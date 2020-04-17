import React, { useState } from "react"
import Moment from 'react-moment'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import styled from 'styled-components'

const InputForm = styled.form`
   width: 100%;
   border-bottom: 3px solid #f0f0f0;
   padding: 16px;  
   display: flex;
   align-items: center;
   background-color: #FCFCFC;
`

const TextInput = styled.input`
font-size: 20px;
width: 100%;
line-height: 28px;
background-color: transparent;
border: none;
color: #a3a3a3;
`
const PostButton = styled.button`
background: white;
padding: 0 10px 8px 10px;
border-radius: 8px;
color: #d0c9d6;
font-size: 30px;
border: none;
margin-right: 8px;
`

export const AddToDo = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState()

    const handleSumbmit = (event) => {
        event.preventDefault()
        dispatch(
            todos.actions.addTodo({ itemInfo: { description: inputValue, done: false, created: <Moment fromNow>{Date.now()}</Moment> } })
        )
        setInputValue('')
    }

    return (
        <InputForm onSubmit={(event) => handleSumbmit(event)}>
            <PostButton type="submit">+</PostButton>
            <TextInput value={inputValue} type="text" placeholder="Add task" onChange={(event) => setInputValue(event.target.value)} />
        </InputForm>
    )
}