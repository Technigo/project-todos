/* eslint-disable linebreak-style */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/task';
import styled from 'styled-components/macro';
import AddTask from 'componenets/AddTask';
import DeleteAllTasks from './DeleteAll';

const TaskList = () => {
  const dispatch = useDispatch();

  const taskList = useSelector((store) => store.tasks.items);

  const onIsDoneToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id));
  }

  const onDeleteTaskButtonClick = (taskIndex) => {
    dispatch(tasks.actions.deleteItem(taskIndex));
  }

  return (
    <div>
      <Wrapper>
        {taskList.map((singleTask, index) => {
          return (
            <Article key={singleTask.id}>
              <h2>{singleTask.name}</h2>
              <lable>Are you done?
                <Input
                  type="checkbox"
                  checked={singleTask.isDone}
                  onChange={() => onIsDoneToggle(singleTask.id)} />
              </lable>
              <button onClick={() => onDeleteTaskButtonClick(index)} type="button">🗑️</button>
            </Article>
          );
        })}
        <AddTask />
        <DeleteAllTasks />
      </Wrapper>
    </div>
  )
}

export default TaskList;

const Wrapper = styled.div`
  position: absolute;
  top: 45%;
  right: 20%;
  width: 25vh;
  height: 75vh;
  padding: 3rem;
  background-color: white;
  border: 6px solid black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1rem;
  `
const Article = styled.article`
  margin: 5px;
  border: 2px solid rgb(168, 187, 168);
`
const Input = styled.input`
  border: 1px solid blue;
  margin: 10px;
`