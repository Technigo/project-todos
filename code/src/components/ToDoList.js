import React from 'react';
import { useSelector } from 'react-redux';

const ToDoList = () => {
  const pokemonList = useSelector((store) => store.tasks.items)
  return (
    <section>
      <ul>
        {pokemonList.map((singleTodo) => {
          return <li key={singleTodo.id}>{singleTodo.description}</li>
        })}
      </ul>
    </section>
  )
}

export default ToDoList;