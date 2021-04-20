import React from 'react'
import { useSelector } from 'react-redux'

import { Header } from './Header'
import { AddTaskForm } from './AddTaskForm'
import { ClearedPage } from './ClearedPage'
import { Tasks } from './Tasks'
import { TotalTasks } from './TotalTasks'
import { MainAppContainer, AppHeader, FormListContainer, TotalTaskContainer } from './styled components/TodoAppStyling'

export const TodoApp = () => {

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
                {totalNumberOfTasks === 0 ? <ClearedPage /> : <Tasks />}
            </FormListContainer>
            <TotalTaskContainer>
                {totalNumberOfTasks === 0 ? !<TotalTasks /> : <TotalTasks />}
            </TotalTaskContainer>
        </MainAppContainer>
    )
}