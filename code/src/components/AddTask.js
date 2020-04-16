import React, { useState } from 'react'
import 'components/AddTask.css'
import { useDispatch } from 'react-redux'
//tasks is the slice
import { tasks } from 'reducers/tasks'





export const AddTask = () => {
    const [newToDo, setNewToDo] = useState('')
    const dispatch = useDispatch()

    const handleFormSubmit = (event) => {
        event.preventDefault()
        // console.log('submit!', newToDo)
        dispatch(tasks.actions.addTask(newToDo))
        setNewToDo('')
    }

    return (
        <div className="add-task-container">
            <form
                onSubmit={handleFormSubmit}
                className="add-task-form">
                <label>
                    <input
                        className="input-task"
                        type="text"
                        required
                        value={newToDo}
                        placeholder="Write your todos "
                        onChange={event => setNewToDo(event.target.value)}  //.value is what ever we write in the input field
                    />
                </label>

                {/*** Form submit button ***/}
                <div>
                    <button
                        className="add-task-btn"
                        type="submit">
                        Add new Todo
                    </button >
                </div>


            </form>
        </div >
    )
}