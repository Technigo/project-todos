import React, { useState } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"

import todos from "../reducers/todos"

const AddTodoButton = styled.button`
    padding: 10px 20px;
    border: none;
`
const AddTodoInput = styled.input`
    height: 30px;
`

const AddTodo = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const onAddTodo = () => {
        dispatch(todos.actions.addTodo(input))
        setInput('')
    }

    return (
        <>
            <AddTodoInput type="text" value={input} onChange={(event) => setInput(event.target.value)}/>
            <AddTodoButton onClick={onAddTodo}>Add Todo</AddTodoButton>
        </>
    )
}

export default AddTodo