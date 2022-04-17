import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components';
import uniqid from "uniqid";

import todos from "../reducers/todos.js";

const AddNewTodoContainer = styled.div `
    padding: 0 0 20px 0;
`

const LabelAddNew = styled.label `
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
            background-color: #ffff00;
            cursor: pointer;
            box-shadow: 1px 1px 1px;
        }
`

const AddTodoInput = styled.input `
    border: 2px solid #000;   
    padding: 5px; 
`

const AddTodoText = styled.textarea `
    border: 2px solid #000;    
    height: 100px;
    padding: 5px; 
`


const TodoAdd = () => {

    const [inputTextValue, setInputTextValue] = useState('');
    const [inputTagValue, setInputTagValue] = useState('');

    const dispatch = useDispatch();
    
    const onClickAddNewTodo = (e) => {
        e.preventDefault();

        let tags = [];
        if (inputTagValue.length > 0) { 
            tags = inputTagValue.split(',');

            tags = tags.map(tag => {
                return tag.trim();
              });
        }
        
        const newTodo = {
            id: uniqid(),
            whatToDo: inputTextValue,
            tags: tags,
            isCompleted: false,
            createdAt: Date.now()
        }

        dispatch(todos.actions.addTodo(newTodo));

        setInputTextValue("");
        setInputTagValue("");
    }

    return (
        <AddNewTodoContainer className="container">
            <form onSubmit={onClickAddNewTodo}>
                <InputContainer>
                    <LabelAddNew htmlFor="what">
                        What to do?
                    </LabelAddNew>
                    <AddTodoText
                        id="what" 
                        value={inputTextValue}
                        onChange={(e) => setInputTextValue(e.target.value)}
                    />
                </InputContainer>
                <InputContainer>
                    <LabelAddNew htmlFor="tags">
                        Add tags?
                    </LabelAddNew>
                    <AddTodoInput
                        id="tags"
                        type="text"
                        value={inputTagValue}
                        onChange={(e) => setInputTagValue(e.target.value)} 
                    />
                </InputContainer>
                <AddNewTodoButton
                    type="submit">
                    Add new todo
                </AddNewTodoButton>
            </form>
        </AddNewTodoContainer>
    );
}

export default TodoAdd;