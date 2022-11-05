/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks'
import styled from 'styled-components'
import { Button } from 'components/GlobalStyles'
import { FaTrashAlt } from 'react-icons/fa';

const TaskList = () => {
  const taskList = useSelector((store) => store.tasks.items);
  const dispatch = useDispatch();

  const onDeleteItemClick = (todoIndex) => {
    dispatch(tasks.actions.deleteItem(todoIndex));
  };

  const onCompleteToggle = (id) => {
    dispatch(tasks.actions.toggleItem(id))
  };

  return (
    <StyledList>
      {taskList.map((singleTask, index) => {
        return (
          <li key={singleTask.id}>
            <div>
              <input
                className="checkbox"
                name="tasks"
                type="checkbox"
                checked={singleTask.complete}
                onChange={() => onCompleteToggle(singleTask.id)} />
              <label htmlFor={singleTask.id}>{singleTask.task}</label>
            </div>
            <TasksText>{singleTask.text}</TasksText>
            <DeleteBtn type="button" onClick={() => onDeleteItemClick(index)}> <FaTrashAlt /></DeleteBtn>
          </li>
        )
      })}
    </StyledList>
  )
}

export default TaskList

export const StyledList = styled.ul`
    list-style-type: none;
    height: 100vh;
    width: 100%;

    & li {
      display: flex;
      font-size: 1.1rem;
      height: 2rem;
    } 
`

const TasksText = styled.p`
font-size: 1rem;
margin-left: 2px;
color: #936f63;
`

const DeleteBtn = styled(Button)`
border: none;
border-radius: 20px;
height: 30px;
width: 30px;
color: #936f63;
margin-top: 10px;
`