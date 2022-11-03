import React from 'react';
import { useSelector } from 'react-redux';
import { Counting } from 'styles/Header';

const Counter = () => {
  const items = useSelector((store) => store.tasks.items)
  const completedTasks = items.filter((task) => task.complete);

  return (
    <Counting>
      {items.map((task) => <Counting key={task.id} task={task} />)}
      {completedTasks.length} / {items.length} done
    </Counting>
  )
}

export default Counter;