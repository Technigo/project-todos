import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import tasks from '../reducers/tasks'

const TaskWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
`

const Task = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  width: 100%;
  border: 1px solid #fafafa;
  padding: 10px;
  box-sizing: border-box;
`

const TaskDescription = styled.p`
  margin-left: 15px;
`

const Button = styled.button`
  border: none;
  background-color: inherit;
  font-size: 22px;
  color: #757575;
`

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  width: 100%;
  border: 1px solid #fafafa;
  padding: 10px;
  box-sizing: border-box;
`

const TaskInput = styled.input`
  border: none;
  height: 35px;
  width: 100%;
  font-size: 16px;
  box-sizing: border-box;
  padding: 10px;
`

const TaskList = () => {
  const items = useSelector((store) => store.tasks.items)
  const [description, setDescription] = useState('')

  const dispatch = useDispatch()

  const onTaskSubmit = (e, id, description) => {
    e.preventDefault()
    dispatch(tasks.actions.addTask(id, description))
  }

  return (
    <TaskWrapper>
      <Form>
        <Button onClick={() => onTaskSubmit(items.length + 1)}>+</Button>
        <TaskInput 
        type="text"
        placeholder="Add Task"
        onChange={(e) => {setDescription(e.target.value)}}
        value={description}
        />
      </Form>
      {items.map(task => (
        <Task key={task.id}>
            <input 
                type="checkbox"
                checked={task.isCompleted}
                onChange={() => dispatch(tasks.actions.toggleCheckbox(task.id))}
              />
            <TaskDescription>{task.description}</TaskDescription>
        </Task>
      ))}
    </TaskWrapper>
  )
}
export default TaskList