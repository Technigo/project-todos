import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CountText = styled.div`
  font-family: 'Shippori Antique', sans-serif;
  font-size: 1.3em;
  text-align: center;
  color: #4a4e69;
`;

const TaskCounter = () => {
  const uncompleteTaskCounter = useSelector((state) =>
    state.tasks.items.filter((item) => item.complete === false)
  );
  return (
    <CountText>
      <span role='img' aria-label='img'>
        🔮
      </span>{' '}
      You have {uncompleteTaskCounter.length} task/s left to do
    </CountText>
  );
};

export default TaskCounter;
