import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'components/reducers/tasks';
import styled from 'styled-components';

const List = styled.div`
display: flex;
flex-direction: column;
background-color: pink;
height: 100vh;
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
font-size: 18px;
margin-bottom: 10px;
font-family: 'Quicksand', sans-serif;
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
background-color: white;
font-size: 15px;
font-family: 'Quicksand', sans-serif;
width: 30px;
height: 30px;
border-radius: 50px;
margin-left: 60px;
border: 1px solid black;
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
            <TaskText>
              {task.text}
            </TaskText>
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
            <TaskText>
              {task.text}
            </TaskText>
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