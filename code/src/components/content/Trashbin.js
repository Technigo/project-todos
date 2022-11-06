/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import cat from 'reducers/cat';
import tasks from 'reducers/tasks';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components/macro';
import bin from '../../Assets/trash.svg';

const Trashbin = ({ task }) => {
  const dispatch = useDispatch();
  const previousCat = useSelector((store) => store.cat.previousCat);
  const taskListLength = useSelector((store) => store.tasks.tasks).length;

  return (
    <TrashbinStyle
      title="Delete task"
      type="button"
      onClick={() => {
        // changes cat to 'smart' if task was completed before deleted
        // otherwise changes cat to 'smirking'
        if (task.isComplete) {
          setTimeout(() => {
            dispatch(cat.actions.changeCatAndPrevious('smart'));
          }, 1);
        } else {
          setTimeout(() => {
            dispatch(cat.actions.changeCatAndPrevious('smirking'));
          }, 1);
        }

        // hard coded values for changing back to the previous cat after 2 seconds
        setTimeout(() => {
          if (taskListLength === 10) {
            dispatch(cat.actions.changeCat('dizzy'));
          } else if (taskListLength === 5) {
            dispatch(cat.actions.changeCat('stressed'));
          } else if (taskListLength === 1) {
            dispatch(cat.actions.changeCat('angel'));
          } else {
            dispatch(cat.actions.changeCat(previousCat));
          }
        }, 1000);

        // finally, delete the task
        dispatch(tasks.actions.deleteTask(task.id));
      }}
    >
      <img src={bin} alt="trashbin" />
    </TrashbinStyle>
  );
};

export default Trashbin;

const TrashbinStyle = styled.button`
  height: 24px;
  width: fit-content;
  justify-self: flex-end;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;

  img {
    height: 24px;
    width: 24px;
  }
`;
