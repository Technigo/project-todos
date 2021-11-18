import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const TodoCard = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewTask = styled.input`
  display: inline-block;
  border: 1 px solid transparent;
  height: 16 px;
  width: 16 px;
  margin-left: -8 px;
  transition: opacity 0.15s cubic-bezier(0.4, 0, 1, 1);
  margin-top: -8 px;
  /* pointer-events: none; */
  /* opacity: 0; */
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
    <TodoCard>
      <div>
        {items.map((item) => (
          <div className="flex-container" key={item.id}>
            <p>{item.text}</p>
            <p>{item.postedTime}</p>
            <div>
              <NewTask
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
            </div>
            <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </TodoCard>
  );
};

export default TodoList;
