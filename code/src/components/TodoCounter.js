import React from 'react';
import { useSelector } from 'react-redux';

const TodoCounter = () => {
  const todosCounter = useSelector((store) => store.todos.items);

  const completedTodos = todosCounter.filter(
    (singleTodo) => singleTodo.isComplete
  );

  return (
    <div className='counter-container'>
      <p className='completed-tasks'>
        <span className='counter-text'>Completed tasks: </span>
        {completedTodos.length}
      </p>
      <p className='counter'>
        <span className='counter-text'>Total To Do's: </span>
        {todosCounter.length}
      </p>
    </div>
  );
};

export default TodoCounter;
