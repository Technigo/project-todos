import React from "react";
import { useSelector, useDispatch } from "react-redux";
import todos from "../reducers/todos";

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  const onToggleToDo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (index) => {
    dispatch(todos.actions.deleteTodo(index));
  };

  return (
    <section>
      {items.map((item, index) => (
        <div className="todo-item" key={item.id}>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleToDo(item.id)}
          />
          <p>{item.text}</p>
          <button onClick={() => onDeleteTodo(index)}>Delete</button>
        </div>
      ))}
    </section>
  );
};

export default TodoList;
