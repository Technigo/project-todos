import React from 'react'
import { useDispatch } from 'react-redux'
import 'components/FooterBtn.css'
import { tasks } from 'reducers/tasks'



export const FooterBtn = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <button
                className="footer-btn"
                type="button"
                onClick={() => dispatch(tasks.action.emptyTasks(tasks))}>
                New Day
            </button>
        </div>
    )
}