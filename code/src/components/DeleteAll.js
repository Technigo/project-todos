import React from 'react'
import { useDispatch } from 'react-redux'

import { todos } from '../reducers/todos'
import { Wrapper } from '../styledComponents/containers'
import { Text } from '../styledComponents/texts'
import { DeleteAllButton } from '../styledComponents/buttons'

export const DeleteAll = () => {
  const dispatch = useDispatch()

  const onRemoveClick = () => {
    dispatch(todos.actions.removeAll())
    dispatch(
      todos.actions.showList()
    )
  }

  return (
    <Wrapper>
      <Text>
        Delete All
      </Text>
      <DeleteAllButton type='button' onClick={onRemoveClick}>
        X
      </DeleteAllButton>
    </Wrapper>
  )
}