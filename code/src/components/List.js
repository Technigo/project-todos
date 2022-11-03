import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import toDos from 'reducers/todo';
import { ListWrapper } from './styled/List.styled';

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
              <label htmlFor="task">
                <input
                  id="task"
                  type="checkbox"
                  checked={task.done}
                  onChange={() => dispatch(toDos.actions.toggleDone(task.id))} />
                {task.task}
                <button onClick={() => onDeleteTaskButtonClick(index)} type="button">Delete task</button>
              </label>
            </li>
          )
        })}
      </ul>
    </ListWrapper>
  )
};

export default List;