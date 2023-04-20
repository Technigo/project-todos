import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { tasks } from '../reducers/tasks'
import Task from './Task'

const StyledContainer = styled.div`
display: flex;
flex-direction: column;

width: 100%;`

const StyledTasklistBar = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
padding: 5px;
align-items: center;
background-color: var(--foreground-primary-color);

h1 {
  font-size: 15px;
  flex: 1;
  color: white;
  text-align: center;
}

`

const StyledActionBar = styled.div`
display: none;
height: 0px;
opacity: 0;
transition: opacity 1s ease-out;
overflow: hidden;
background-color: var(--foreground-primary-color);



&.active {
  opacity: 1;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  padding: 2px;
}
`

const HamburgerMenuButton = styled.button`
width: 30px;
height: 30px;
background-color: inherit;
border: none;
cursor: pointer;
`

const CompleteAllButton = styled.button`
font-weight: 400;
color: white;
border: none;
font-family: "Raleway";
font-size: 12px;
width: 50%;
padding: 5px;
background-color: inherit;
cursor: pointer;

`

const DeleteAllButton = styled(CompleteAllButton)`
color: red;
`

const TaskList = () => {
  const [toggledActionBar, setToggledActionBar] = useState(true);

  const toggleActionBar = () => {
    setToggledActionBar(!toggledActionBar);
  }

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
    <StyledContainer>
      <StyledTasklistBar>
        <HamburgerMenuButton onClick={toggleActionBar}>
          <FontAwesomeIcon icon={faBars} style={{ color: '#ffffff' }} />
        </HamburgerMenuButton>
        <h1>tasks</h1>
      </StyledTasklistBar>
      <StyledActionBar className={toggledActionBar && 'active'}>
        <CompleteAllButton value="Complete All" onClick={handleCompleteAll}>complete all</CompleteAllButton>
        <DeleteAllButton value="Delete All" onClick={handleDeleteAll}>delete all</DeleteAllButton>
      </StyledActionBar>
      {tasksData.map((task) => (
        <Task id={task.id} key={task.id} />))}
    </StyledContainer>
  );
}

export default TaskList;
