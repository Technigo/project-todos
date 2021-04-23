import React from 'react'
import { useSelector } from 'react-redux'

import Header from './Header'
import { AddTaskForm } from './AddTaskForm'
import ClearedPage from './ClearedPage'
import TaskList from './TaskList'
import TotalTasks from './TotalTasks'
import { MainAppContainer, AppHeader, FormListContainer, TotalTaskContainer } from './styled components/TodoAppStyling'

const TodoApp = () => {
    const totalNumberOfTasks = useSelector((store) => (
        store.tasks.items.length
    ))

    return (
        <MainAppContainer>
            <AppHeader>
                <Header />
            </AppHeader>
            <FormListContainer>
                <AddTaskForm />
                {totalNumberOfTasks === 0 ? <ClearedPage /> : <TaskList />}
            </FormListContainer>
            <TotalTaskContainer>
                {totalNumberOfTasks === 0 ? !<TotalTasks /> : <TotalTasks />}
            </TotalTaskContainer>
        </MainAppContainer>
    )
}

export default TodoApp