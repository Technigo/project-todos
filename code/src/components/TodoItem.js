import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from '../reducers/todos'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

export const TodoItem = ({ itemIndex }) => {
  const item = useSelector(store => store.todos.items[itemIndex]) //Ev ta bort då jag inte behöver hämta igen, kan lägga in som props istället, se TodoItems

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
      <RemoveButton
        aria-label={`Delete ${item.description}`}
        type="button"
        onClick={onRemoveClicked}
      >
        <FontAwesomeIcon icon={faTrashAlt} />
      </RemoveButton>
    </TodoItemContainer>
  )
}

const TodoItemContainer = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr 50px;
  grid-gap: 10px;
  width: 100%;
  margin: 10px 0;

  @media (min-width: 768px) {
    margin-bottom: 15px;
  }
`
const TodoText = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
  color: ${prop => prop.itemChecked ? '#888d64' : '#3e3e2d'};
  font-size: 12px;
  text-decoration: ${prop => prop.itemChecked ? 'line-through' : ''};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`

const Checkbox = styled.button`
  width: 30px;
  height: 30px;
  padding-left: 6px;
  padding-bottom: 6px;
  border: none;
  border-radius: 10px; 
  background: #888d64;

  ::after {
    content: '';
    display: ${prop => prop.itemChecked ? 'block' : 'none'};
    width: 15px;
    height: 7px;
    border-left: 3px solid #fff;
    border-bottom: 3px solid #fff;
    transform: rotate(-50deg);
  }

  @media (min-width: 768px) {
    width: 50px;
    height: 50px;
    padding-left: 15px;
  }
`

const RemoveButton = styled.button`
  border: none;
  background: none;
  color: #888d64;
  font-size: 25px;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 35px;
    margin-right: 4px;
  }
`