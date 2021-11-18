import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import tasks from 'reducers/tasks';

const CompletedTaskBox = styled.section`
  background-color: cyan;
`;

const CompleteTaskList = () => {
  const dispatch = useDispatch();

  const onToggleCheck = (id) => {
    dispatch(tasks.actions.toggleCheck(id));
  };
  const items = useSelector((store) =>
    store.tasks.items.filter((item) => item.complete === true)
  );
  return (
    <CompletedTaskBox>
      <h2>Completed Tasks</h2>
      {items.map((item) => (
        <div key={item.id}>
          <input
            className='checkbox'
            type='checkbox'
            checked={item.complete}
            onChange={() => onToggleCheck(item.id)}
          />
          <p>{item.text}</p>
          <p>{item.timestamp}</p>
        </div>
      ))}
    </CompletedTaskBox>
  );
};

export default CompleteTaskList;
