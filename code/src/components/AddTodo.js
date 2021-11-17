import React, { useState } from "react"
import { useDispatch } from "react-redux"
import todos from "../reducers/todos"
import styled from "styled-components";

const StyledForm = styled.form`
    display: flex;
    width: 90vw;
    position: absolute;
    top: 18vh;
    left: 5vw;
`;

const StyledInput = styled.input`
cursor: default;
    flex-grow: 2;
    height: 35px;
    font-family: 'Spartan', sans-serif;
    color: #FFA4B3;
    background-color: #B34D75c0;
    border: none;
    border-radius: 5px 0 0 5px;
        ::placeholder {
        color: #FFA4B3;
        }
        :focus {
        outline: none;   
        }
`;

const StyledButton = styled.button`
    height: 37px;
    border: none;
    background-color: #B34D75c0;
    border-radius: 0 5px 5px 0;
    font-size: 30px;
    color: #FFA4B3;
    cursor: pointer;
`;

const AddTodo = () => {
    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const onAddTodo = (event) => {
        event.preventDefault()
        dispatch(todos.actions.addTodo(input))
    }

    return (
        <StyledForm>
            <StyledInput
                placeholder="Add Task"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)} />
                <StyledButton onClick={onAddTodo}>+</StyledButton>
        </StyledForm>
    )
}

export default AddTodo