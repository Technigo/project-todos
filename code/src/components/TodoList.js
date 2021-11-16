import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const TodosContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid grey;
`;

const TodoWrapper = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  border: 1px solid grey;
  justify-content: space-between;
`;

const CheckboxWrapper = styled.div`
  display: inline-flex;
  cursor: pointer;
  position: relative;
`;

const CheckboxInput = styled.input`
  height: 25px;
  width: 25px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -o-appearance: none;
  appearance: none;
  border: 1px solid black;
  border-radius: 50px;
  outline: none;
  transition-duration: 0.3s;
  background-color: grey;
  cursor: pointer;
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
    <TodosContainer>
      {items.map((item) => (
        <TodoWrapper key={item.id}>
          <CheckboxWrapper>
            <CheckboxInput
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
          </CheckboxWrapper>

          <p>{item.text}</p>
          <button onClick={() => onDeleteTodo(item.id)}>Delete</button>
        </TodoWrapper>
      ))}
    </TodosContainer>
  );
};

export default TodoList;
