import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { AddTask } from './AddTask';

import { Task } from './Task';

export const TaskList = () => {

  // Fetch the list of todos
  const tasks = useSelector((store) => store.tasks);
  const tasksTodo = tasks.items.filter((task) => task.complete === false)

  const dispatch = useDispatch();

  const handleRemoveAllButton = () => {
    dispatch(tasks.actions.removeAll())
  };

  return (
    <div className='list'>
      <CounterText>{tasksTodo.length}/{tasks.items.length} tasks uncompleted</CounterText>
      <AddTask />
      <ListofTasks>
        {tasks.items.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ListofTasks>

      <RemoveAllButton onClick={handleRemoveAllButton}><Emoji role="img" aria-label="Bin">🗑</Emoji> Remove all tasks!</RemoveAllButton>
    </div>
  );
};

const CounterText = styled.p`
  font-size: 10px;
  color: #8f8f8f;
`
const ListofTasks = styled.ul`
  padding: 0;
`
const RemoveAllButton = styled.button`
  background: none;
  border: 1px solid #869D7A;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-family: Segoe UI;
  font-weight: bold;
`
const Emoji = styled.span`
  font-size: 28px;
  color: #6e6e6e;
  padding-right: 3px;
`