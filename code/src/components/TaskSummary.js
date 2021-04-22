import React from 'react';
import styled from 'styled-components';

import UnfinishedTasksCounter from './UnfinishedTasksCounter';
import CompleteAllTasksButton from './CompleteAllTasksButton';

const TaskSummary = () => {

  return (
    <div>
      <UnfinishedTasksCounter/>
      <CompleteAllTasksButton/>
    </div> 
  )
}
export default TaskSummary;