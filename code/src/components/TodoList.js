import React from "react";
import { useSelector, useDispatch } from "react-redux";
import todos from '../reducers/todos';

// This function is responsible for getting and rendering the tasks to do from the items array from the store
const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch(); // sends the info to the reducers

//input onChange function
  const onToggleTodo = (id) => {
      dispatch(todos.actions.toggleTodo(id))
  }
  //button onClick function
const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id))


}


  return (
    <section>
      {items.map((item, index) => (
        <ul className="list-container" key={item.id}>
          <li>{item.text}</li>
          <input className = "check-btn" type="checkbox" checked={item.isComplete} onChange={() => onToggleTodo(item.id)} />
          <button className="trash-btn" onClick={() => onDeleteTodo(item.id)}>
          <i class="fas fa-trash"> </i>
          </button>
        </ul>
      ))}
    </section>
  );
};
export default TodoList;
