import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'

const AddTask = () => {

    const [input, setInput] = useState('')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })

    const dispatch = useDispatch()

    const onAddTask = () => {
        setInput('')
        dispatch(tasks.actions.addTask(input))
    }

    const handleNewTask = (event) => {
        setInput(event.target.value)
    }

    return(
        <div>
            <label>
                <input 
                id="task"
                type="text"
                value={input}
                onChange={handleNewTask}
                ref={inputRef}
                />
                <button onClick={onAddTask} disabled={input.length < 5}>
                    <span>Add</span>
                </button>
            </label>
        </div>
    )
}

export default AddTask