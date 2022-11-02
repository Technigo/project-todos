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
        <>
          <BoardTasks key={item.id}>
            <input
              type="checkbox"
              checked={item.complete}
              onChange={() => onToggleTask(item.id)} />
          </BoardTasks><div>{item.text}</div>
          <div>
            <span>{moment(item.createdAt).fromNow()}</span>
            <button onClick={() => onDeleteTask(item.id)}>Clear!</button>
          </div>
        </>
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
      background: rgba(250,235,215,0.85);
  }

  &:last-child {
    border-radius: 0 0 20px 20px;
  }
`

export default ToDoList;