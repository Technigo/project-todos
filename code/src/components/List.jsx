/* eslint-disable indent */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/todo';
import { FaRegGrinStars, FaTrashAlt } from 'react-icons/fa';
import { StyledList } from './styled/List.styled';
import { EmptyState } from './styled/EmptyState.styled';

const List = () => {
  const amountOfTasks = useSelector((store) => store.toDos.items.length);
  const taskList = useSelector((store) => store.toDos.items);
  const dispatch = useDispatch();

  const onDeleteTaskButtonClick = (taskIndex) => {
    dispatch(toDos.actions.deleteTask(taskIndex));
  }

  return (
    <section>
      {!amountOfTasks
      ? <EmptyState>
        <div>
          <FaRegGrinStars />
        </div>
        </EmptyState>
        : <StyledList>
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
                <button onClick={() => onDeleteTaskButtonClick(index)} type="button"> <FaTrashAlt /></button>
              </li>
            )
          })}
          </StyledList>}
    </section>
  )
};

export default List;