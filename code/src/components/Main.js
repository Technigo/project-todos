import React from 'react';
import ToDoList from './ToDoList';
import Footer from './Footer';
import Header from './Header';
import TaskCount from './TaskCount';

const Main = () => {
  return (
    <main className="main-container">
      <section className="list-container">
        <Header />
        <ToDoList />
      </section>
      <TaskCount />
      <Footer />
    </main>
  )
}

export default Main;