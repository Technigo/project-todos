import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { AddTask } from './AddTask';
import { Task } from './Task';
import { RemoveAll } from './RemoveAll';
import { RemoveCompleted } from './RemoveCompleted';

import { SmallText, Emoji } from 'styles/GlobalStyles';

export const TaskList = () => {

  // Fetch the list of todos
  const tasks = useSelector(store => store.tasks);
  const tasksTodo = tasks.items.filter(task => task.complete === false)

  // Variable for getting the uncompleted tasks
  const nonCompletedTasks = tasks.items.filter(task => !task.complete);

  return (
    <div>
      <SmallText>{tasksTodo.length}/{tasks.items.length} tasks left to complete</SmallText>
      <AddTask />
      {tasks.items.length === 0 ? (
        <DoneText>
          <Emoji>⭐ </Emoji>
          No todo's right now!
        </DoneText>
      ) : nonCompletedTasks.length === 0 && (
        <DoneText>
          <Emoji>💥 </Emoji>
            Yeeay, no more tasks todo! All are done!
        </DoneText>
      )}
      <ListofTasks>
        {tasks.items.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ListofTasks>
      {tasks.items.length > 0 && (
        <ButtonWrapper>
          <RemoveCompleted />
          <RemoveAll />
        </ButtonWrapper>
      )}
    </div>
  );
};

const DoneText = styled.p`
  font-size: 14px;
  font-weight: bold;
`

const ListofTasks = styled.ul`
  padding: 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3px 0 10px 0;
`;