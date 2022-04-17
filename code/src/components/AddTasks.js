import React from 'react'
import { useState } from 'react'

import { Card } from './styles/Containers.styled'
import { TagsWrapper, TagInput } from './styles/Tags.styled'
import { AddTaskCard } from './styles/Containers.styled'
import { AddTaskButton } from './styles/Buttons.styled'
import { CharCount } from './styles/FontsAndSpans.styled'

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
        <form>
          <label htmlFor="input">
            <input
              type="text"
              value={task}
              placeholder="Add your task here..."
              name="input"
              onChange={onTaskValueChange}
              maxLength="30"
            />
           <CharCount>{charCount}/30 characters</CharCount> 
          </label>
          <TagsWrapper>
            <fieldset>
            <legend> Select tag (optional)</legend>
              <TagInput color='#3DB429'>work
                <input type="radio" value="work" color='#3DB429' onClick={onTagValueChange} />
              </TagInput>
              <TagInput color='#F36969'>study
                <input type="radio" value="study" color='#F36969' onClick={onTagValueChange} />
              </TagInput>
              <TagInput color='#5B87C9'>shopping
                <input type="radio" value="shopping" color='#5B87C9' onClick={onTagValueChange} />
              </TagInput>
              <TagInput color='#FB9A08'>other
                <input type="radio" value="other" color='#FB9A08' onClick={onTagValueChange} />
              </TagInput>
            </fieldset>
          </TagsWrapper>
          <AddTaskButton onClick={() => onTaskSubmit(task, tag)} disabled={charCount === 0}>
            + ADD TASK
          </AddTaskButton>
        </form>
      </AddTaskCard>
    </Card>
  )
}


export default AddTasks
