import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import tasks from 'reducers/tasks';
import styled from 'styled-components';

const StyledTasklist = styled.div`
display: flex; 
word-wrap: break-word;
flex-direction:column;
background:#a8e6cf;
border-radius:  10%;
margin: 10%;
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
font-family: 'Poppins', sans-serif;
font-size: 20px;
background:#63ace5;
color:;
padding: 30px;
border-radius: 15px;
margin: 20px 40px; 
width: 98%;
height: 200px;

@media (min-width:667px) and (max-width:1024px) {
  width: 50%;
}

@media (min-width:1024px){
  width:30%;
}
`

const StyledTodoTitle = styled.h2`
font-family: 'Mouse Memoirs', sans-serif;
font-size: 40px; 
text-align: center;
margin:10px;

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
  const totalCount = useSelector((store) => store.tasks.items.length)
  const completedCount = useSelector((store) => store.tasks.completedCount)
  const unfinishedTasks = totalCount - completedCount
  return (
    <StyledTasklist>
      <StyledTodoTitle> To do: {unfinishedTasks} / {totalCount}</StyledTodoTitle>
      <StyledList className="task-list">
        {taskList.map((singleTask) => {
          return (
            <StyledListItem key={singleTask.id}>
              <input type="checkbox" checked={singleTask.checked} onChange={() => dispatch(tasks.actions.toggleChecked(singleTask))} />
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
