import React from 'react';
import AddTask from './AddTask';
import ToDoList from './ToDoList';

const ListPage = () => {
  return (
    <main className="main-container">
      <AddTask />
      <section className="list-container">
        <ToDoList />
      </section>
    </main>
  )
}

export default ListPage;