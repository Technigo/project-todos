import React from 'react'
import { useSelector } from 'react-redux'

const TodoCount = () => {
  const uncompleteTodos = useSelector(
    (store) => store.tasks.items.filter((item) => !item.isComplete).length
  );

  return (
    <p>
          today you have <span>{uncompleteTodos}</span> todos left
    </p>
  );
};

export default TodoCount;
