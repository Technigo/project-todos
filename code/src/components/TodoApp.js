import React from 'react'

import { Header } from './Header'
import { AddTaskForm } from './AddTaskForm'
import { Tasks } from './Tasks'
import { TotalTasks } from './TotalTasks'
import { MainAppContainer, AppHeader, FormListContainer, TotalTaskContainer } from './styled components/TodoAppStyling'

export const TodoApp = () => {
    return (
        <MainAppContainer>
            <AppHeader>
                <Header />
            </AppHeader>
            <FormListContainer>
                <AddTaskForm />
                <Tasks />
            </FormListContainer>
            <TotalTaskContainer>
                <TotalTasks />
            </TotalTaskContainer>
        </MainAppContainer>
    )
}