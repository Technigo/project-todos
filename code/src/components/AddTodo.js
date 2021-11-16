import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
//import the slice itself for dispatch
import todos from "reducers/todos";

const StyledForm = styled.form`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 15px;
    height: 30px;
    margin: 0;
    width: 90%;
    background-color: whitesmoke;
`
const StyledInput = styled.input`
    width: 60%;
    height: 20px;
    padding: 10px;
    font-size: 18px;
    border: 1px solid grey;
`
const StyledButton = styled.button`
    width: 80px;
    height: 40px;
    padding: 10px;
    font-size: 15px;
    color: white;
    background-color: #768eb0;
    border: none;
`

const AddTodo = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()
    const onAddTodo = (event, input) => {
        dispatch(todos.actions.addTodo(input))
        event.preventDefault()
        setInput('')
    }

    return (
        <StyledForm>
            <StyledInput
                placeholder="add new task"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />
            <StyledButton
                onClick={(event) => onAddTodo(event, input)}
                disabled={input < 3}>
                add task
            </StyledButton>
        </StyledForm>
    )
}

export default AddTodo