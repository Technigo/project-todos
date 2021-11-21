import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import todos from "../reducers/todos";

const TodoListContainer = styled.section`
  height: 50vh;
  border-radius: 5px 20px 5px;
  border: 2px solid white;
  margin: 0 20px;
  overflow: scroll;
  -ms-overflow-style: none;
  overflow-x: hidden;

  @media (min-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
  border-bottom: 1px solid white;
  font-size: 16px;
  color: white;
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
    <TodoListContainer>
      {items.map((item) => (
        <TodoItemContainer key={item.id}>
          <p>{item.text}</p>
          <div>
            <label>
              <input
                type="checkbox"
                checked={item.isComplete}
                onChange={() => onToggleTodo(item.id)}
              />
              <span></span>
            </label>
            <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
          </div>
        </TodoItemContainer>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
