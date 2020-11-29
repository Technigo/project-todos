import React from 'react'
import styled from 'styled-components'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

const ItemContainer = styled.li`
  align-self: flex-start;
  padding: 8px;
  margin: 8px;
  font-size: 32px;
  color: #3f3f3f;
  background-color: #b8f4ff;
`

const Button = styled.button`
`

const CheckBox = styled.input`
  margin-right: 20px;
`;

export const Item = ({ item }) => {
  const dispatch = useDispatch()

  return <ItemContainer>
    {item.text}
    <CheckBox
      type="checkbox"
      role="checkbox"
      checked={item.isComplete}
      onChange={() => {
        dispatch(todos.actions.checkItem(item.id));
      }}
    />
    <Button onClick={() => dispatch(todos.actions.removeOne(item.id))}>
      -
    </Button>
  </ItemContainer>
}