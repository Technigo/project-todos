/* eslint-disable max-len */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/jsx-closing-tag-location */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tickets from 'reducers/tickets';
import vault from 'reducers/vault';
import HandleTODO from './HandleTODO';
import ClearList from './ClearList';

// what we call addedTodos here is the store, we can reference it however we want. So we go to the store, which has a slice named tickets, and we look at the property "items". Whenever the items-array is changed, the pokemonList get's notified thanks to the useSelector, and gets updated

// this component displays the todo items
const TODOList = () => {
  const todoList = useSelector((addedTodos) => addedTodos.tickets.items)
  const [selectedTODO, setSelectedTODO] = useState(null); // take note if a todo is clicked
  const [todoCount, setTodoCount] = useState(todoList.length); // to keep track of how many todo's there are and display the number
  const dispatch = useDispatch();

  useEffect(() => {
    const localStorageTickets = localStorage.getItem('ticketsList');
    console.log(localStorageTickets)
    if (localStorageTickets) {
      try {
        const parsedTickets = JSON.parse(localStorageTickets);
        dispatch(tickets.actions.setupStore(parsedTickets));
        setTodoCount(todoList.length);
      } catch (error) {
        console.error(error);
      }
    }
    const localStorageSavedTodos = JSON.parse(localStorage.getItem('vaultList'));
    if (localStorageSavedTodos) {
      dispatch(vault.actions.setupStore(localStorageSavedTodos));
    }
  }, [dispatch, todoList.length]);

  const ticketsList = useSelector((store) => store.tickets.items);
  const vaultList = useSelector((store) => store.vault.items)

  const handleTODOClick = (item) => {
    if (item === selectedTODO) {
      setSelectedTODO(null); // deselect if clicked again
    } else {
      setSelectedTODO(item); // when one of the todo's is clicked, HandleTODO is mounted
    }
  };
  console.log(ticketsList, vaultList)
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