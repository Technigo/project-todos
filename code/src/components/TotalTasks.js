import React from 'react'
import { useDispatch } from 'react-redux'

import { tasks } from '../reducers/tasks'
import { DeleteAllButton } from './styled components/TotalTasksStyling'

const TotalTasks = () => {
    const dispatch = useDispatch()

    const onClickDeleteAll = (event) => {
		event.preventDefault();
        dispatch(
            tasks.actions.deleteAllTasks()
        )
	}

    return (
            <DeleteAllButton 
                onClick={onClickDeleteAll}
            >   
                Delete all!
            </DeleteAllButton>
    )
}

export default TotalTasks