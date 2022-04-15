import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";

const Deletebutton = styled.button `
decoration:none;
border:none;
padding: 8px;
border-radius:2px;
font-family: 'Open Sans', sans-serif;
position:absolute;
top: 10px;
right: 10px;
`

const CheckBox = styled.label`
position:absolute;
top: 10px;
left: 10px;
`

const Taskcontainer = styled.section `
margin:20px;
background-color:blue;
padding:10px;
`
const Taskbox = styled.div`
position:relative
`

const Task =styled.h2 `
font-family: 'Alata',sans-serif;
font-size: 25px;

`


const ToDoList = ( ) => {
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
{todoList.map((todoItem, todoIndex) => (
<Taskbox key={todoItem.id}>
<Task>{todoItem.task}</Task>
<CheckBox>
    <input 
    type="checkbox" 
    checked={todoItem.isComplete}
    onChange={() => onToDoToggle(todoItem.id)}
    />
</CheckBox>

<Deletebutton onClick={() => onToDoDelete(todoIndex)}>
    <span role="img" aria-label="delete">
    REMOVE
        </span>
</Deletebutton>
</Taskbox>
))}
</Taskcontainer>
);
};

export default ToDoList;