import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import { useSelector } from 'react-redux'
import { Article } from '../lib/Container'
import styled from 'styled-components'
import moment from 'moment'

export const TodoItem = ({ itemIndex }) => {
  
const item = useSelector(store => store.todos.list.items[itemIndex])
const dispatch = useDispatch()
  //Get the item from the store based on the index
const onRemoveClicked = event => {
  dispatch(
    todos.actions.removeTodo({
      itemIndex: itemIndex
    })
  )
}




  //Create the onChange handler for handling the done status
  const handleOnChange = event => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done
      })
    )
  }

  return (
    <Article className={`todo-item ${item.done ? 'done' : ''}`}>
      
      <div> 
        <label className='container'> 
        <span className='todo-item-description'>{item.description}</span>
          <input type='checkbox'
            onChange={handleOnChange}
            className='todo-item-check'
            checked={item.done ? 'checked' : ''} 
          >
          </input>
          <span className='checkmark'></span>
        </label>
        
      </div> 
      <RemoveAndTime>
      <a className='todo-item-remove' onClick={onRemoveClicked}>🗑</a>
      
      <MomentContainer>{moment(new Date).fromNow()}</MomentContainer>
      </RemoveAndTime>
    </Article>
  )
}

export const MomentContainer = styled.p `
font-size: 12px;
`

export const RemoveAndTime = styled.div `
display: flex;
justify-content: flex-end;
flex-direction: column;
align-items: flex-end;
`