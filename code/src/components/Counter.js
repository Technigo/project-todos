import React from 'react';
import { useSelector } from 'react-redux';

import todos from '../reducers/todos'

const Counter = () => {
  const allToDos = useSelector((store) => store.todos.items);

  // filter completed/unCompleted
  const uncompletedTodos = allToDos.filter((todo) => !todo.isComplete);
  const completedTodos = allToDos.filter((todo) => todo.isComplete);

  // Show a count of all uncompleted todos
/*   const amountOfItems = () => {
    return uncompletedTodos.filter((todo) => todo.)
  } */

  return (
    <div>
        Completed: {uncompletedTodos.length} / {allToDos.length}
    </div>
  )
}

export default Counter
