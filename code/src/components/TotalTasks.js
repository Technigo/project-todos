import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { tasks } from '../reducers/tasks'
import { CompletedTasksText, ClearButton } from './styled components/TotalTasksStyling'


export const TotalTasks = () => {
    const dispatch = useDispatch()

    const totalNumberOfTasks = useSelector((store) => (
        store.tasks.items.length
        ))
    
   //number of completed tasks in the list
    const completedTasks = useSelector((store) => (
        store.tasks.items.filter((task => task.completed)).length
        ))
    
    const onClickDeleteAll = (event) => {
		event.preventDefault();
        dispatch(
            tasks.actions.deleteAllTasks()
        )
	}

    return (
        <>
        <CompletedTasksText>
            Completed: {completedTasks}/{totalNumberOfTasks}
        </CompletedTasksText>
        <ClearButton 
            onClick={onClickDeleteAll}
        >   
            Delete All!
        </ClearButton>
        </>

    )
}