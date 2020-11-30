import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import moment from 'moment'

import { todos } from '../reducers/todos' 

export const TodoList = () => {
  const dispatch = useDispatch();
  
  const items = useSelector(store => store.todos.items);

  const onClickDelete = id => {
    dispatch(todos.actions.removeItem(id))
  }
  
  return (
    <>
            {items.map(item => (
        <TodoContainer key={items.id}>
          <List>
      <label>
          <input type="checkbox"
          /* checked={item.complete}
          onChange={onChecked} */
          />
      </label>
  </List>
          <TodoText>{item.text}</TodoText>
            <TimeStamp>(added {moment(item.date).format("MMM Do HH:mm")})</TimeStamp>
              <DeleteButton type="button" onClick={() => onClickDelete(item.id)}>
                <RemoveText>X</RemoveText>
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
margin: 0 10px 0 10px;
`

const TimeStamp = styled.text`
font-size: 10px;
color: #F4F4F4;
font-style: italic; 
`

const RemoveText = styled.text`
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

