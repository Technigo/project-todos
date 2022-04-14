import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import uniqid from "uniqid";
import styled from "styled-components";

import todos from "reducers/todos";

const AddTask = styled.form`
margin:20px;
display:flex;
flex-direction:column;
align-items:center;
`

const TaskLabel = styled.label`
display:flex;
flex-direction:column;
text-align: center;
padding:10px;
margin: 30px;
font-size:30px;
margin-bottom: 0px;
`
const InputButton = styled.button `
background: none;
font-family: 'Alata',sans-serif;
padding: 10px;
border-color: blue;
color: blue;
width:200px;

`



const AddToDo = () => {
const [inputValue, setInputValue] = useState ("");

const dispatch = useDispatch();

const onFormSubmit = (event) => {
    event.preventDefault();

const newToDo = {
    id: uniqid(),
    task: inputValue,
    isComplete: false,
};

dispatch(todos.actions.addItem(newToDo));

setInputValue("");
};

return (
    <AddTask onSubmit={onFormSubmit}>
<TaskLabel>
    NEW TO DO: &nbsp;
    <input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    />
</TaskLabel>
<InputButton type="submit">ADD TO MY LIST</InputButton>
</AddTask>
);
};

export default AddToDo;