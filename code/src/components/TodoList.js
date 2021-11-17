import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  width: 90%;
  max-width: 300px;
  margin-top: 10px;
`;

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const onToggleTodo = (id) => {
    dispatch(todos.actions.toggleTodo(id));
  };

  const onDeleteTodo = (id) => {
    dispatch(todos.actions.deleteTodo(id));
  };

  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <Wrapper>
            <input
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <p>{item.text}</p>
            <button onClick={() => onDeleteTodo(item.id)}>
              delete
            </button>
          </Wrapper>

          <p>Finish by: {item.date}</p>
        </div>
      ))}
    </>
  );
};

export default TodoList;
