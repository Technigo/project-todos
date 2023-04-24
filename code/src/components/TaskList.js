import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'components/reducers/tasks';
import styled from 'styled-components';

const List = styled.div`
display: flex;
flex-direction: column;
background-color: #606c5f;
height: 100vh;
`
const ListHeader = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
gap: 100px;
font-size: 15px;
font-family: 'Montserrat', sans-serif;
margin-bottom: -10px;
color: white;
`
const ListHeaderHome = styled.div`
display: flex;
align-items: flex-start;
margin-left: 20px;
font-size: 15px;
font-family: 'Montserrat', sans-serif;
margin-bottom: -10px;
color: white;
`

const InnerWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
font-size: 18px;
margin: 2px 30px 2px 30px;
gap: 40px;
font-family: 'Quicksand', sans-serif;
color: white;
[type="checkbox"]{
  width: 20px;
  height: 20px;
}
`

const TaskText = styled.div`
width: 200px;
margin-left: -20px;
`

const DeleteBtn = styled.button`
background-color: #606c5f;
font-size: 20px;
font-family: 'Quicksand', sans-serif;
width: 30px;
height: 30px;
margin-left: 60px;
color: white;
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
      <ListHeader><h2>Pree Scho
        <span className="material-symbols-outlined">
child_care
        </span>l  </h2><h2>Laundry</h2>
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
      <ListHeaderHome><h2>H
        <span className="material-symbols-outlined">
home
        </span>me </h2>
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