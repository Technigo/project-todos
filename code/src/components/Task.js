import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled, { css } from 'styled-components'
import { tasks } from '../reducers/tasks'
import { Button } from '../library/Button'
import { DoubleButtons } from '../library/DoubleButtons'
import { ListItem } from '../library/ListItem'
import { CustomCheckbox } from 'components/CustomCheckbox'



export const Task = ({ itemIndex }) => {
  const item = useSelector(store => store.tasks.list.items[itemIndex])
  const dispatch = useDispatch()

  const handleOnChange = event => {
    dispatch(tasks.actions.setDone({
      itemIndex: itemIndex,
      done: !item.done
    }))
  }

  const onRemoveClicked = event => {
    dispatch(tasks.actions.removeTodo({
      itemIndex: itemIndex,
    }))
  }

  return (
    <ListItem>
      <span>{item.description}</span>
      <DoubleButtons>
        <CustomCheckbox 
          isChecked={item.done ? 'checked' : ''} 
          onChangeHandler={handleOnChange}
        />
      <Button onClick={onRemoveClicked}>
        Remove
      </Button>
    </DoubleButtons>
    </ListItem>
  )
}
