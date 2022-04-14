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
`

const Taskcontainer = styled.section `
margin:20px;
padding:10px;
`
const Taskbox = styled.div`
background-color: #a24b56;
margin: 5px;
border-radius: 5px;
`

const Task =styled.h2 `
font-family: 'Covered By Your Grace', cursive;
font-size: 50px;
transform: rotate(-15deg);

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
<label>
    Is completed:
    <input 
    type="checkbox" 
    checked={todoItem.isComplete}
    onChange={() => onToDoToggle(todoItem.id)}
    />
</label>

<Deletebutton onClick={() => onToDoDelete(todoIndex)}>
    <span role="img" aria-label="delete">
    DELETE
        </span>
</Deletebutton>
</Taskbox>
))}
</Taskcontainer>
);
};

export default ToDoList;