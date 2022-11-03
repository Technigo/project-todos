import React, { useSelector } from 'react';

const Counter = () => {
  const remainingTasks = useSelector(
    (store) => store.tasks.items.filter((item) => !item.isComplete).length
  );

  return (
    <div>
    You have <span>{remainingTasks}</span> todos left
    </div>
  );
}

export default Counter;