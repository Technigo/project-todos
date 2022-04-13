import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "reducers/todos";

const ToDoList = ( ) => {
const todoList = useSelector((store) => store.todos.items);

const dispatch = useDispatch ();

const onToDoToggle = (todoId) => {
dispatch(todos.actions.toggleItem(todoId));
};

return (
<section>
{todoList.map((todoItem) => (
<todoItem key={todoItem.id}>
<h2>{todoItem.task}</h2>
<label>
    Is completed:
    <input 
    type="checkbox" 
    checked={todoItem.isCompleted}
    onChange={() => onToDoToggle(todoItem.id)}
    />
</label>

<button>
    <span role="img" aria-label="delete">
        ❌
        </span>
</button>

</todoItem>
))}

</section>
);
};

export default ToDoList;