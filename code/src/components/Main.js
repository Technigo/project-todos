import React from 'react';
import NewTodo from './NewTodo';
import ListOfTodos from './ListOfTodos'

const Main = () => {
  return (
    <section>
      <h1>Main section</h1>
      <NewTodo />
      <ListOfTodos />
    </section>
  )
}

export default Main