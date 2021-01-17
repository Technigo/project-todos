import React from 'react'
import moment from 'moment'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { todos } from '../reducers/todos' 

export const TodoList = () => {
  const dispatch = useDispatch();
  
  const items = useSelector(store => store.todos.items);

  const onClickDelete = id => {
    dispatch(todos.actions.removeItem(id))
  }

  const onChecked = id => {
    dispatch(todos.actions.toggleComplete(id))
  }
  
  return (
    <>
      {items.map(item => (
        <TodoContainer key={item.id}>
          <List>
            <label>
            <input type="checkbox"
            checked={item.complete}
            onChange={() => onChecked(item.id)}
            />
            </label>
          </List>

          <TodoText>{item.text}</TodoText>
            <TimeStamp>Added: {moment(item.date).format("MMM Do, YYYY")}</TimeStamp>
              <DeleteButton type="button" onClick={() => onClickDelete(item.id)}>
                <DeleteIcon>X</DeleteIcon>
              </DeleteButton> 
        </TodoContainer> 
      ))}
    </>    
  )
}

const TodoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
  padding-top: 5px;
  padding-bottom: 5px;
`

const List = styled.li`
  list-style-type: none;
`

const TodoText = styled.div`
  font-size: 20px;
  margin: 0 10px 0 10px;
`

const TimeStamp = styled.p`
  font-size: 12px;
  color: #F4F4F4;
`

const DeleteIcon = styled.span`
  font-size: 10px;
  font-weight: bold;
  color: #fff;
  background-color: rgba(193, 146, 146, 0.892);
`

const DeleteButton = styled.button`
  background-color: rgba(193, 146, 146, 0.892);
  border-radius: 10%;
  border: none;
  margin-left: 10px;
`

