/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-undef */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/toDos';
import styled from 'styled-components/macro';
import CompletedCounter from './CompletedCounter';
import TodoInput from './TodoInput';
import cork from '../assets/images/corkBackground.jpg'

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
        <DeleteButton type="button" onClick={() => onDeleteClick(item.id)}><p>❌</p></DeleteButton>
      </ToDoItem>
    )
  })
  console.log('hela listan', toDoList)
  return (
    <ToDoListWrapper>
      <ListHeading>To do!</ListHeading>
      <TodoInput />
      <CompletedCounter />
      <TaskWrapper>
        {entireList}
      </TaskWrapper>
    </ToDoListWrapper>

  )
}

export default ToDoList;

const TaskWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

const ListHeading = styled.h1`
  color: #fff;
  display: flex;
  justify-self: center;
  
  `

const ToDoItem = styled.div`
  display: flex;
  margin: 0.5rem 0;
  width: 45%;
  height: 3rem;
  background-color: #fdfd74;
  justify-content: center;
  align-items: center;
  position: relative;  
  
  label {
    display: flex;
    flex-direction: row-reverse;
    position: absolute;
    top:0;
    left: 0;
  }
  
  p {
    margin-top: 0.3rem;
    text-transform: uppercase;
    justify-self: center;
  }
  
  input[type="checkbox"]{
    height: 1.5rem;
    width: 1.5rem;
    margin-right: 1rem;
    
  }

  button {
    position: absolute;
    top:0;
    right: 0;
  }
`

const ToDoListWrapper = styled.main`
  border: 0.6rem solid black;
  background-image: url(${cork});
  background-size: cover;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  position:absolute;
  top: 2vh;
  left: 0;
  right: 0;
  width: 90%;
  height: 70vh;
  margin: 0 auto;
  
  @media (min-width: 600px) {
    height: 70vh;
    width: 80vw;
    top: 3vh;
    
  }
  @media (min-width: 1024px) {
    height: 57vh;
    width: 80vw;
    top: 3vh;
    
  }

`

const DeleteButton = styled.button`
  width: 2rem;

  border: none;
  position: relative;
  
  p {
    position: absolute;
    font-size: 1.3rem;
    top: -0.3rem;
    right: 0.2rem;
   
  }
  
`