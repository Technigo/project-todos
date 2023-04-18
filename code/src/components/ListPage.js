import React from 'react';
import AddTask from './AddTask';
import CheckboxToDoList from './CheckboxToDoList';

const ListPage = () => {
  return (
    <section className="list-page-container">
      <AddTask />
      <CheckboxToDoList />
    </section>
  )
}

export default ListPage;