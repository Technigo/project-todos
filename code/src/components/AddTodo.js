import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components/macro'
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
    background-color: rgba(245, 245, 245, 0.622);
`
const StyledInput = styled.input`
    width: 60%;
    height: 20px;
    padding: 10px;
    font-size: 18px;
    border: 1px solid grey;
    &::placeholder{
        font-size: 18px;
        font-family: 'Yuji Syuku', serif;
        color: grey;
        text-transform: lowercase;
    }
`
// const StyledButton = styled.button`
//     width: 80px;
//     height: 40px;
//     padding: 5px;
//     font-size: 16px;
//     font-weight: bold;
//     color: white;
//     background-color: #768eb0;
//     border: none;
// `

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
                placeholder="a new task"
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                maxLength="30"
            />
            <button className="button-55"
                onClick={(event) => onAddTodo(event, input)}
                disabled={input < 3}>
                Add task
            </button>
            {/* <button class="button-55" role="button">Button 55</button> */}

        </StyledForm>
    )
}

export default AddTodo