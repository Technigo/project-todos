import React from 'react'

import { Header } from './Header'
import { AddTaskForm } from './AddTaskForm'
import { Tasks } from './Tasks'
import { TotalTasks } from './TotalTasks'
import { MainAppContainer, FormListContainer } from './styled components/TodoAppStyling'

export const TodoApp = () => {
    return (
        <MainAppContainer>
            <Header />
            <FormListContainer>
                <AddTaskForm />
                <Tasks />
            </FormListContainer>
            <TotalTasks />
        </MainAppContainer>
    )
}