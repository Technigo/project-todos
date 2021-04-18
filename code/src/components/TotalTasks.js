import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

export const TotalTasks = () => {
    const dispatch = useDispatch()

    const totalNumberOfTasks = useSelector((store) => (
        store.tasks.items.length
        ))
    


    const onClickClearAll = (event) => {
		event.preventDefault();
        dispatch(
            tasks.actions.clearAllTasks()
        )
	};
    return (
        <>
        <p>Total tasks: {totalNumberOfTasks}</p>
        <button onClick={onClickClearAll}>Clear all!</button>
        </>

    )
}