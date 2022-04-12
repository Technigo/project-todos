import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from 'styled-components';

import todos from "../reducers/todos.js";

const TodoAdd = () => {

    const dispatch = useDispatch();
    
    const onClickAddNewTodo = () => {
        console.log('clicked add todo');
    }

    const AddNewTodoContainer = styled.div `
        border-bottom: 5px solid #000;
        padding: 0 0 20px 0;
    `

    const Label = styled.label `
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1rem;
    `

    const InputContainer = styled.div `
        display: flex;
        flex-direction: column;
        margin:0 0 10px 0;
    `

    const AddNewTodoButton = styled.button `
        border: 2px solid #000;
        background-color: #40e0d0;
        padding: 8px 10px;
        font-weight: 600;
        text-transform: uppercase;
        box-shadow: 3px 3px 4px;

        &:hover {
            background-color: #f05cb5;
            cursor: pointer;
            box-shadow: 1px 1px 1px;
        }
    `

    const AddTodoTitle = styled.input `
        border: 2px solid #000;   
        padding: 5px; 
    `

    const AddTodoText = styled.textarea `
        border: 2px solid #000;    
        height: 100px;
        padding: 5px; 
    `
    


    return (
        <AddNewTodoContainer className="container">
            <InputContainer>
                <Label htmlFor="title">
                    Title
                </Label>
                <AddTodoTitle 
                    type="text"
                    id="title" 
                />
            </InputContainer>
            <InputContainer>
                <Label for="what">
                    What to do?
                </Label>
                <AddTodoText
                    id="what" 
                />
            </InputContainer>
            <AddNewTodoButton
                type="submit"
                onClick={() => onClickAddNewTodo()}>
                Add new todo
            </AddNewTodoButton>
        </AddNewTodoContainer>
    );
}

export default TodoAdd;