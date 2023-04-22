/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const todoList = useSelector((addedTodos) => addedTodos.tickets.items)
  console.log(todoList)
  const [todoCount, setTodoCount] = useState(Math.max(todoList.length - 1, 0)); // Math.max() returns the highest number, so we can use it to not display a negative number when there are no user-added items. Without subratcting 1, the counter would jump from 0 to 2 when the first user item is added.
  const [isDoneCount, setIsDoneCount] = useState(0);

  useEffect(() => {
    // checks if the one item in the todolist is the intial one with the id of empty string, and if so it sets the count to 0. Otherwise the "invisible" first item is counted and the empty state has a counter that displays 0/1
    if (todoList.length === 1 && todoList[0].id === '') {
      setTodoCount(0);
      setIsDoneCount(0);
      return;
    }
    setTodoCount(todoList.length - 1);
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