/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faSquareCheck, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Timestamp } from './Timestamp';
import { DeleteTaskStyles, EachTaskStyles, TaskContentStyles, ToggleButtonStyles } from './EachTask.styles';

export const EachTask = ({ singleTask }) => {
  const dispatch = useDispatch();
  return (
    <EachTaskStyles>
      <ToggleButtonStyles>
        {!singleTask.complete && (<button type="button" onClick={() => dispatch(tasks.actions.toggleComplete(singleTask))}><FontAwesomeIcon icon={faSquare} /></button>)}
        {singleTask.complete && (<button type="button" onClick={() => dispatch(tasks.actions.toggleComplete(singleTask))}><FontAwesomeIcon icon={faSquareCheck} /></button>)}
      </ToggleButtonStyles>
      <TaskContentStyles>
        <p>{singleTask.task}</p>
        {/* <p>Scheduled: <Timestamp timeToConvert={singleTask.id} /></p> */}
        <p>Due: <Timestamp timeToConvert={singleTask.due} /></p>
        {/* <p>Completed: {singleTask.complete.toString()}</p> */}
      </TaskContentStyles>
      <DeleteTaskStyles>
        <button type="button" onClick={() => dispatch(tasks.actions.deleteTask(singleTask))}><FontAwesomeIcon icon={faTrashCan} /></button>
      </DeleteTaskStyles>
    </EachTaskStyles>
  )
}