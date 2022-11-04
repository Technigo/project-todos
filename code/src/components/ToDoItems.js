/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/toDos';
import styled from 'styled-components';
import pin from '../assets/images/pin6.png'
import {
  ToDoItem,
  Pin,
  TaskInteraction,
  Checkmark,
  TimeStamp,
  DeleteButton,
  ContentWrapper
} from './ToDoItems.Style'

const ToDoItems = () => {
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
        <DeleteButton type="button" onClick={() => onDeleteClick(item.id)}>
          <PinContainer>
            <Pin src={pin} alt="pin" />
            <span>❌</span>
          </PinContainer>
        </DeleteButton>
        <TaskInteraction>
          <TimeStamp>{item.timeStamp}</TimeStamp>
        </TaskInteraction>
        <ContentWrapper>
          <label>
            <input
              type="checkbox"
              checked={item.isCompleted}
              onChange={() => onCompletedClick(item.id)} />
            <Checkmark className="checkmark"> </Checkmark>
          </label>
          <ItemContentContainer>
            <p>{item.content}</p>
          </ItemContentContainer>
        </ContentWrapper>
      </ToDoItem>
    )
  })
  return entireList;
}

export default ToDoItems;

const ItemContentContainer = styled.div`
  overflow-y: scroll;
  height: 3rem;
`

const PinContainer = styled.div`
  position: relative;
  top: -0.4rem;
  font-size: 0.6rem;
  
  @media(min-width: 600px) {
    left: 1.1rem;
    }
  
  span {
    position: absolute;
    top: -0.6rem;
    left: 70%;
    z-index: 2;

    @media(min-width: 1024px) {
    cursor: pointer;
    }
  }
`