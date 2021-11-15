import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const items = useSelector(store => store.todos.items);
  const completedTasks = items.filter(item => item.isComplete);
  return (
    <div>
      tasks done: {completedTasks.length}/{items.length}
    </div>
  );
};
export default Header;
