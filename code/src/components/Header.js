/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const todoList = useSelector((addedTodos) => addedTodos.tickets.items)
  const [todoCount, setTodoCount] = useState(0);
  const [isDoneCount, setIsDoneCount] = useState(0);

  // initial state is only 0 after the clearAll-funtion has been used once, so it's necessary to check, lest it displays -1 in browser
  useEffect(() => {
    if (todoList.length === 0 || (todoList.length === 1 && todoList[0].id === 'initialId')) {
      setTodoCount(0);
      setIsDoneCount(0);
    }

    const filteredList = todoList.filter((todo) => todo.id !== 'initialId');
    setTodoCount(filteredList.length);
    console.log(filteredList.length)
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
