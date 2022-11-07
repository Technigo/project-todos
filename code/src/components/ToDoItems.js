/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect } from 'react';
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
  const dispatch = useDispatch();
  const toDoList = useSelector((store) => store.toDos.items);
  // For local storage
  useEffect(() => {
    const listFromStorage = JSON.parse(localStorage.getItem('toDoList'))
    if (listFromStorage) {
      dispatch(toDos.actions.locallyStoreItems(listFromStorage))
    }
  }, [dispatch])

  const onCompletedClick = (id) => {
    dispatch(toDos.actions.toggleCompleted(id))
  }

  const onDeleteClick = (id) => {
    dispatch(toDos.actions.deleteTask(id))
  }

  const entireList = toDoList.map((item) => {
    return (
      <ToDoItem
        style={{ backgroundColor: item.isCompleted ? '#7ce17c' : '#e17c7c' }}
        key={item.id}>
        <DeleteButton aria-label={`Delete task ${item.content}`} type="button" onClick={() => onDeleteClick(item.id)}>
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
              aria-label={`Toggle task ${item.content} completion`}
              onChange={() => onCompletedClick(item.id)} />
            <Checkmark className="checkmark"> </Checkmark>
          </label>
          <ItemContentContainer>
            <p aria-label={item.content}>{item.content}</p>
          </ItemContentContainer>
        </ContentWrapper>
      </ToDoItem>
    )
  })
  useEffect(() => {
    localStorage.setItem('toDoList', JSON.stringify(toDoList))
  }, [toDoList])
  return entireList;
}

export default ToDoItems;

const ItemContentContainer = styled.div`
  line-height:1;
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