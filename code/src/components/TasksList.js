import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import windowSize from 'react-window-size';

import AddTasks from './AddTasks';
import DeleteTask from './DeleteTask';

import tasks from 'reducers/tasks';
import styled from 'styled-components';

const TaskCard = styled.section`
  background: rgb(255, 231, 231);

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  span {
    display: inline;
    height: 0.5em;
    width: 0.5em;
    font-size: 1em;
  }

  button {
    border: none;
    background: transparent;
  }
`;

const TasksList = () => {
  const items = useSelector((store) => store.tasks.items);

  const dispatch = useDispatch();

  const onToggleCheck = (id) => {
    dispatch(tasks.actions.toggleCheck(id));
  };

  return (
    <TaskCard>
      {items.map((item, index) => (
        <div key={item.id}>
          <input
            type='checkbox'
            checked={item.complete}
            onChange={() => onToggleCheck(item.id)}
          />
          <p>{item.text}</p>
          <DeleteTask item={item.id} />
        </div>
      ))}
      <AddTasks />
    </TaskCard>
  );
};

export default windowSize(TasksList);
