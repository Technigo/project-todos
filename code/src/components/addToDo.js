import React, { useState } from "react";
import { useDispatch } from "react-redux";
import uniqid from "uniqid";
import moment from "moment";
import styled from "styled-components";

import todos from "reducers/todos";
import Emoji from "assets/emoji";

const Date = styled.p`
font-size:20pt;
margin-top: 5px;
margin-bottom:2px;
`

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
margin: 0 30 0 30px;
font-size:30px;
margin-bottom: 0px;
`
const Input = styled.input`
margin-top: 10px;
height: 50px;
width: 300px;
text-decoration: none;
border-radius: 5px;
background-color:#465AFF;
border:none;
font-family: 'Alata', sans-serif;
font-size:18pt;
text-align:center;
`



const InputButton = styled.button `
background: none;
font-family: 'Alata',sans-serif;
font-weight: bolder;
font-size:20pt;
padding: 10px;
border:none;
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

const date = moment().format("MMMM Do YYYY")

return (
    <AddTask onSubmit={onFormSubmit}>
        <Date>{date}</Date>
<TaskLabel>
    <Input
    type="text"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
    placeholder="New TO DO..."
    />
</TaskLabel>
<InputButton type="submit">    <Emoji symbol="➕➕➕"/></InputButton>
</AddTask>
);
};

export default AddToDo;