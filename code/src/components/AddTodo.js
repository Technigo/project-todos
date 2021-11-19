import React, { useState } from "react"
import styled from "styled-components"
import { useDispatch } from "react-redux"

import todos from "../reducers/todos"

const AddTodoBody = styled.div`
    padding: 10px;
`
const AddTodoContainer = styled.div`
    display: flex;
    justify-items: center;
    justify-content: center;
`
const AddTodoInput = styled.input`
    height: 40px;
    width: 250px;
    margin-bottom: 3px;
    padding-left: 10px;
    border-radius: 20px 0 0 20px;
    border: none;
    @media (max-width: 450px) {
        width: 130px;
        height: 26px;
    }
`
const AddTodoButton = styled.button`
    height: 42px;
    border: none;
    padding: 0 10px 0 10px;
    color: #422117;
    border-left: 1px solid lightgrey;
    border-radius: 0 20px 20px 0;
    background-color: white;
    font-family: 'Source Code Pro', monospace;
    font-size: 1.1rem;
    font-weight: 600;
    @media (max-width: 450px) {
        height: 28px;
        font-size: 0.8rem;
    }
    &:disabled{
        color: lightgrey;
    }
    &:hover{
        transform: scale(1.05)
    }
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
    @media (max-width: 450px) {
        padding: 3px 6px;
        font-size: 0.7rem;
    }
    &:hover{
        transform: scale(1.05)
    }
`
const ClearAllButton = styled.button`
    border: none;
    border-radius: 10px;
    background-color: #F1C8D5;
    margin: 30px 0 0 20px;
    padding: 10px 15px;
    font-family: 'Source Code Pro', monospace;
    font-weight: 600;
    @media (max-width: 450px) {
        padding: 3px 6px;
        font-size: 0.7rem;
    }
    &:hover{
        transform: scale(1.05)
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
        <AddTodoBody>
            <AddTodoContainer>
                <AddTodoInput type="text" value={input} onChange={(event) => setInput(event.target.value)} onKeyDown={(event) => checkKey(event)}/>
                <AddTodoButton onClick={onAddTodo} disabled={input.length >= 100 || input.length <= 2}>Add Todo</AddTodoButton>
            </AddTodoContainer>
            <AllButtonsDiv>
                <CheckAllButton onClick={onCheckAll}>Check All</CheckAllButton>
                <ClearAllButton onClick={() => {dispatch(todos.actions.clear())}}>Clear All</ClearAllButton>
            </AllButtonsDiv>
        </AddTodoBody>
    )
}

export default AddTodo