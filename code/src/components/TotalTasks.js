import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../reducers/tasks'

export const TotalTasks = () => {
    const dispatch = useDispatch()

    const onClickClearAll = (event) => {
		event.preventDefault();
        dispatch(
            tasks.actions.clearAllTasks()
        )
	};
    return (
        <>
        <p>Total tasks: </p>
        <button onClick={onClickClearAll}>Clear all!</button>
        </>

    )
}