import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'

export const TodoItem = ({ itemIndex }) => {
  const item = useSelector(store => store.todos.items[itemIndex])

  const dispatch = useDispatch()

  const onRemoveClicked = () => {
    dispatch(todos.actions.removeTodo({ itemIndex: itemIndex })
    )
  }

  const handleOnChange = () => {
    dispatch(todos.actions.setDone({
      itemIndex: itemIndex,
      done: !item.done,
    })
    )
  }

  return (
    <Styled>
      <Label>
        <Checkbox
          type='checkbox'
          onChange={handleOnChange}
          checked={item.done ? 'checked' : ''}
        ></Checkbox>
        {item.description}
      </Label>
      <a onClick={onRemoveClicked}>Remove</a>
    </Styled>
  )
}

const Styled = styled.div`
  
`
const Label = styled.label`
  position: relative;
  
  ::before {
    position: absolute;
    top: 3px;
    content: '';
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 1px solid;
  }

  ::after + input:checked {
    visibility: ${prop => !prop.checked ? 'hidden' : ''};
    position: absolute;
    left: 4px;
    top: 7px;
    content: '';
    display: inline-block;
    width: 8px;
    height: 5px;
    border-left: 2px solid;
    border-bottom: 2px solid;
    transform: rotate(-45deg);
  }
`

const Checkbox = styled.input`
  opacity: 0;
`