import React, { useState } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"

import todos from "../reducers/todos"

const AddTodoContainer = styled.div`
    padding: 20px;
`

const AddTodoButton = styled.button`
    padding: 10px 20px;
    border: none;
    font-size: 1.1rem;
    border-radius: 0 20px 20px 0;
    background-color: lightgreen;
`
const CheckAllButton = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #0072FF;
    margin: 20px 20px 0 0;
    padding: 10px 15px;
`
const ClearAllButton = styled.button`
    border: none;
    border-radius: 10px;
    background-color: lightpink;
    margin: 20px 0 0 20px;
    padding: 10px 15px;
`
const AddTodoInput = styled.input`
    height: 36px;
    width: 250px;
    border-radius: 20px 0 0 20px;
    border: 1px solid lightgreen;
`

const AddTodo = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input))
        setInput('')
    }

    const checkKey = (event) => {
        if (event.keyCode === 13 && !event.shiftKey) {
            onAddTodo(event)
        }
    }

    return (
        <AddTodoContainer>
            <div>
                <AddTodoInput type="text" value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => checkKey(event)}/>
                <AddTodoButton onClick={onAddTodo}>Add Todo</AddTodoButton>
            </div>
            <CheckAllButton>Check All</CheckAllButton>
            <ClearAllButton onClick={() => {dispatch(todos.actions.clear())}}>Clear All</ClearAllButton>
        </AddTodoContainer>
    )
}

export default AddTodo