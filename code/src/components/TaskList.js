import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'
import Task from './Task'

const StyledContainer = styled.div`
display: flex;
flex-direction: column;
gap: 5px;`

const CompleteAllButton = styled.button`background-color: green;
width: 15px;
height: 15px;`

const DeleteAllButton = styled.button`background-color: red;
width: 15px;
height: 15px;`

const TaskList = () => {
  const dispatch = useDispatch();

  const handleCompleteAll = () => {
    dispatch(tasks.actions.completeAllTasks())
  }
  const handleDeleteAll = () => {
    if (window.confirm('Are you sure you want to delete all?')) {
      dispatch(tasks.actions.deleteAllTasks())
    }
  }
  const tasksData = useSelector((state) => state.tasks.todos)
  return (
    <StyledContainer><h1>Tasklist</h1>
      <CompleteAllButton value="Complete All" onClick={handleCompleteAll} />
      <DeleteAllButton value="Delete All" onClick={handleDeleteAll} />
      {tasksData.map((task) => (
        <Task id={task.id} key={task.id} />))}
    </StyledContainer>);
}

export default TaskList;