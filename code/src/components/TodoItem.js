import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const TodoItem = ({ itemIndex }) => {
  const item = useSelector(store => store.todos.items[itemIndex])

  const dispatch = useDispatch()

  const onRemoveClicked = () => {
    dispatch(todos.actions.removeTodo({ itemIndex }))
  }

  const handleOnChange = () => {
    dispatch(todos.actions.setDone({ itemIndex })
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
      <RemoveButton
        aria-label={`Delete ${item.description}`}
        type="button"
        onClick={onRemoveClicked}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </RemoveButton>
    </Styled>
  )
}

const Styled = styled.div`
  display: flex;
  justify-content: space-between
`
const Label = styled.label`
  position: relative;
  margin: 10px 5px;
  padding-left: 10px;
  font-size: 20px;
  
  ::before {
    position: absolute;
    top: 0px;
    left: 0;
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
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

const RemoveButton = styled.button`
border: none;
background: none;
font-size: 25px;
`