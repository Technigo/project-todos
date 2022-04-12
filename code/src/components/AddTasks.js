import React from 'react'
import { useState } from 'react'

import { Card } from './styles/Containers.styled'
import { TagsWrapper, TagInput } from './styles/Tags.styled'
import { AddTaskCard } from './styles/Containers.styled'
import { AddTaskButton } from './styles/Buttons.styled'

import { tasks } from '../reducers/tasks'

import { useDispatch } from 'react-redux';

const AddTasks = () => {
  const [task, setTask] = useState("")
  const [tag, setTag] = useState("")

  const dispatch = useDispatch()

  const onTaskSubmit = () => {
    dispatch(tasks.actions.addTask({ task, tag }))
    setTask('')
    setTag('')
  }

  const onTagValueChange = (event) => {
    setTag(event.currentTarget.value)
  }

  console.log(task)
  console.log(tag)

  return (
    <Card>
      <AddTaskCard>
        <label htmlFor="input">
          <input
            type="text"
            value={task}
            placeholder="Add your task here..."
            name="input"
            onChange={(event) => setTask(event.target.value)}
          />
        </label>
        <button onClick={() => onTaskSubmit(task, tag)}>
          <AddTaskButton
            src='./images/add-icon.svg'
            alt='add task'
          />
        </button>
        <TagsWrapper>
          <form value={tag}>
          <TagInput type="button" value="work" color='#3DB429' onClick={onTagValueChange} />
          <TagInput type="button" value="study" color='#F36969' onClick={onTagValueChange}  />
          <TagInput type="button" value="shopping" color='#5B87C9' onClick={onTagValueChange} />
          <TagInput type="button" value="gym"  color='#A093D4' onClick={onTagValueChange} />
          <TagInput type="button" value="misc" color='#FB9A08' onClick={onTagValueChange} />
          </form>
        </TagsWrapper>
      </AddTaskCard>
    </Card>
  )
}


export default AddTasks

// const onContentValueChange = (event) => {
//   const { name, value } = event.target;
//   setContent((prev) => {
//     return {
//       ...prev,
//       [name]: value
//     };
//   });
// };
