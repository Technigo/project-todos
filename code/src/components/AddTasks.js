import React from 'react'
import { useState } from 'react'

import { Card } from './styles/Containers.styled'
import { TagsWrapper, Tag } from './styles/Tags.styled'
import { AddTaskCard } from './styles/Containers.styled'

import { tasks } from '../reducers/tasks'

import { useSelector, useDispatch } from 'react-redux';

const AddTasks = () => {
  const [newTask, setNewTask] = useState("")
  const dispatch = useDispatch()
  const taskInput = useSelector((store) => store.tasks.items.taskInput);
  const tagInput = useSelector((store)=> store.tasks.items.tag)

  const onTaskSubmit = () => {
    dispatch(tasks.actions.addTask(newTask))
  }

  const onTagValueChange = (event) => {
    event.preventDefault()
  }
  console.log(newTask)
  console.log(taskInput)
  console.log(tagInput)

  const onTagSubmit = () => {

  }

  return (
    <Card>
      <AddTaskCard>
        <label htmlFor="input">
          <input
            type="text"
            value={newTask}
            placeholder="Add your task here..."
            name="input"
            onChange={(event) => setNewTask(event.target.value)}
          />
        </label>
        <button onClick={() => onTaskSubmit()}>
          <img
            src='./images/add-icon.svg'
            alt='add task'
          />
        </button>
        <TagsWrapper>
          <Tag name='tag' value="work" color='#3DB429'>work</Tag>
          <Tag name='tag' value="study" color='#F36969'>study</Tag>
          <Tag color='#5B87C9'>shopping</Tag>
          <Tag color='#A093D4'>gym</Tag>
          <Tag color='#FB9A08'>misc</Tag>
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

// <form onSubmit={onContentSubmit}>
// <label htmlFor="content">
//   <textarea
//     rows="3"
//     placeholder="Type anything!"
//     name="content"
//     value={content.content}
//     onChange={onContentValueChange}
//   />
// </label>

// <label htmlFor="author">
//   <input
//     type="text"
//     placeholder="Sign your name"
//     name="author"
//     value={content.author}
//     onChange={onContentValueChange}
//   />
// </label>
// <button type="submit">Submit</button>
// </form>