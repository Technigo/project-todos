/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import HandleTODO from './HandleTODO';
import ClearList from './ClearList';

// eslint-disable-next-line max-len
// what we call addedTodos here is the store, we can reference it however we want. So we go to the store, which has a slice named tickets, and we look at the property "items". Whenever the items-array is changed, the pokemonList get's notified thanks to the useSelector, and gets updated
const TODOList = () => {
  const [selectedTODO, setSelectedTODO] = useState(null); // mark if a todo is clicked
  const todoList = useSelector((addedTodos) => addedTodos.tickets.items)
  const [todoCount, setTodoCount] = useState(todoList.length);

  useEffect(() => {
    setTodoCount(todoList.length)
  }, [todoList]);

  const handleTODOClick = (item) => {
    if (item === selectedTODO) {
      setSelectedTODO(null); // deselect if clicked again
    } else {
      setSelectedTODO(item); // when one of the todo's is clicked, HandleTODO is mounted
    }
  };

  return (
    <>
      <section>
        {todoList.map((singleTodo) => {
          const isSelected = singleTodo === selectedTODO;
          return <div key={singleTodo.id}>
            <button type="button" onClick={() => handleTODOClick(singleTodo)}>
              {singleTodo.name}
            </button>
            {isSelected && <HandleTODO item={singleTodo} />}
          </div>;
        })}
      </section><span>
        Todos: {todoCount}
        <ClearList />
      </span>
    </>
  )
}

export default TODOList;