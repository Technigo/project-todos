/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import cat from 'reducers/cat';
import tasks from 'reducers/tasks';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import deleteAll from '../../Assets/delete-all.svg';

const DeleteAll = () => {
  const dispatch = useDispatch();
  const taskListLength = useSelector((store) => store.tasks.tasks).length;

  return (
    <DeleteAllStyle
      disabled={taskListLength === 0}
      title="Delete all tasks"
      type="button"
      onClick={() => {
        const deleteResponse = window.confirm(
          'Are you sure you want to delete all tasks?'
        );

        // Delete all tasks if deleteResponse is true
        if (deleteResponse) {
          setTimeout(() => {
            dispatch(cat.actions.changeCatAndPrevious('devil'));
          }, 1);

          setTimeout(() => {
            dispatch(cat.actions.changeCat('angel'));
          }, 1000);
          dispatch(tasks.actions.deleteAllTasks());
        }
      }}
    >
      <img src={deleteAll} alt="trashbin" />
    </DeleteAllStyle>
  );
};

export default DeleteAll;

const DeleteAllStyle = styled.button`
  position: absolute;
  right: 0;
  bottom: 10%;
  height: 30px;
  background: none;
  border: none;
  cursor: ${(props) => (props.disabled ? 'inherit' : 'pointer')};

  padding: 0;

  opacity: ${(props) => (props.disabled ? '0.4' : '1')};

  img {
    height: 30px;
    width: 30px;
  }

  @media (min-width: 1024px) {
    margin-right: 10px;
  }
`;
