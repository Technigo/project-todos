/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import styled from 'styled-components/macro';
// import { textColor } from 'components/GlobalStyles';
import { useDispatch } from 'react-redux';
import tasks from 'reducers/tasks';

import plus from '../../Assets/plus.svg';

const NewTask = () => {
  const dispatch = useDispatch();
  const [newTaskText, setNewTaskText] = useState('');

  return (
    <NewTaskForm
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(tasks.actions.addTask(newTaskText));
        setNewTaskText('');
      }}
    >
      <NewTaskStyle>
        <img src={plus} alt="plus" />
        <NewTaskInput
          type="text"
          placeholder="Add a new task..."
          value={newTaskText}
          onChange={(event) => setNewTaskText(event.target.value)}
        />
      </NewTaskStyle>
      {/* // <input type="submit" value="press me" /> */}
    </NewTaskForm>
  );
};

export default NewTask;

const NewTaskForm = styled.form`
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

const NewTaskStyle = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;

  img {
    padding-left: 20px;
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1024px) {
    padding: 40px 0;

    img {
      padding-left: 50px;
    }
  }
`;

const NewTaskInput = styled.input`
  height: 24px;
  width: 100%;
  outline: none;
  border: none;
  font-size: 22px;
  margin-left: 20px;
  padding: 0 64px 0 0;

  @media (min-width: 1024px) {
    padding: 0 94px 0 0;
  }
`;
