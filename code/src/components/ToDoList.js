import React from 'react';
import styled from 'styled-components/macro';
import CompletedCounter from './CompletedCounter';
import TodoInput from './TodoInput';
import cork from '../assets/images/corkBackground.jpg'
import ToDoItems from './ToDoItems';

const ToDoList = () => {
  return (
    <ToDoListWrapper>
      <ListHeading>
        To do!
      </ListHeading>
      <TodoInput />
      <CompletedCounter />
      <TaskWrapper aria-label="List of tasks">
        <ToDoItems />
      </TaskWrapper>
    </ToDoListWrapper>
  )
}

export default ToDoList;

const TaskWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 47%);
  grid-auto-flow: row;
  gap: 1rem;
  width: 100%;
  overflow-y: scroll;
  position: relative;
  padding: 0.8rem 0 0.2rem 0;
  justify-content: center;
  

  @media (min-width: 600px) {
    grid-template-columns: repeat(3, 30%);
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 20%);
  }
`

const ListHeading = styled.h1`
  color: #fff;
  display: flex;
  justify-self: center;
  font-family: 'Caveat', cursive;
  background-color: #000;
  padding: 0.5rem 1.5rem 0.5rem 1rem;
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
  position: absolute;
  top: 2vh;
  left: 0;
  right: 0;
  width: 90%;
  height: 70vh;
  margin: 0 auto;
  box-shadow: 0.5rem 0.5rem 1rem;
  
  @media (min-width: 600px) {
    height: 70vh;
    width: 80vw;
    top: 3vh;
    
  }
  @media (min-width: 1024px) {
    height: 59vh;
    width: 80vw;
    top: 3vh;
  }

`