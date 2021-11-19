import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import tasks from 'reducers/tasks';

const Xspan = styled.span`
  display: inline;
  height: 0.5em;
  width: 0.5em;
  font-size: 1.3em;
  opacity: 0.6;

  &:hover {
    filter: invert(1);
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-5px);
  }
`;

const Xbtn = styled.button`
  transition: all 0.3s ease 0s;

  &:hover {
    transform: translateY(-7px);
  }
  &:active {
    transform: translateY(-5px);
  }
`;

const DeleteTask = ({ item }) => {
  const dispatch = useDispatch();

  const onDeleteTask = (id) => {
    dispatch(tasks.actions.deleteTask(id));
  };
  return (
    <Xbtn onClick={() => onDeleteTask(item)}>
      {' '}
      <Xspan ><span role='img' aria-label='img'>✖️</span></Xspan>{' '}
    </Xbtn>
  );
};

export default DeleteTask;
