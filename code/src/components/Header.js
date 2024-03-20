/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const todoList = useSelector((addedTodos) => addedTodos.tickets.items)
  const [todoCount, setTodoCount] = useState(0);
  const [isDoneCount, setIsDoneCount] = useState(0);

  // before the clearAll-funtion has been used once, there is an item in the todoList from start. It's necessary to check this, lest counter displays -1 in browser. Then check if the item in the array is the initial one and ignore it (set to 0 anyway)
  useEffect(() => {
    if (todoList.length === 0 || (todoList.length === 1 && todoList[0].id === 'initialId')) {
      setTodoCount(0);
      setIsDoneCount(0);
    }

    // if the object with initialId is there, create a new list to count from. Otherwise the invisible item is included in the count when the first user item is added
    const filteredList = todoList.filter((todo) => todo.id !== 'initialId');
    setTodoCount(filteredList.length);
    console.log(filteredList.length)
    setIsDoneCount(todoList.filter((todo) => todo.isDone).length);
  }, [todoList]);

  return (
    <>
      <h1>To-do&apos;s</h1>
      <span>
        {isDoneCount}/{todoCount} done
      </span>
    </>
  )
}

export default Header;
