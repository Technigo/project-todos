import React from 'react'
import { useDispatch } from 'react-redux'
import 'components/FooterBtn.css'
import { tasks } from 'reducers/tasks'



export const FooterBtn = (props) => {
    const dispatch = useDispatch()


    const handleNewDayButtonClick = () => {
        dispatch(tasks.actions.emptyTasks(props.task))

        console.log(handleNewDayButtonClick)
    }

    return (
        <div>
            <button
                className="footer-btn"
                type="button"
                onClick={handleNewDayButtonClick}>
                Clear All
            </button>
        </div>
    )
}