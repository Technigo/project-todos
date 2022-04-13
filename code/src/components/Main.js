import React from 'react'
import AddTasks from 'components/AddTasks'
import TaskList from 'components/TaskList'
import ToDoCounter from './Counter'
import Header from 'components/Header'
import Footer from 'components/Footer'
import TaskCounter from './Counter'

const Main = () => {
    return (
    <main>
        <Header />
        <AddTasks />
        <TaskList />
        <TaskCounter />
        <Footer />
    </main>
    )
}

export default Main