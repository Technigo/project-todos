import React from 'react';
import { useSelector } from 'react-redux';
import './Counter.css';

export const Counter = () => {
  const items = useSelector((store) => store.tasks.items)
  const completedTasks = items.filter((task) => task.isChecked);

  const Alldone = () => {
    if (items.length === 0) {
      return ''
    } else if (items.length === completedTasks.length) {
      return `🎉 ${completedTasks.length} / ${items.length}`
    } else {
      return `${completedTasks.length} / ${items.length} ✔`
    }
  }

  return (
    <div className="counter">
      <p className={items.length < completedTasks.length ? 'complete-todo' : ''}>
        {Alldone()}
      </p>
    </div>
  )
}