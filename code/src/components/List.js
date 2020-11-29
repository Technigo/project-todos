import Button from '@material-ui/core/Button'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { todos } from 'reducers/todos'
import styled from 'styled-components'
import { Item } from './Item'

const ListContainer = styled.div`
  display: flex;
  max-width: 400px;
  width: 100%;
  flex-direction: column; 
  align-self: center;
`

const Items = styled.div`
  margin-bottom: 1.5rem;
`

const StyledButton = styled(Button)`
  && {
    margin-bottom: 1rem;
  }
`

export const List = () => {
  const dispatch = useDispatch()
  const items = useSelector(store => store.todos.items)

  return (
    <ListContainer>
      <Items>
        {items.map((item, index) => (
          <Item key={index} item={item}></Item>
        ))}
      </Items>

      <StyledButton variant="contained" color="primary" onClick={() => dispatch(todos.actions.removeDone())}>
        Remove all completed
      </StyledButton>

      <StyledButton variant="contained" color="secondary" onClick={() => dispatch(todos.actions.removeAll())}>
        Remove all todos
      </StyledButton>
    </ListContainer>
  )

}