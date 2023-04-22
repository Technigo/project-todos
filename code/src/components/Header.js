import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const todoList = useSelector((addedTodos) => addedTodos.tickets.items)
  console.log(todoList)
  const [todoCount, setTodoCount] = useState(todoList.length);
  const [isDoneCount, setIsDoneCount] = useState(0);

  useEffect(() => {
    setTodoCount(todoList.length);
    setIsDoneCount(todoList.filter((todo) => todo.isDone).length);
  }, [todoList]);
  console.log(isDoneCount)
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