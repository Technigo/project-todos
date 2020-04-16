import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import 'components/Task.css'

export const Task = (props) => {
    const dispatch = useDispatch()

    const handleCheckboxClick = () => {
        dispatch(tasks.actions.toggleCompleted(props.task.id))
    }

    const handleRemoveButtonClick = () => {
        dispatch(tasks.actions.removeTask(props.task.id))
        console.log(handleRemoveButtonClick)
    }

    return (
        <section className="todo-list">

            <ul className={props.task.needsMore ? 'checked' : 'unchecked'}>
                <span className="text">
                    {props.task.text}
                </span>

                <div>
                    <label>
                        <input
                            className="checkbox"
                            type="checkbox"
                            checked={props.task.needsMore}
                            onChange={handleCheckboxClick}
                        />
                        <span className="fakeCheckbox" />
                    </label>
                    {/* removing items/tasks */}
                    <label>
                        <button className="styled-btn"
                            type="button"
                            onClick={handleRemoveButtonClick}>
                            <span
                                role="img"
                                aria-label="x"
                            >✖️</span>
                        </button>
                    </label>
                </div>
            </ul >
        </section>
    )
}