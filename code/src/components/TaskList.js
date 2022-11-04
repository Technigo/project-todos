/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos'
import styled from 'styled-components';

const TaskList = () => {
  const taskList = useSelector((store) => store.todos.items)

  const dispatch = useDispatch();

  const onIsDoneToggle = (id) => {
    dispatch(todos.actions.toggleItem(id));
  }

  const handleDeleteTask = (index) => {
    dispatch(todos.actions.deleteTask(index));
  }

  return (
    <ListOuterWrapper>
      {taskList.map((singleTask, index) => {
        return (
          <TaskContainer>
            <Task>
              <input
                type="checkbox"
                checked={singleTask.isDone}
                onChange={() => onIsDoneToggle(singleTask.id)} />
              <label>{singleTask.text}</label>
            </Task>
            <DeleteTaskButton
              onClick={() => handleDeleteTask(index)}
              type="button">×
            </DeleteTaskButton>
          </TaskContainer>
        );
      })}
    </ListOuterWrapper>
  )
}

export default TaskList;

const ListOuterWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5%;
`;

const TaskContainer = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 2%;
    border-bottom: solid 0.2px grey;
`;

const Task = styled.div`
display:flex;
flex-direction: row;
border: solid purple;

label {
  font-size: 15px;
}


`;

const DeleteTaskButton = styled.button`
    width: 30px;
    height: 30px;
    font-size: 150%;
    border: none;
    background-color: white;
`;