import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { todos } from "../reducers/todos"
import styled from 'styled-components'
import { Button } from '../lib/Button'


export const TodoInput = ({ listId }) => {
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const handleOnSumbit = e => {
        e.preventDefault();
 

    dispatch (
        todos.actions.addTodo({
            listId: listId,
            itemInfo: { description: inputValue, done: false }
        })
    );

    setInputValue("");
    };


    return (
        <Form onSubmit={handleOnSumbit}>
            <Input
            type="text"
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            placeholder="Build the new Ikea furniture"
            />
            <Button
            disabled={inputValue === ""}
            >Add todo</Button>

        </Form>

    );

};

const Form = styled.form `
    text-align: center;
    height: 50px;  
`

const Input = styled.input `
    display: inline-block;
    margin-right: 10px;
    width: 275px;
    border: none;
    border-bottom: 1px solid black;
   
`
