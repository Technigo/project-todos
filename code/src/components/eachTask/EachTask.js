/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { useDispatch } from 'react-redux';
import { tasks } from 'reducers/tasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquare, faSquareCheck, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { Timestamp } from './Timestamp';

export const EachTask = ({ singleTask }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <p>--------------------------------------</p>
      {!singleTask.complete && (<button type="button" onClick={() => dispatch(tasks.actions.toggleComplete(singleTask))}><FontAwesomeIcon icon={faSquare} /></button>)}
      {singleTask.complete && (<button type="button" onClick={() => dispatch(tasks.actions.toggleComplete(singleTask))}><FontAwesomeIcon icon={faSquareCheck} /></button>)}
      <button type="button" onClick={() => dispatch(tasks.actions.deleteTask(singleTask))}><FontAwesomeIcon icon={faTrashCan} /></button>
      <p>Task: {singleTask.task}</p>
      <p>Scheduled: <Timestamp timeToConvert={singleTask.id} /></p>
      <p>Due: <Timestamp timeToConvert={singleTask.due} /></p>
      <p>Completed: {singleTask.complete.toString()}</p>
    </div>
  )
}