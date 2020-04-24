import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import { CustomCheckbox } from './CustomCheckbox'

const TodoListItem = styled.li`
list-style: none;
font-size: 20px;
display: flex;
align-items: center;
margin-bottom: 10px;
`
const ItemText = styled.span`
margin-left: 10px;
font-size: 18px;
color: #24292e;
`
const RemoveLink = styled.a`
font-size: 12px;
margin-left: 5px;
color: #24292e;
cursor: pointer;

&:hover {
  color: blue;
}
`

export const TodoItem = ({ itemIndex }) => {
  // Get the item from the store based on the index
  const item = useSelector(store => store.todos.list.items[itemIndex])

  const dispatch = useDispatch()

  // Function to handle remove item
  const onRemoveClicked = event => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex
      })
    )
  }

  // Function to handle the done state
  const handleOnChange = event => {
    dispatch(todos.actions.setDone({
      itemIndex: itemIndex,
      done: !item.done
    }))
  }

  // Custom Checkbox mounted here
  return (
    <TodoListItem>
      <CustomCheckbox isChecked={item.done} onChangeHandler={handleOnChange} />
      <ItemText>{item.description}</ItemText>
      <RemoveLink onClick={onRemoveClicked}>[Remove]</RemoveLink>
    </TodoListItem>
  )
}

