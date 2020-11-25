import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import styled from 'styled-components';

import { AddTask } from './AddTask';
import { Task } from './Task';
import { RemoveAll } from './RemoveAll';
import { MarkAll } from './MarkAll';

export const TaskList = ({ category }) => {

  // Fetch the list of todos
  const tasks = useSelector((store) => store.tasks);
  const tasksTodo = tasks.items.filter((task) => task.complete === false)

  // Filter on category
  /*const [categoryShown, setCategoryShown] = useState('');
  
  const task = useSelector((store) => {
    if (!category) return store.tasks.items
    else if (categoryShown === 'Show-all:') return store.todo.items
    else return store.tasks.items.filter((task) => task.category === category)
  });

  const handleChange = categoryShown => {
    setCategoryShown(category)
  };
*/
  // Filter on completed / uncompleted tasks
  const nonCompletedTasks = tasks.items.filter((task) => !task.complete);
  const completedTasks = tasks.items.filter((task) => task.complete)
  
  return (
    <div>
      <CounterText>{tasksTodo.length}/{tasks.items.length} tasks uncompleted</CounterText>
      <AddTask />
      <ListofTasks>
        {tasks.items.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ListofTasks>
      <button>Show uncompleted tasks</button>
      <ButtonWrapper>
        <RemoveAll />
        <MarkAll />
      </ButtonWrapper>
    </div>
  );
};

const CounterText = styled.p`
  font-size: 10px;
  color: #8f8f8f;
`;

const ListofTasks = styled.ul`
  padding: 0;
`;


const Category = styled.label`
  font-size: 14px;
`;

const Selector = styled.select`
  margin: 0 6px 10px 0;
  font-family: 'PT Sans', sans-serif;
  font-size: 14px;
  padding: 6px 0;
  border: none;
  border-bottom: 1px solid #869D7A;
  width: 80vw;
  max-width: 400px;
  cursor: pointer;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3px 0 10px 0;
`;