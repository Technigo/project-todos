import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";
import Emoji from "assets/emoji";

const CheckBox = styled.input`
position:absolute;
top: 10px;
left: 10px;
`

const Taskcontainer = styled.section `
margin:20px;
padding:10px;
display:flex;
justify-content:center;
flex-direction:column;
`
const Taskbox = styled.div`
position:relative;
background: #ffaee2;
word-wrap: break-word;
border-radius: 10px;
margin:12px;
`

const Task =styled.h2 `
font-family: 'Alata',sans-serif;
    font-size: 22px;
    margin-left: 15px;
    margin-top: 10px;
    padding-bottom: 10px;
`

const Tasktracker = styled.div`
font-size: 16pt;
text-align: center;
padding: 5px;
`

const Deletebutton = styled.button `
decoration:none;
background:none;
border:none;
padding: 8px;
border-radius:2px;
font-family: 'Open Sans', sans-serif;
font-size:25px;
position:absolute;
top: -3px;
right: 0px;
`

const ToDoList = ( { list, completed, uncompleted} ) => {
const todoList = useSelector((store) => store.todos.items);

const dispatch = useDispatch();

const onToDoToggle = (todoId) => {
dispatch(todos.actions.toggleItem(todoId));
};

const onToDoDelete = (index) => {
    dispatch(todos.actions.deleteItem(index));
};

return (
<Taskcontainer>
<Tasktracker> Tasks on your TO DO: &nbsp; {todoList.length}</Tasktracker>
    
{todoList.map((todoItem, todoIndex) => (
<Taskbox key={todoItem.id}>

<Task>{todoItem.task}</Task>
<CheckBox
    type="checkbox" 
    id={todoItem.id}
    checked={todoItem.isComplete}
    onChange={() => onToDoToggle(todoItem.id)}
    />
<label htmlFor={todoItem.id}>Done?</label>

<Deletebutton onClick={() => onToDoDelete(todoIndex)}>
    <span role="img" aria-label="delete">
    <Emoji symbol="✖️"/>
        </span>
</Deletebutton>
</Taskbox>
))}
</Taskcontainer>
);
};

export default ToDoList;