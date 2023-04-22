import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const todoList = useSelector((addedTodos) => addedTodos.tickets.items)
  const [todoCount, setTodoCount] = useState(0);
  const [isDoneCount, setIsDoneCount] = useState(0);

  useEffect(() => {
    if (todoList.length === 0) {
      setTodoCount(0);
      setIsDoneCount(0);
      return;
    }

    if (todoList.length === 1 && todoList[0].id === '') {
      setTodoCount(0);
      setIsDoneCount(0);
      return;
    }

    setTodoCount(todoList.length);
    setIsDoneCount(todoList.filter((todo) => todo.isDone).length);
  }, [todoList]);

  return (
    <>
      <h1>Todo&apos;s</h1>
      <span>
        {isDoneCount}/{todoCount} done
      </span>
    </>
  )
}

export default Header;
