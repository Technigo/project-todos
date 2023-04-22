import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'components/reducers/tasks';
import styled from 'styled-components';

const InnerWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
justify-content: center;
margin-top: 20px;
margin-left: 40px;
background-color: beige;
padding: 10px;
width: 400px;
border-radius: 10px;
[type="checkbox"]{
  margin-left: 70px;
}
`

const DeleteBtn = styled.button`
width: 30px;
height: 30px;
border-radius: 50px;
margin-left: 80px;
border: solid grey;
`

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items)
  const dispatch = useDispatch();
  const taskToDo = taskList.filter((task) => !task.isChecked)
  const completedTask = taskList.filter((task) => task.isChecked)
  const onDeleteTaskBtn = (id) => {
    dispatch(tasks.actions.deleteTask(id));
  }

  return (
    <section>
      <h2>At preschool</h2>
      {completedTask.map((task) => {
        return (
          <InnerWrapper>
            <label htmlFor={task.id}>
              <input
                key={task.id}
                type="checkbox"
                checked={task.isChecked}
                onChange={() => dispatch(tasks.actions.toggleChecked(task))} />
            </label>
            <DeleteBtn
              type="button"
              onClick={() => dispatch(tasks.actions.deleteTask(task))}>-
            </DeleteBtn>
          </InnerWrapper>
        )
      })}
      <h2>Home</h2>
      {taskToDo.map((task) => {
        return (
          <InnerWrapper>
            <label htmlFor={task.id}>
              <input
                type="checkbox"
                checked={task.checked}
                key={task.id}
                onChange={() => dispatch(task.actions.toggleChecked(task))} />
              {task.text}
            </label>
            <DeleteBtn
              type="button"
              onClick={() => dispatch(tasks.actions.deleteTask(task))}>-
            </DeleteBtn>
          </InnerWrapper>
        )
      })}
    </section>
  )
}

export default TaskList;