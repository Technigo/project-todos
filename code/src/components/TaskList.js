import React from 'react';
import { useSelector } from 'react-redux';

const TaskList = () => {
  const todoList = useSelector((store) => store.todolist.items);
  return (
    <section>
      {todoList.map((singletask) => {
        return
        <form><input
          type="checkbox"
          key={singletask.id}
          value={singletask.id} />
        <label htmlFor="addTaskInput">
          {singletask.id}
        </label>
        </form>
      })}
    </section>
  )
}

export default TaskList;