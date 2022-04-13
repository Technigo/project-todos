import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "reducers/todos";

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

<button onClick={() => onToDoDelete(todoIndex)}>
    <span role="img" aria-label="delete">
        ❌
        </span>
</button>
</div>
))}
</section>
);
};

export default ToDoList;