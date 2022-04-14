import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import uniqid from 'uniqid'
import tasks from 'reducers/tasks'

const AddTask = () => {
    const [inputValue, setInputValue] = useState("")

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault()

     const newTask = {
        id: uniqid(),
        name: inputValue,
        isDone: false,
     }

        dispatch(tasks.actions.addItem(newTask))

        setInputValue("")
    }

    return (
        <form onSubmit={onFormSubmit}>
           <label>
               New task : &nbsp;
           <input type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            />
           </label>
           <button type="submit">Submit</button>
        </form>
    )
}

export default AddTask;
