import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'

import { TaskForm } from './TaskForm'

import tasks from '../reducers/tasks'

const TaskWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  background-color: #ced4da;
`

const Task = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
  border: 1px solid #fafafa;
  padding: 10px;
  box-sizing: border-box;
`

const DescriptionCheckbox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  justify-content: flex-start;
`

const TaskDescription = styled.p`
  margin: 0;
  margin-left: 15px;
  padding: 10px;
  font-size: 18px;
`

const RemoveButton = styled.button`
  border: none;
  background-color: inherit;
  font-size: 20px;
  color: #757575;
`

const TaskList = () => {
  const items = useSelector((store) => store.tasks.items)

  const dispatch = useDispatch()

  return (
    <TaskWrapper>
      <TaskForm />
      {items.map(task => (
        <Task key={task.id}>
          <DescriptionCheckbox>
            <input 
                  type="checkbox"
                  checked={task.isCompleted}
                  onChange={() => dispatch(tasks.actions.toggleCheckbox(task.id))}
                />
              <TaskDescription>{task.description}</TaskDescription>
          </DescriptionCheckbox>
            <RemoveButton onClick={() => dispatch(tasks.actions.removeTask(task.id))}>🚫</RemoveButton>
        </Task>
      ))}
    </TaskWrapper>
  )
}
export default TaskList

// {task.isCompleted ? 'checked' : ''}
// text-decoration: ${props => props.checked ? "line-through" : "none"};