import Checkbox from '@material-ui/core/Checkbox'
import { green } from '@material-ui/core/colors'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import React from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import styled, { css } from 'styled-components'

const Container = styled.div`
  align-self: flex-start;
  padding: 0.25rem 0.5rem;
  margin: 1rem 0;
  background-color: #fff;
  border-radius: 2rem;
  box-shadow: 0 4px 10px #ddd;

  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Text = styled.div`
  font-size: 18px;
  padding: 0.75rem;
  color: #3f3f3f;

  ${props => props.checked && css`
    color: #ccc;
    text-decoration: line-through;
  `}
`

const ButtonWrap = styled.div`
  white-space: nowrap;
`

const StyledCheckbox = styled(Checkbox)`
  && {
    color: ${green[400]};
  }

  &&.Mui-checked {
    color: ${green[600]}
  }
`

export const Item = ({ item }) => {
  const dispatch = useDispatch()

  return <Container>
    <Text checked={item.isComplete}>
      {item.text}
    </Text>

    <ButtonWrap>
      <StyledCheckbox
        checked={item.isComplete}
        onChange={() => {
          dispatch(todos.actions.checkItem(item.id));
        }}
      />

      <IconButton onClick={() => dispatch(todos.actions.removeOne(item.id))}>
        <DeleteIcon />
      </IconButton>
    </ButtonWrap>
  </Container>
}