import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const todoList = useSelector((addedTodos) => addedTodos.tickets.items)
  console.log(todoList)
  const [todoCount, setTodoCount] = useState(todoList.length);
  const [isDoneCount, setIsDoneCount] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line max-len
    // checks if the one item in the todolist is the intial one with the id of empty string, and if so it sets the counts to 0. Otherwise the "invisible" first item is counted and the empty state has a counter that displays 0/1
    if (todoList.length === 1 && todoList[0].id === '') {
      setTodoCount(0);
      setIsDoneCount(0);
      return;
    }
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