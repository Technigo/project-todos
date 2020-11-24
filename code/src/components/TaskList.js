import React from 'react';
import { useSelector} from 'react-redux';
import styled from 'styled-components';

import { AddTask } from './AddTask';
import { Task } from './Task';
import { RemoveAll } from './RemoveAll';

export const TaskList = () => {

  // Fetch the list of todos
  const tasks = useSelector((store) => store.tasks);
  const tasksTodo = tasks.items.filter((task) => task.complete === false)

  /*const [category, setCategory] = useState('');
  const tasks = useSelector((state) => {
    if (!category) return state.tasks.items
    else return state.tasks.items.filter((item) => item.category === category)
  });
*/
  return (
    <div>
      <CounterText>{tasksTodo.length}/{tasks.items.length} tasks uncompleted</CounterText>
      <AddTask />
      <ListofTasks>
        {tasks.items.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ListofTasks>
      <RemoveAll />
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