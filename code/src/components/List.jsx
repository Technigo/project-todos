/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/todo';
import { StyledList } from './styled/List.styled';
import { StyledButton } from './styled/Button.styled';

const List = () => {
  const taskList = useSelector((store) => store.toDos.items);
  const dispatch = useDispatch();

  const onDeleteTaskButtonClick = (taskIndex) => {
    dispatch(toDos.actions.deleteTask(taskIndex));
  }

  return (
    <StyledList>
      {taskList.map((task, index) => {
        return (
          <li key={task.id}>
            <div>
              <input
                id={task.id}
                name="tasks"
                type="checkbox"
                checked={task.done}
                onChange={() => dispatch(toDos.actions.toggleDone(task.id))} />
              <label htmlFor={task.id}>{task.task}</label>
            </div>
            <StyledButton onClick={() => onDeleteTaskButtonClick(index)} type="button">Delete task</StyledButton>
          </li>
        )
      })}
    </StyledList>
  )
};

export default List;