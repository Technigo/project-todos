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
<section>
{todoList.map((todoItem, todoIndex) => (
<div key={todoItem.id}>
<h2>{todoItem.task}</h2>
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
</div>
))}
</section>
);
};

export default ToDoList;