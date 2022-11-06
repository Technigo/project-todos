/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState, useRef } from 'react';
import styled from 'styled-components/macro';
import { useDispatch, useSelector } from 'react-redux';
import tasks from 'reducers/tasks';
import cat from 'reducers/cat';
import plus from '../../Assets/plus.svg';

const NewTask = ({ bottomRef }) => {
  const input = useRef(null);
  const dispatch = useDispatch();
  const taskListLength = useSelector((store) => store.tasks.tasks).length;
  const [newTaskText, setNewTaskText] = useState('');

  return (
    <NewTaskForm
      onSubmit={(e) => {
        setTimeout(() => {
          dispatch(cat.actions.changeCat('surprised'));
        }, 1);
        e.preventDefault();
        dispatch(tasks.actions.addTask(newTaskText));
        setNewTaskText('');
        setTimeout(() => {
          dispatch(cat.actions.changeCat('typing'));
        }, 1000);

        bottomRef.current.scrollIntoView({
          block: 'end',
          behavior: 'smooth',
          inline: 'end'
        });
      }}
      onFocus={() => {
        dispatch(cat.actions.changeCatAndPrevious('typing'));
      }}
      onBlur={() => {
        if (taskListLength === 0) {
          dispatch(cat.actions.changeCat('angel'));
        } else if (taskListLength > 0 && taskListLength <= 4) {
          dispatch(cat.actions.changeCat('stressed'));
        } else if (taskListLength > 4 && taskListLength <= 9) {
          dispatch(cat.actions.changeCat('dizzy'));
        } else if (taskListLength > 9) {
          dispatch(cat.actions.changeCat('dead'));
        }
      }}
    >
      <NewTaskDiv>
        <NewTaskButton type="button" onClick={() => input.current.focus()}>
          <img src={plus} alt="plus" />
        </NewTaskButton>
        <NewTaskInput
          ref={input}
          type="text"
          placeholder="Add a new task..."
          value={newTaskText}
          onChange={(event) => setNewTaskText(event.target.value)}
        />
      </NewTaskDiv>
    </NewTaskForm>
  );
};

export default NewTask;

const NewTaskForm = styled.form`
  @media (min-width: 1024px) {
    width: 100%;
  }
`;

const NewTaskDiv = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;

  img {
    width: 24px;
    height: 24px;
  }

  @media (min-width: 1024px) {
    padding: 40px 0;

    img {
    }
  }
`;

const NewTaskButton = styled.button`
  padding: 0;
  margin-left: 20px;
  border: none;
  background: none;
  cursor: pointer;

  @media (min-width: 1024px) {
    margin-left: 50px;
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
