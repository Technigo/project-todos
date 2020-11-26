/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useDispatch } from 'react-redux'

import { remember } from 'reducers/remember'
import { TaskContainer } from 'lib/Container'
import { RemoveButton } from 'lib/Button'
import { Priority } from 'lib/Text'
import { CustomCheckbox } from 'components/CustomCheckbox'

export const Task = (props) => {
  const dispatch = useDispatch()

  const handleToggle = () => {
    dispatch(remember.actions.toggleDone(props.item.id))
  }

  const handleRemove = () => {
    dispatch(remember.actions.removeTask(props.item.id))
  }

  return (
    <TaskContainer>
      <CustomCheckbox
        isChecked={props.item.done}
        onChangeHandler={handleToggle} />
      <span>&nbsp; {props.item.text} &nbsp;</span>
      <Priority>{props.item.priority}</Priority>
      <RemoveButton text="remove" onClick={handleRemove}>
        remove
      </RemoveButton>
    </TaskContainer>
  )
}