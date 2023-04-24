import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'components/reducers/tasks';
import styled from 'styled-components';

const List = styled.div`
display: flex;
flex-direction: column;
margin-top: 20px;
`
const ListHeader = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 120px;
font-size: 15px;
font-family: 'Montserrat', sans-serif;
margin-bottom: -10px;
color: rgb(69, 92, 107);

`
const ListHeaderHome = styled.div`
display: flex;
align-items: flex-start;
margin-left: 20px;
font-size: 15px;
font-family: 'Montserrat', sans-serif;
margin-bottom: -10px;
color: rgb(69, 92, 107);
`

const InnerWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
font-size: 18px;
margin: 4px 30px 4px 30px;
gap: 40px;
font-family: 'Quicksand', sans-serif;
color: rgb(69, 92, 107);
[type="checkbox"]{
  width: 25px;
  height: 25px;
}
`

const TaskText = styled.div`
width: 200px;
margin-left: -20px;
`

const DeleteBtn = styled.button`
background-color: #f2f4f2;
font-size: 20px;
font-family: 'Quicksand', sans-serif;
width: 50px;
height: 40px;
margin-left: 60px;
color: rgb(69, 92, 107);
border-style: none;
`

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch();
  const taskToDo = taskList.filter((task) => !task.isChecked)
  const completedTask = taskList.filter((task) => task.isChecked)
  /* const onDeleteTaskBtn = (id) => {
    dispatch(tasks.actions.deleteTask(id));
  } */

  return (
    <List>
      <ListHeader><h2>Preschool</h2><h2>Put in ↓</h2>
      </ListHeader>
      {completedTask.map((task) => {
        return (
          <InnerWrapper>
            <label htmlFor={task.id}>
              <input
                key={task.id}
                type="checkbox"
                checked={task.isChecked}
                onChange={() => dispatch(tasks.actions.toggleItem(task))} />
            </label>
            <TaskText>
              {task.text}
            </TaskText>
            <DeleteBtn
              type="button"
              onClick={() => dispatch(tasks.actions.deleteTask(task))}>
              <span className="material-symbols-outlined">
              local_laundry_service
              </span>
            </DeleteBtn>
          </InnerWrapper>
        )
      })}
      <ListHeaderHome><h2>Home</h2>
      </ListHeaderHome>
      {taskToDo.map((task) => {
        return (
          <InnerWrapper>
            <label htmlFor={task.id}>
              <input
                type="checkbox"
                checked={task.isChecked}
                key={task.id}
                onChange={() => dispatch(tasks.actions.toggleItem(task))} />
            </label>
            <TaskText>
              {task.text}
            </TaskText>
            <DeleteBtn
              type="button"
              onClick={() => dispatch(tasks.actions.deleteTask(task))}>
              <span className="material-symbols-outlined">
              local_laundry_service
              </span>
            </DeleteBtn>
          </InnerWrapper>
        )
      })}
    </List>
  )
}

export default TaskList;