import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'

import { todos } from '../reducers/todos' 

export const TodoList = () => {
  const dispatch = useDispatch();
  
  const items = useSelector(store => store.todos.items);

  const onClickDelete = id => {
    dispatch(todos.actions.removeItem(id))
  }


  
  return (
    <TodoContainer>
            {items.map(item => (
        <div key={items.id}>
          <List>
      <label>
          <input type="checkbox"
          /* checked={item.complete}
          onChange={onChecked} */
          />
      </label>
  </List>
          <div>{item.text}</div>
            <div>{item.complete ? "Complete" : "Not complete"}</div>
            
              <DeleteButton type="button" onClick={() => onClickDelete(item.id)}>
                <RemoveText>Delete</RemoveText>
              </DeleteButton>
        </div>
      ))}
    </TodoContainer> 

    
  )
}

const List = styled.li`
list-style-type: none;
`

const TodoContainer = styled.div`
padding: 5px;
`

const RemoveText = styled.text`
    font-size: 10px;
    color: #fff;
    background-color:  rgb(192, 171, 171);
    border-radius: 10%;
    padding: 2px; 
`

const DeleteButton = styled.button`
    background-color: rgb(228, 220, 220);
    border: none;  
`