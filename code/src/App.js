import React from 'react'
import { Provider } from 'react-redux'
import { Header } from './components/Header'
import { AddTasks } from './components/AddTasks'
import { TaskList } from './components/TaskList'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <Provider>
      <div className="main-wrapper">
        <p>hello world</p>
        <Header />
        <AddTasks />
        <TaskList />
        <Footer />
      </div>
    </Provider>
  );
}
