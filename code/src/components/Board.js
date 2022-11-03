/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-closing-tag-location */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import moment from 'moment';
import styled from 'styled-components';

const ToDoList = () => {
  const items = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch()

  /* Mark task as completed */
  const onToggleTask = (id) => {
    dispatch(tasks.actions.toggleTask(id))
  }

  /* Delete task */
  const onDeleteTask = (id) => {
    dispatch(tasks.actions.deleteTask(id))
  }

  return (
    <section>
      {items.length === 0
    && <EmptyBoard>
      <EmptyText>Empty Board!</EmptyText>
    </EmptyBoard>}
      {items.map((item) => (
        <BoardTasks key={item.id}>
          <CheckboxDiv>
            <BoardCheckbox
              type="checkbox"
              checked={item.complete}
              onChange={() => onToggleTask(item.id)} />
          </CheckboxDiv>
          <BoardText>{item.text}</BoardText>
          <BoardTime>
            <BoardTimeSpan>{moment(item.createdAt).format('h:mma')}</BoardTimeSpan>
            <BoardClearButton onClick={() => onDeleteTask(item.id)}>Clear!</BoardClearButton>
          </BoardTime>
        </BoardTasks>
      ))}
    </section>
  )
}

const EmptyBoard = styled.div`
  padding-top: 10px;
  height: 260px;
`
const EmptyText = styled.p`
  margin-top: 30px;
  color: grey;
`

const BoardTasks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid lightblue; 
    &:nth-child(odd) {
        background: #FDF9F9;
      }
    &:last-child {
        border-radius: 0 0 20px 20px;
        background: #FDF9F9;      
    }
`

const BoardCheckbox = styled.input`
  width: 30px;
  height: 30px;
  margin: 10px 10px 10px 20px;
  filter: grayscale(60%) sepia(10%) brightness(180%);
  @media (max-width: 450px) {
    width: 20px;
    height: 20px;
    margin: 3px 3px 3px 10px;
  }
`

const CheckboxDiv = styled.div`
  padding-right: 10px;
  border-right: 1px solid #F1C8D5;
  @media (max-width: 450px) {
    padding-right: 5px;
  }
`

const BoardText = styled.div`
  padding: 10px;
  max-width: 300px;
  @media (max-width: 450px) {
    font-size: 0.8rem;
  }
`

const BoardTime = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`

const BoardTimeSpan = styled.span`
  color: grey;
  font-size: 0.8rem;
  @media (max-width: 450px) {
    font-size: 0.6rem;
  }
`

const BoardClearButton = styled.button`
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  margin: 10px;
  background-color: #F1C8D5;
  font-weight: 600;
  @media (max-width: 450px) {
    padding: 3px 6px;
    font-size: 0.7rem;
  }
  &:hover{
    transform: scale(1.05)
  }
`
export default ToDoList;