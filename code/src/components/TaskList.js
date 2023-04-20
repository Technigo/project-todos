import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';
import styled from 'styled-components';

const StyledTasklist = styled.div`
display: flex; 
flex-direction:column;
background:#FAAB1C;
border-radius: 20%;
border: 2px solid hotpink;
`

const StyledList = styled.ul`
display: flex;
flex-direction:column;
list-style-type: none;
margin: 0;
padding: 0;
`

const StyledListItem = styled.li`
font-family: 'Mouse Memoirs', sans-serif;
background: #2490E9;
padding: 30px;
border-radius: 15px;
margin: 20px 40px; 
`
const StyledTodoTitle = styled.h2`
font-size: 40px; 
font-family: 'Mouse Memoirs', sans-serif;
text-align: center;

`

export const TaskList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const tasksFromLocalStorage = JSON.parse(localStorage.getItem('taskList'));
    if (tasksFromLocalStorage) {
      dispatch(tasks.actions.setupStore(tasksFromLocalStorage))
    }
  }, [dispatch])

  const taskList = useSelector((store) => store.tasks.items);

  return (
    <StyledTasklist>
      <StyledTodoTitle> To do: ({taskList.length}) </StyledTodoTitle>
      <StyledList className="task-list">
        {taskList.map((singleTask) => {
          return (
            <StyledListItem key={singleTask.id}>
              <input type="checkbox" checked={singleTask.checked} onChange={() => dispatch(tasks.actions.toggleChecked(singleTask))} />
              {singleTask.name}
              <button type="button" onClick={() => dispatch(tasks.actions.deleteTask(singleTask))}>❌</button>
            </StyledListItem>
          )
        })}
      </StyledList>
    </StyledTasklist>
  )
}
