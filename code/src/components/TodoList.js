import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const BigStyle = styled.div`
  color: hotpink;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
`;

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodoMutability = (index) => {
    dispatch(todos.actions.deleteTodo(index));
  };

  const date = new Date();
  const todaysDate = date.toString().slice(0, 10);

  return (
    <BigStyle>
      {items.map((item, index) => (
        <div className="flex-item" key={item.id}>
          <input
            type="checkbox"
            checked={item.isComplete}
            onChange={() => onToggleTodo(item.id)}
          />
          <p>{item.text}</p>
          <button onClick={() => onDeleteTodoMutability(index)}>Delete</button>
          <p>Posted: {todaysDate}</p>
        </div>
      ))}
    </BigStyle>
  );
};

export default TodoList;
