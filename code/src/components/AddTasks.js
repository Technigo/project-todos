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
  const [charCount, setCharCount] = useState(0)

  const dispatch = useDispatch()

  const onTaskSubmit = () => {
    dispatch(tasks.actions.addTask({ task, tag }))
    setTask('')
    setTag('')
    setCharCount(0)
  }

  const onTaskValueChange = (event) => {
    setTask(event.target.value)
    setCharCount(event.target.value.length)
  }

  const onTagValueChange = (event) => {
    setTag(event.currentTarget.value)
  }
  return (
    <Card>
      <AddTaskCard>
        <label htmlFor="input">
          <input
            type="text"
            value={task}
            placeholder="Add your task here..."
            name="input"
            onChange={onTaskValueChange}
            maxLength="30"
          />
          {charCount}/30 charactors
        </label>
        <TagsWrapper>
          <form value={tag}>
            <TagInput type="button" value="work" color='#3DB429' onClick={onTagValueChange} />
            <TagInput type="button" value="study" color='#F36969' onClick={onTagValueChange} />
            <TagInput type="button" value="shopping" color='#5B87C9' onClick={onTagValueChange} />
            <TagInput type="button" value="gym" color='#A093D4' onClick={onTagValueChange} />
            <TagInput type="button" value="other" color='#FB9A08' onClick={onTagValueChange} />
          </form>
          </TagsWrapper>
          <AddTaskButton onClick={() => onTaskSubmit(task, tag)}>
           + ADD TASK
          </AddTaskButton>
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
