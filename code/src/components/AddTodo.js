import React, { useState } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"

import todos from "../reducers/todos"

const AddTodoContainer = styled.div`
    padding: 10px;
`
const AddTodoButton = styled.button`
    padding: 10px 20px;
    border: none;
    font-size: 1.1rem;
    border-radius: 0 20px 20px 0;
    background-color: white;
    font-family: 'Source Code Pro', monospace;
    font-weight: 600;
`
const AllButtonsDiv = styled.div`
    display: flex;
    justify-content: space-between;
`
const CheckAllButton = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #0072FF;
    margin: 30px 20px 0 0;
    padding: 10px 15px;
    filter: grayscale(60%) sepia(10%) brightness(180%);
    font-family: 'Source Code Pro', monospace;
    font-weight: 600;
`
const ClearAllButton = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #F1C8D5;
    margin: 30px 0 0 20px;
    padding: 10px 15px;
    font-family: 'Source Code Pro', monospace;
    font-weight: 600;
`
const AddTodoInput = styled.input`
    height: 36px;
    width: 250px;
    border-radius: 20px 0 0 20px;
    @media (max-width: 450px) {
        width: 130px;

    }
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
    
    const onCheckAll = () => {
        dispatch(todos.actions.checkAll())
      }

    return (
        <AddTodoContainer>
            <div>
                <AddTodoInput type="text" value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => checkKey(event)}/>
                <AddTodoButton onClick={onAddTodo}>Add Todo</AddTodoButton>
            </div>
            <AllButtonsDiv>
                <CheckAllButton onClick={onCheckAll}>Check All</CheckAllButton>
                <ClearAllButton onClick={() => {dispatch(todos.actions.clear())}}>Clear All</ClearAllButton>
            </AllButtonsDiv>
        </AddTodoContainer>
    )
}

export default AddTodo