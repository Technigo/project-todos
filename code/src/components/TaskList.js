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
margin-left: 40px;
gap: 130px;
font-size: 18px;
font-family: 'Quicksand', sans-serif;
margin-bottom: -10px;
color: white;
`

const InnerWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
font-size: 18px;
margin-bottom: 10px;
font-family: 'Quicksand', sans-serif;
color: white;
[type="checkbox"]{
  margin-left: 40px;
  width: 20px;
  height: 20px;
  border-radius: 20px;
}
`

const TaskText = styled.div`
margin-left: -70px;
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
              onClick={() => dispatch(tasks.actions.deleteTask(task))}><span className="material-symbols-outlined">
              local_laundry_service
              </span>
            </DeleteBtn>
          </InnerWrapper>
        )
      })}
      <ListHeader><h2>H
        <span className="material-symbols-outlined">
home
        </span>me </h2>
      </ListHeader>
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
              onClick={() => dispatch(tasks.actions.deleteTask(task))}><span className="material-symbols-outlined">
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