import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "reducers/todos";

const Deletebutton = styled.button `
decoration:none;
background:none;
border:none;
padding: 8px;
border-radius:2px;
font-family: 'Open Sans', sans-serif;
position:absolute;
top: 10px;
right: 10px;
`

const CheckBox = styled.input`
position:absolute;
top: 10px;
left: 10px;
`

const Taskcontainer = styled.section `
margin:20px;
padding:10px;
`
const Taskbox = styled.div`
position:relative
`

const Task =styled.h2 `
font-family: 'Alata',sans-serif;
font-size: 25px;

`


const ToDoList = ( { list, completed, uncompleted} ) => {
const todoList = useSelector((store) => store.todos.items);
const completedTasks = todoList.filter((todos) => todos.completed === true);
const uncompletedTasks = todoList.filter((todos) => todos.uncompleted === false);

const dispatch = useDispatch();

const onToDoToggle = (todoId) => {
dispatch(todos.actions.toggleItem(todoId));
};

const onToDoDelete = (index) => {
    dispatch(todos.actions.deleteItem(index));
};

return (
<Taskcontainer>
    <div>
        {completedTasks.length} / {todoList.length}
        <span>tasks completed</span>
    </div>



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
    ✖️
        </span>
</Deletebutton>
</Taskbox>
))}
<div> Done: &nbsp; {todoList.length}</div>
</Taskcontainer>
);
};

export default ToDoList;