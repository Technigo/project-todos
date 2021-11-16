import React from "react";
import { useSelector, useDispatch } from "react-redux";
import todos from '../reducers/todos';

// This function is responsible for getting and rendering the tasks to do from the items array from the store
const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch(); // sends the info to the reducers


  const onToggleTodo = (id) => {
      dispatch(todos.actions.toggleTodo(id))

  }



  return (
    <section>
      {items.map((item) => (
        <div key={item.id}>
          <p>{item.text}</p>
          <input type="checkbox" checked={item.isComplete} onChange={() => onToggleTodo(item.id)} />
        </div>
      ))}
    </section>
  );
};
export default TodoList;
