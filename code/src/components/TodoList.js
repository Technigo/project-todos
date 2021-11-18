import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

import todos from "../reducers/todos";

const TodosContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 5px;
  padding-left: 15px;
  margin: 10px;
  background-color: #fffbfb90;
  border-radius: 10px;
`;

const TodoWrapper = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background-color: #8fbfd7;
  margin-bottom: 10px;
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
  border: 1px solid #337b9e;
  border-radius: 50px;
  outline: none;
  transition-duration: 0.3s;
  background-color: #3b8cb4;
  cursor: pointer;
  margin: 0;
`;

const DeleteButton = styled.button`
  background-color: #3b8cb4;
  border: 1px solid #337b9e;
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
            <DeleteButton onClick={() => onDeleteTodo(item.id)}>
              <span
                className="delete-emoji"
                role="img"
                aria-label="delete-emoji"
              >
                ➖
              </span>
            </DeleteButton>
          </TodoWrapper>
        ))}
        {/* <p>You have {items.length.isComplete} completed tasks</p> */}
      </TodosContainer>
    </>
  );
};

export default TodoList;
