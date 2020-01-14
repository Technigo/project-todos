import React, { useState } from 'react'
import 'components/AddTask.css'
import { useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'



export const AddTask = ({ task }) => {
    const [addTask, setAddTask] = useState('')
    const dispatch = useDispatch()

    //     const handleFormSubmit = (event) => {
    //         event.preventDefault()
    //         setAddTask((previousTask) => [newTask, ...previousTask])
    // }

    return (
        <div className="add-task-container">
            <form onSubmit={(event) => event.preventDefault()}>
                <textarea
                    rows="1"
                    //minLength="5"
                    // maxLength="150"
                    onChange={(event) => setAddTask(event.target.value)}
                    value={task} //dont know if needed
                // required
                >
                </textarea>

                {/*** Form submit button ***/}
                <div>
                    <button className="add-task-btn"
                        // onClick={handleFormSubmit}
                        onClick={() => dispatch(tasks.actions.addTask(task))}
                        type="submit" >
                        Add new task
                    </button >
                </div>


            </form>
        </div>
    )
}