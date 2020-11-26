import React, { useState } from 'react';
import { useSelector} from 'react-redux';
import styled from 'styled-components';

import { AddTask } from './AddTask';
import { Task } from './Task';
import { RemoveAll } from './RemoveAll';
import { MarkAll } from './MarkAll';

import { SmallText, Emoji } from 'styles/GlobalStyles';

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
  const completedTasks = tasks.items.filter((task) => task.complete);

  const [filter, setFilter] = useState('');
  const handleSubmit = () => {
    setFilter('');
  };
  
  return (
    <div>
      <SmallText>{tasksTodo.length}/{tasks.items.length} tasks uncompleted</SmallText>
      <AddTask />
      {tasks.items.length === 0 ? (
        <DoneText>
          <Emoji>⭐ </Emoji>
          No todo's right now!
        </DoneText>
      ): nonCompletedTasks.length === 0 && (
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
      <ButtonWrapper>
        <RemoveAll />
        <MarkAll />
      </ButtonWrapper>

      <label>
        <select
          value={filter.value}
          onChange={handleSubmit}
        >
          <option value=''>Show all</option>
          <option value={nonCompletedTasks}>Uncompleted tasks</option>
          <option value={completedTasks}>Completed tasks</option>
        </select>
      </label>
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