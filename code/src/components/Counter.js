import React from 'react';
import { useSelector } from 'react-redux';
import { Counting } from 'styles/Header';

const Counter = () => {
  const items = useSelector((store) => store.tasks.items)
  const completedTasks = items.filter((task) => task.complete);

  const Alldone = () => {
    if (items.length === 0) {
      return 'Add tasks'
    } else if (items.length === completedTasks.length) {
      return `All done ! ${completedTasks.length} / ${items.length}`
    } else {
      return `${completedTasks.length} / ${items.length} done`
    }
  }

  return (
    <Counting className={items.length < completedTasks.length ? 'complete-todo' : ''}>
      {Alldone()}
    </Counting>
  )
}

export default Counter;