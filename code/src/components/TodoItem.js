import React from 'react'
import styled from 'styled-components/macro'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../lib/Button'

const TodoItemContainer = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 40px;
  grid-gap: 10px;
  align-items: center;
  width: 100%;
  margin: 5px 0;
`

const CheckboxContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
`

//Hides default checkbox
const HiddenCheckbox = styled.input`
  opacity: 0;
  width: 25px;
  height: 25px;
  cursor: pointer;
`

const NewCheckbox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 10px;
  height: 30px;
  width: 30px;
  background-color: #78786c;
  pointer-events: none;

  ::after {
    content: '';
    position: absolute;
    top: 7px;
    left: 6px;
    display: ${prop => prop.itemChecked ? 'block' : 'none'};
    width: 15px;
    height: 7px;
    border-left: 3px solid #fff;
    border-bottom: 3px solid #fff;
    transform: rotate(-50deg);
    
  }
`

const TodoText = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  color: ${prop => prop.itemChecked ? '#78786c' : '#3e3e2d'};
  font-size: 12px;
  text-decoration: ${prop => prop.itemChecked ? 'line-through' : ''};
  word-break: break-all;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`

export const TodoItem = ({ itemId }) => {
  const item = useSelector(store => store.todos.items[itemId])
  const itemChecked = item.done

  const dispatch = useDispatch()

  //Removes todo from array
  const onRemoveClicked = () => dispatch(todos.actions.removeTodo({ itemId }))

  //Marks todo as done
  const onCheckClick = () => dispatch(todos.actions.setDone({ itemId }))

  if (!item.show) {
    return null
  }

  return (
    <TodoItemContainer>

      <CheckboxContainer>
        <HiddenCheckbox
          aria-label={`Mark ${item.description} as done`}
          type='checkbox'
          onClick={onCheckClick}
        ></HiddenCheckbox>
        <NewCheckbox
          aria-hidden='true'
          itemChecked={itemChecked} />
      </CheckboxContainer>

      <TodoText
        onClick={onCheckClick}
        itemChecked={itemChecked}>
        {item.description}
      </TodoText>

      <Button
        aria-label={`Delete ${item.description}`}
        type="button"
        onClick={onRemoveClicked}
        background={'none'}
        color={'#78786c'}
        size={'1.3em'}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>

    </TodoItemContainer>
  )
}