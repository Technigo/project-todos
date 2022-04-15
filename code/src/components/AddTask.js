import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import uniqid from 'uniqid'
import { NewTask } from 'styles'

import tasks from 'reducers/tasks'

const AddTask = () => {
    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault()

        const newTask = {
            id: uniqid(),
            text: inputValue,
            complete: false, 
        }

        dispatch(tasks.actions.addTask(newTask))

        setInputValue('')
    }

    return (
        <NewTask>
            <form onSubmit={onFormSubmit}>
                <label>
                    New task : &nbsp;
                    <input 
                        type="text"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)} 
                        className="newInput"
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </NewTask>
    )
}

export default AddTask