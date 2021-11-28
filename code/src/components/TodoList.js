import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import todos from "../reducers/todos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const TodoListContainer = styled.section`
  height: 50vh;
  border-radius: 5px 20px 5px;
  border: 2px solid white;
  margin: 0 20px;
  overflow: scroll;
  -ms-overflow-style: none;
  overflow-x: hidden;
  width: 90%;

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

const TodoListText = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 25ch;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: white;
`;

const CheckboxButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Checkbox = styled.input`
  &:hover {
    cursor: pointer;
  }
`;

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  const dispatch = useDispatch();

  const deleteIcon = <FontAwesomeIcon icon={faTrashAlt} />;

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
          <TodoListText>{item.text}</TodoListText>
          <CheckboxButtonWrapper>
            <Checkbox
              type="checkbox"
              checked={item.isComplete}
              onChange={() => onToggleTodo(item.id)}
            />
            <DeleteButton onClick={() => onDeleteTodo(item.id)}>
              {deleteIcon}
            </DeleteButton>
          </CheckboxButtonWrapper>
        </TodoItemContainer>
      ))}
    </TodoListContainer>
  );
};

export default TodoList;
