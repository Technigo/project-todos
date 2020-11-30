import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { Header } from './Header'
import { AddNewTodo } from './AddNewTodo'
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
          <TodoItem>{item.text}</TodoItem>
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
padding: 10px;
`

const TodoItem = styled.div`
margin: 0 10px 0 10px;
`

const List = styled.li`
list-style-type: none;
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
`