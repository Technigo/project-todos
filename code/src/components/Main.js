import React from 'react';
import ToDoList from './ToDoList';
import Footer from './Footer';
import Header from './Header';
import TaskCount from './TaskCount';

const Main = () => {
  return (
    <main className="main-container">
      <Header />
      <TaskCount />
      <section className="list-container">
        <ToDoList />
      </section>
      <Footer />
    </main>
  )
}

export default Main;