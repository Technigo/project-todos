import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import tasks from 'reducers/tasks';
import styled from 'styled-components';
import { FcEmptyTrash } from 'react-icons/fc';

const StyledTasklist = styled.div`
display: flex; 
word-wrap: break-word;
flex-direction:column;
background:#a8e6cf;
border-radius:  10%;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;

input[type='checkbox'].checkbox {
    --size: 16px;
    --radius: calc(var(--size) / 10);
    --bg: hotpink;
    --border-radius:5px;
    --color: white;
    --time: 0.5s;
}

@media (min-width:1024px) {
  height: 80vh;
}
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
height: auto;
box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;

@media (max-width:350px){
  width:60%;
}

@media (min-width:667px) and (max-width:1024px) {
  width: 50%;
}

@media (min-width:1024px){
  width:30%;
}
`

const StyledTodoTitle = styled.h2`
font-family: 'Mouse Memoirs', sans-serif;
font-size: 45px; 
text-align: center;
margin:20px;

`
const Datebox = styled.div`
display:flex: 

`

const Date = styled.p`
display:flex;
font-family:'Helvetica';
font-size: 12px; 
justify-content: flex-end;

`
const DeleteButton = styled.button`
background:transparent; 
border:none;
height: 40px;
justify-content: flex-end;
`

const CheckboxText = styled.p`
display: flex; 
flex-direction:row;
gap: 20px; 
align-items:center;
justify-content:space-between;
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
              <CheckboxText>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={singleTask.checked}
                  onChange={() => dispatch(tasks.actions.toggleChecked(singleTask))} />
                <label htmlFor="todo"> {singleTask.name} </label>
                <DeleteButton type="button" onClick={() => dispatch(tasks.actions.deleteTask(singleTask))}> <FcEmptyTrash style={{ fontSize: '32px' }} /> </DeleteButton>
              </CheckboxText>
              <Datebox>
                <Date>Created: {moment(tasks.date).format('ddd MMM Do YYYY')}</Date>
              </Datebox>
            </StyledListItem>
          )
        })}
      </StyledList>
    </StyledTasklist>
  )
}
