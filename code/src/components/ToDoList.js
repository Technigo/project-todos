import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "../reducers/todos";

export const ToDoList = () => {
  const tasks = useSelector((store) => store.todos.tasks)
  const dispatch = useDispatch();

//   const wholeStore = useSelector((store) => store)
//   console.log(wholeStore)

  return (
    <>
      {tasks.map(todo => (
        <div key={todo.id}>
          <p>{todo.task}</p>
          <input 
            type="checkbox" 
            checked={todo.isComplete}
            onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
          />
        </div>
      ))}
    </>
  )
};