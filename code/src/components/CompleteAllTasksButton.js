import React from 'react';
import { useDispatch} from 'react-redux';
import styled from 'styled-components';

import tasks from '../reducers/tasks';

const ConmpleteAllTasksButton= () => {
  const dispatch = useDispatch();
  
  const onClear = () => {
    dispatch(tasks.actions.setAllTaskstoCompleted());
  };

  return (
    <div>
      <button onClick={onClear}>I have done it all!</button>
    </div> 
  )
}
export default ConmpleteAllTasksButton;