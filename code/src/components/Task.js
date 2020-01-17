import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import 'components/Task.css'

export const Task = (props) => {
    const dispatch = useDispatch()

    const handleCheckboxClick = () => {
        dispatch(tasks.actions.toggleNeedsMore(props.task.id))
    }

    const handleRemoveButtonClick = () => {
        dispatch(tasks.actions.removeTask(props.task.id))
        console.log(handleRemoveButtonClick)
    }

    return (
        <ul className="todo-list">
            <p className="strikethrough">{props.task.text}</p>
            <div className="checkbox-container">

                <input
                    className="checkbox" id="checkbox"
                    // className="checkbox"
                    type="checkbox"
                    checked={props.task.needsMore}
                    onChange={handleCheckboxClick}
                />
                {/* removing items/tasks */}
                <label for="checkbox">
                    <button
                        type="button"
                        onClick={handleRemoveButtonClick}>
                        <span role="img" aria-label="x">✖️</span>
                    </button>

                </label>
            </div>
        </ul >
    )
}