import React from 'react';

import TodoList  from '../components/TodoList';
import Header from '../components/Header';

const Home = () => {
  return (   
    <main>      
      <Header />
      <TodoList />
    </main>
  )
};
export default Home;