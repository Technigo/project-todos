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

  @media (min-width: 768px) {
    grid-template-columns: 40px 1fr 40px;
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

const Checkbox = styled.button`
  width: 30px;
  height: 30px;
  padding-left: 6px;
  padding-bottom: 6px;
  border: none;
  border-radius: 10px; 
  background: #78786c;
  cursor: pointer;

  ::after {
    content: '';
    display: ${prop => prop.itemChecked ? 'block' : 'none'};
    width: 15px;
    height: 7px;
    border-left: 3px solid #fff;
    border-bottom: 3px solid #fff;
    transform: rotate(-50deg);
  }
`

export const TodoItem = ({ itemIndex }) => {
  const item = useSelector(store => store.todos.items[itemIndex])
  const itemChecked = item.done

  const dispatch = useDispatch()

  //Removes todo from array
  const onRemoveClicked = () => dispatch(todos.actions.removeTodo({ itemIndex }))

  //Marks todo as done
  const onCheckClick = () => dispatch(todos.actions.setDone({ itemIndex }))

  return (
    <>
      {item.show &&
        <TodoItemContainer>

          <Checkbox
            aria-label={`Mark ${item.description} as done`}
            type='button'
            onClick={onCheckClick}
            itemChecked={itemChecked}
          ></Checkbox>

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
      }
    </>
  )
}