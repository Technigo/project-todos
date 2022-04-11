import React from 'react'
import { useState } from 'react'

import { Card } from './styles/Containers.styled'
import { TagsWrapper, Tag } from './styles/Tags.styled'

import { tasks } from '../reducers/tasks'

import { useSelector, useDispatch } from 'react-redux';

const AddTasks = () => {
  const [newTask, setNewTask] = useState("")
  const dispatch = useDispatch()
  const taskInput = useSelector((store) => store.tasks.items.taskText);

  const onTaskSubmit = () => {
    dispatch(tasks.actions.addTask(newTask))
  }

  const onTaskValueChange = (event) => {
    const { name, value } = event.target;
    setNewTask((prevTasks) => {
      return { 
        ...prevTasks,
        [name]: value
      };
    });
  }

  console.log(newTask)
  console.log(taskInput)

  const onTagSubmit = () => {

  }

  return (
    <Card>
      <form>
        <label htmlFor="input">
          <input
            type="text"
            value={newTask.newTask}
            placeholder="Add your task here..."
            name="input"
            onChange={onTaskValueChange}
          />
        </label>
        <button>
          <img
            src='./images/add-icon.svg'
            alt='add task'
            onClick={(event) => onTaskSubmit(event.preventDefault())}
          />
        </button>
        <TagsWrapper>
          <Tag color='#3DB429'>work</Tag>
          <Tag color='#F36969'>study</Tag>
          <Tag color='#5B87C9'>shopping</Tag>
          <Tag color='#A093D4'>gym</Tag>
          <Tag color='#FB9A08'>misc</Tag>
        </TagsWrapper>
      </form>
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