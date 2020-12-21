import React from 'react'
import { useDispatch } from 'react-redux'

import { tasks } from 'reducers/tasks'
import { CheckBox } from './CheckBox'
import trashCan from '../assets/trashcan.png'
import { DeleteImg, TaskContainer, TaskText } from "../styling/styleTask"

export const Task = ({ item }) => {
  const dispatch = useDispatch()

  const handleDelete = (id) => {
    dispatch(tasks.actions.removeTask(id))
  }

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.setChecked(item.id))
  }

  return (
    <>
      <TaskContainer>
        <CheckBox
          isChecked={item.complete}
          onChangeHandler={handleCheckboxClick}
        />
        <TaskText line={item.complete ? 'line-through' : null}>{item.text}</TaskText>
        <DeleteImg
          src={trashCan} alt="trashcan"
          onClick={() => handleDelete(item.id)}>
        </DeleteImg>
      </TaskContainer>
    </>
  )
}






