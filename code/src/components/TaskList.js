import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'components/reducers/tasks';
import styled from 'styled-components';

const List = styled.div`
display: flex;
flex-direction: column;
background-color: beige;
`
const ListHeader = styled.div`
align-self: center;
font-size: 18px;
font-family: 'Quicksand', sans-serif;
margin-bottom: -20px;
`

const InnerWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
margin-left: 40px;
padding: 10px;
width: 400px;
font-size: 18px;
font-family: 'Quicksand', sans-serif;
border-radius: 10px;
[type="checkbox"]{
  margin-left: 70px;
}
`

const DeleteBtn = styled.button`
background-color: white;
font-size: 15px;
font-family: 'Quicksand', sans-serif;
width: 25px;
height: 25px;
margin-left: 80px;
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
      <ListHeader><h2>Pree School</h2></ListHeader>
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
            {task.text}
            <DeleteBtn
              type="button"
              onClick={() => dispatch(tasks.actions.deleteTask(task))}>X
            </DeleteBtn>
          </InnerWrapper>
        )
      })}
      
      <ListHeader><h2>Home</h2></ListHeader>
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
            {task.text}
            <DeleteBtn
              type="button"
              onClick={() => dispatch(tasks.actions.deleteTask(task))}>X
            </DeleteBtn>
          </InnerWrapper>
        )
      })}
    </List>
  )
}

export default TaskList;