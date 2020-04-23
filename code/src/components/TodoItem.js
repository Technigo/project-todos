import React from 'react'
import { todos } from '../reducers/todos.js'
import { useSelector, useDispatch } from 'react-redux'
// import { TimeStamp } from './TimeStamp'
import { todoItem } from './todoItem.css'
import styled from 'styled-components/macro'
import { CustomCheckbox } from 'lib/CustomCheckbox'

export const TodoItem = ({ itemIndex }) => {
  // Get the item from the store based on the index
  const item = useSelector(store => store.todos.list.items[itemIndex])

  const dispatch = useDispatch()

  // Create the onRemoveClicked handler
  const onRemoveClicked = event => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex
      })
    )
  }

  // Create the onChange handler for handling the done status
  const handleOnChange = event => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done
      }))
  }

  return (
    <ItemSection>
      <CustomCheckbox
        isChecked={item.done ? "checked" : ""}
        onChangeHandler={handleOnChange} />
      <div className={`todo-item ${item.done ? "done" : ""}`}>
        <span className='todo-item-description'>{item.description}</span>
        <button className='todo-item-remove' onClick={onRemoveClicked}>x</button>
      </div>
      {/* <TimeStamp /> */}
    </ItemSection>
  )
}

const ItemSection = styled.section`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`