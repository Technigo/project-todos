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
import pin from '../assets/images/pin6.png'

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
    // <a href="https://www.flaticon.com/free-icons/thumb-tack" title="thumb tack icons">Thumb tack icons created by popo2021 - Flaticon</a>
    return (
      <ToDoItem key={item.id}>
        <Pin src={pin} alt="pin" />
        <TaskInteraction>
          <label>
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => onCompletedClick(item.id)} />
            <Checkmark className="checkmark"> </Checkmark>
          </label>
          <DeleteButton type="button" onClick={() => onDeleteClick(item.id)}><span /></DeleteButton>
        </TaskInteraction>
        <ContentWrapper>
          <p>{item.content}</p>
        </ContentWrapper>
      </ToDoItem>
    )
  })
  console.log('hela listan', toDoList)
  return (
    <ToDoListWrapper>
      <ListHeading>
        To do!
      </ListHeading>
      <TodoInput />
      <CompletedCounter />
      <TaskWrapper>
        {entireList}
      </TaskWrapper>
    </ToDoListWrapper>

  )
}

export default ToDoList;

const Pin = styled.img`
  width: 1rem;
  position: absolute;
  left: 48%;
  top: -0.45rem;
  rotate: -15deg;
  z-index: 1;
`

const ContentWrapper = styled.div`
  display: inline-block;
  word-wrap: break-word;
  p {
    font-family: 'Caveat', cursive;
  }
`

const TaskWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  overflow-y: scroll;
  position: relative;
  
`
const Checkmark = styled.div`
  display: block;
  width: inherit;
  height: inherit;
  border: 0.2rem solid #000;
  border-radius: 0.5rem;
  transition: all .3s;
`

const TaskInteraction = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;

  label {
    display: block;
    height: 1.5em;
    width: 1.5em;
    cursor: pointer;
    position: relative;
  }
  
  input[type="checkbox"]{
    height: 1.5rem;
    width: 1.5rem;

    position: absolute;
    transform: scale(0);

  &:checked ~ .checkmark {
  transform: rotate(45deg);
  height: 1.5em;
  width: .6em;
  border-color: #000;
  border-top-color: transparent;
  border-left-color: transparent;
  border-radius: 0;
  left: .3rem;
  top: -0.2rem;
  position: absolute;
  }
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

const ToDoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  word-wrap: break-word;
  width: 45%;
  min-height: 4rem;
  background-color: #d8dbe7;
  position: relative;
  padding: 0.3rem;
  box-shadow: 0.2rem 0.2rem 0.2rem;
  margin: 0.4rem;
  overflow: visible;

  @media (min-width: 600px) {
    width: 30%;
  }

  @media (min-width: 1024px) {
    width: 20%;
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

const DeleteButton = styled.button`
  width: 2rem;
  background-color: transparent;
  border: none;
  position: relative;
  
  span {
    position: absolute;
    width: 1rem;
    height: .1rem;
    border: 2px solid black;
    border-radius:0.1rem;
    top: 0.7rem;
    right: 0.2rem;
  }
  
`