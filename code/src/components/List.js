/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/todo';
import { ListWrapper } from './styled/List.styled';
import { StyledButton } from './styled/Button.styled';

const List = () => {
  const taskList = useSelector((store) => store.toDos.items);
  const dispatch = useDispatch();

  const onDeleteTaskButtonClick = (taskIndex) => {
    dispatch(toDos.actions.deleteTask(taskIndex));
  }

  return (
    <ListWrapper>
      <ul>
        {taskList.map((task, index) => {
          return (
            <li key={task.id}>
              <input
                id={task.id}
                name="tasks"
                type="checkbox"
                checked={task.done}
                onChange={() => dispatch(toDos.actions.toggleDone(task.id))} />
              <label htmlFor={task.id}>{task.task}</label>
              <StyledButton hidden onClick={() => onDeleteTaskButtonClick(index)} type="button">Delete task</StyledButton>
            </li>
          )
        })}
      </ul>
    </ListWrapper>
  )
};

export default List;