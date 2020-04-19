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

  const onCheckClick = () => {
    dispatch(todos.actions.setDone({ itemIndex })
    )
  }

  const itemChecked = item.done

  return (
    <Styled>
      <Label>
        <Checkbox
          type='button'
          onClick={onCheckClick}
          itemChecked={itemChecked}
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
  justify-content: space-between;
  align-content: center;
  margin: 10px 0;
`
const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 16px;
`

const Checkbox = styled.button`
  width: 20px;
  height: 20px;
  margin-right: 10px;
  padding-left: 4px;
  border: 1px solid;
  border-radius: 5px;
  background: none;
  font-size: 20px;

  &:after {
    content: '';
    display: ${prop => (prop.itemChecked ? 'block' : 'none')};
    width: 9px;
    height: 5px;
    border-left: 1px solid;
    border-bottom: 1px solid;
    transform: rotate(-45deg);
  }
`

const RemoveButton = styled.button`
  border: none;
  background: none;
  font-size: 20px;
`