import React from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
  const allToDos = useSelector((store) => store.todos.items);

  // filter completed/unCompleted
  const uncompletedTodos = allToDos.filter((todo) => !todo.isComplete)
  const completedTodos = allToDos.filter((todo) => todo.isComplete)

  return (
    <div>
        Completed: {allToDos.length} / {uncompletedTodos.length}
    </div>
  )
}

export default Counter
