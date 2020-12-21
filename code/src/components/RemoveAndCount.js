import React from 'react'

import { useDispatch, useSelector } from 'react-redux'

import { tasks } from 'reducers/tasks'
import { FooterWrapper, ButtonWrapper, DeleteAllButton, Text, DeleteCheckedButton } from "../styling/styleRemoveAndCount"

export const RemoveAndCount = () => {

  const items = useSelector((store) => store.tasks.items);
  const todosCompleted = items.filter((todo) => todo.complete);
  const enabled = items.length > 0;
  const dispatch = useDispatch();

  const handleRemoveAll = () => {
    dispatch(tasks.actions.removeAll())
  }

  const handleRemoveChecked = () => {
    dispatch(tasks.actions.removeChecked())
  }

  return (
    <FooterWrapper>
      <ButtonWrapper>
        <DeleteAllButton onClick={handleRemoveAll} disabled={!enabled}>
          Delete all!
    </DeleteAllButton>
        <DeleteCheckedButton onClick={handleRemoveChecked} disabled={!enabled}>
          Delete completed tasks
    </DeleteCheckedButton>
      </ButtonWrapper>
      <Text> Completed: {todosCompleted.length} / {items.length}</Text>
    </FooterWrapper>
  )
}



