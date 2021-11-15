import React from 'react';

const TotalTodos = ({ tasks, completedTodos }) => {
  return (
    <div>
      Completed:
      {completedTodos.length}/{tasks.length}
    </div>
  );
};

export default TotalTodos;
