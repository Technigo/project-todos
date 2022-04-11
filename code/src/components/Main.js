import React from 'react'
import AddTasks from 'components/AddTasks'
import TaskList from 'components/TaskList'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Main = () => {
    return (
    <main>
        <Header />
        <AddTasks />
        <TaskList />
        <Footer />
    </main>
    )
}

export default Main