import React from 'react';
import { useSelector } from 'react-redux';

import Rocket from '../assests/icons8-rocket-96.png';
import Task from './Task';
import { TaskContainer, PlaceholderWrapper } from '../styling/styling';

const TaskList = () => {
  // fetch the tasks from the store
  const allTasksArray = useSelector((store) => store.tasks.items)

  return (
    <TaskContainer>
      {allTasksArray.map(task => <Task key={task.id} task={task} />)}
      {allTasksArray.length === 0 && (
        <PlaceholderWrapper>
          <img src={Rocket} alt='rocket placeholder'></img>
          <p>Huurraaay, no more tasks! You are done!</p>
        </PlaceholderWrapper>
      )}
    </TaskContainer>
  )
};

export default TaskList;