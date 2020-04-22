import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import { CustomCheckbox } from 'components/CustomCheckbox'

const TodoListItem = styled.li`
list-style: none;
font-size: 20px;
`
const Checkbox = styled.input`

`
const ItemText = styled.span`
margin-left: 10px;
font-size: 18px;
`
const RemoveLink = styled.a`
font-size: 12px;
margin-left: 5px;
cursor: pointer;

&:hover {
  color: blue;
}
`

export const TodoItem = ({ itemIndex }) => {
  // get the item from the store based on the index
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
    dispatch(todos.actions.setDone({
      itemIndex: itemIndex,
      done: !item.done
    }))
  }

  return (
    <TodoListItem>
      <CustomCheckbox
        isChecked={item.done}
        onChangeHandler={handleOnChange} />
      {/*   <input
        type='checkbox'
        onChange={handleOnChange}
        checked={item.done ? "checked" : ""}
      ></input> */}
      <ItemText>{item.description}</ItemText>
      <RemoveLink onClick={onRemoveClicked}>[Remove]</RemoveLink>
    </TodoListItem>
  )
}