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
              <Checkbox
                type="checkbox"
                checked={singleTask.isDone}
                onChange={() => onIsDoneToggle(singleTask.id)} />
              <TaskDescription>{singleTask.text}</TaskDescription>
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
    padding: 2% 0% 2% 0%;
    border-bottom: solid 0.2px #cecece;
    margin-bottom: 1vh;
`;

const Task = styled.div`
position: relative;
display:flex;
flex-direction: row;
`;

const TaskDescription = styled.label`
    color: var(--primary);
    font-weight: 700;
    margin-left: 2vw;
    display: flex;
    align-items: center;

    @media (min-width: 1024px) { 
      font-size: 20px;
    }
        
`;

const Checkbox = styled.input`
appearance: none;
height: 20px;
width: 20px;
border: 2px solid var(--primary);
border-radius: 50%;
transition-duration: 0.3s;
background-color: none;
cursor: pointer;

&:checked {
  background-image: url=(code/src/assets/check_icon.png);
  background-size: contain;
  background: var(--primary);
}

&:checked + ${TaskDescription} {
  text-decoration: line-through;
  color: #cecece;
  font-weight: 400;
}

`;

const DeleteTaskButton = styled.button`
    width: 30px;
    height: 30px;
    font-size: 150%;
    border: none;
    background-color: white;
`;