import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import tasks from 'reducers/tasks';
import styled from 'styled-components';

const StyledTasklist = styled.div`
display: flex; 
flex-direction:column;
background:#FAAB1C;
border-radius: 10%;
border: 2px solid hotpink;
`

const StyledList = styled.ul`
display: flex;
flex-wrap:wrap;
justify-content: center;
list-style-type: none;
margin: 0;
padding: 0;
`

const StyledListItem = styled.li`
font-family: 'Mouse Memoirs', sans-serif;
font-size: 24px;
background: #2490E9;
padding: 30px;
border-radius: 15px;
margin: 20px 40px; 
width: 98%;
height: 200px;

@media (min-width:667px) {
  width: 30%;
}
`
const StyledTaskText = styled.input`
display: flex; 

`

const StyledTodoTitle = styled.h2`
font-size: 40px; 
font-family: 'Mouse Memoirs', sans-serif;
text-align: center;

`
const Date = styled.p`
font-family:'Helvetica';
font-size: 12px; 
text-align: right;

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
              <StyledTaskText type="checkbox" checked={singleTask.checked} onChange={() => dispatch(tasks.actions.toggleChecked(singleTask))} />
              {singleTask.name}
              <button type="button" onClick={() => dispatch(tasks.actions.deleteTask(singleTask))}>❌</button>
              <Date>Created: {moment(tasks.date).format('ddd MMM Do YYYY')}</Date>
            </StyledListItem>
          )
        })}
      </StyledList>
    </StyledTasklist>
  )
}
