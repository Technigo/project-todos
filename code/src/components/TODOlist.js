import React from 'react';
import { useSelector } from 'react-redux';

// eslint-disable-next-line max-len
// what we call addedTodos here is the store, we can reference it however we want. So we go to the store, which has a slice named TODOS, and we look at the property "items". Whenever the items-array is changed, the pokemonList get's notified thanks to the useSelector, and gets updated
const TODOlist = () => {
  const todoList = useSelector((addedTodos) => addedTodos.TODOS.items)
  return (
    <section>
      <ul>
        {todoList.map((singleTodo) => {
          return <li key={singleTodo.id}> {singleTodo.name}</li>
        })}
      </ul>
    </section>
  )
}

export default TODOlist;