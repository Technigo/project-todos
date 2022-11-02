/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/toDos';
import styled from 'styled-components';
import TodoInput from './TodoInput';

const ToDoList = () => {
  const toDoList = useSelector((store) => store.toDos.items);
  const dispatch = useDispatch();

  const onCompletedClick = (id) => {
    dispatch(toDos.actions.toggleCompleted(id))
  }

  const onDeleteClick = (id) => {
    dispatch(toDos.actions.deleteTask(id))
  }

  const entireList = toDoList.map((item) => {
    return (
      <ToDoItem key={item.id}>
        <label>
          <input
            type="checkbox"
            checked={item.isCompleted}
            onChange={() => onCompletedClick(item.id)} />
        </label>
        <p>{item.content}</p>
        <DeleteButton type="button" onClick={() => onDeleteClick(item.id)}><span /></DeleteButton>
      </ToDoItem>
    )
  })
  console.log('hela listan', toDoList)
  return (
    <ToDoListWrapper>
      <TodoInput />
      {entireList}
    </ToDoListWrapper>

  )
}

export default ToDoList;

const ToDoItem = styled.div`
  display: flex;
  color: #fff;
  margin: 0.5rem 0;
  
  
  p {
    padding-top: 0.1rem;
    text-transform: uppercase;
  }
  
  input[type="checkbox"]{
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 1rem;
  }
`

const ToDoListWrapper = styled.main`
  border: 0.5rem solid red;
  border-radius: 1rem;
  min-height: 80vh;
  width: 90vw;
  padding: 2rem;
`

const DeleteButton = styled.button`
  width: 2rem;
  background-color: transparent;
  font-size: 50px;
  vertical-align: top;
  border: none;
  
  span{
    border: 2px solid plum;
    background-color: plum;
    display: block;
    height: 0.3rem;
    width: 1rem;
    margin: auto;
  }
`