import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Select from 'react-select';

import { AddTask } from './AddTask';
import { Task } from './Task';
import { RemoveAll } from './RemoveAll';
import { RemoveCompleted } from './RemoveCompleted';
// import { MarkAll } from './MarkAll';

import { SmallText, Emoji } from 'styles/GlobalStyles';

export const TaskList = ({ completed, uncompleted, all }) => {
  // Fetch the list of todos
  const tasks = useSelector(store => store.tasks.items);

  // Variable for getting the uncompleted tasks
  const nonCompletedTasks = tasks.filter(task => !task.complete);

  // Variable for getting the completed tasks
  const completedTasks = tasks.filter(task => task.complete);

  // Variables for counting the length of arrays
  const numberOfTasks = tasks.length;
  const numberOfCompletedTasks = tasks.filter(task => task.complete).length;
  const numberOfNonCompletedTasks = numberOfTasks - numberOfCompletedTasks;

  return (
    <div>
      <SmallText>{numberOfNonCompletedTasks}/{numberOfTasks} tasks left to complete</SmallText>
      <AddTask />
      {numberOfTasks === 0 ? (
        <DoneText>
          <Emoji>⭐ </Emoji>
          No todo's right now!
        </DoneText>
      ) : numberOfNonCompletedTasks === 0 && (
        <DoneText>
          <Emoji>💥 </Emoji>
            Yeeay, no more tasks todo! All are done!
        </DoneText>
      )}
      <ListofTasks id="tasklist">
        {all && tasks.map((task) => (
          <Task key={task.id} task={task} complete={task.complete} />
        ))}
        {completed && completedTasks.map((task) => (
          <Task key={task.id} task={task} complete={task.complete} />
        ))}
        {uncompleted && nonCompletedTasks.map((task) => (
          <Task key={task.id} task={task} complete={task.complete} />
        ))}
      </ListofTasks>
      {numberOfTasks > 0 && (
        <ButtonWrapper>
          <RemoveCompleted />
          <RemoveAll />
          {/* <MarkAll /> */}
        </ButtonWrapper>
      )}
    </div>
  );
};

const DoneText = styled.p`
  font-size: 14px;
  font-weight: bold;
`;

const CustomSelect = styled(Select)`
  max-width: 400px:
  margin: 0 6px 10px 0;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
`;

const ListofTasks = styled.ul`
  padding: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3px 0 10px 0;
`;