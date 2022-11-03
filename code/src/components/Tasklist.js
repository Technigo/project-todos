/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'
import Header from './Header'
import { InnerWrapper, Outerwrapper } from './Styling'
import NewTask from './NewTask'

const Tasks = () => {
  const allTasks = useSelector((store) => store.tasks.todos);
  const dispatch = useDispatch();

  const onIsTaskDone = (id) => {
    dispatch(tasks.actions.markTaskAsDone(id))
  }
  const onRemoveTaskClick = (task) => {
    dispatch(tasks.actions.removeTask(task))
  }
  return (
    <Outerwrapper>
      <Header />
      <InnerWrapper>
        {allTasks.map((singleTask, index) => {
          return (
            <Tasklist key={singleTask.id}>
              <input
                type="checkbox"
                checked={singleTask.isDone}
                onChange={() => onIsTaskDone(singleTask.id)} />
              <label>
                <p>{singleTask.title}</p>
              </label>
              <RemoveTaskButton type="button" onClick={() => onRemoveTaskClick(index)}>X
              </RemoveTaskButton>
            </Tasklist>
          )
        })}
        <NewTask />
      </InnerWrapper>

    </Outerwrapper>
  )
}
export default Tasks;

const Tasklist = styled.div`
display: flex;
flex-direction: row;
align-items: center;
margin: 15px;
font-size: 15px;
`
const RemoveTaskButton = styled.button`
background: none;
border: none;
font-size: 15px;
font-weight: 700;
`