import React from 'react'
import { useDispatch } from 'react-redux'
import { list } from 'reducers/list'



export const RemoveAll = () => {
    const dispatch = useDispatch()
    
    const removeAllTasks = () => {
    dispatch(list.actions.removeAll())
}
    return(
        <>
        <button 
            type="button"
            onClick={removeAllTasks}>
            Remove all tasks
        </button>
        </>
    )
}