/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import todo from 'reducers/todo';
import styled from 'styled-components'

export const TodoList = () => {
  const todoList = useSelector((store) => store.todo.items);
  const dispatch = useDispatch();

  const onTodoToggle = (todoId) => {
    dispatch(todo.actions.toggleItem(todoId));
  };

  const onTodoDelete = (index) => {
    dispatch(todo.actions.deleteItem(index));
  };

  return (
    <section>
      {todoList.map((todoItem, todoIndex) => (
        <TodoItem key={todoItem.id}>
          <h2>{todoItem.name}</h2>
          <label>
          Doing it!
            <CheckBox
              type="checkbox"
              checked={todoItem.done}
              onChange={() => onTodoToggle(todoItem.id)} />
          </label>
          <DeleteButton onClick={() => onTodoDelete(todoIndex)}>
            <span role="img" aria-label="delete">
              ✖️
            </span>
          </DeleteButton>
        </TodoItem>
      ))}
    </section>
  );
};

const TodoItem = styled.article`
border: solid 1px;
border-radius: 6px;
padding: 8px;
max-width: 300px;
position: relative;
font-family: 'Gaegu';
font-size: 16px;
margin-top: 20px;
margin-bottom: 10px;
box-shadow: 5px 5px #000;
 &:hover{
  background-image: linear-gradient(green, blue);
 }`

const CheckBox = styled.input`
position: relative;
height: 16px;
width: 16px;
top: 5px;
border-radius: 5px;
outline: 2px solid #aaa;
cursor: pointer;
`

const DeleteButton = styled.button`
position:absolute;
top:10px;
right: 10px;
background:none;
border:none;
cursor:pointer;
`