import React from 'react'
import { useDispatch } from 'react-redux'
import { ToDoList } from 'reducers/ToDoList'
import 'components/clearAll.css'

export const ClearAll = () => {
    const dispatch = useDispatch()

    return (
        <button type="button" className="clearAllButton" onClick={() => dispatch(ToDoList.actions.clearList())}>I'm Done!
        <span class="tooltiptext">Clear All</span>
        </button>
    )
}