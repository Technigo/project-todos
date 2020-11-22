import React from 'react';
import { useSelector } from 'react-redux';

import { TodoItem } from './TodoItem';
import { TodoInput } from './TodoInput';

const TodoSummary = () => {
  const list = useSelector(store => store.todos.list);
  const complete = list.items.filter(item => item.complete).length;
  return (
    <section>
      <h2>
        {complete}/{list.items.length} todo
        {list.items.length === 1 ? '' : 's'} complete
      </h2>
    </section>
  );
};

export default TodoSummary;
