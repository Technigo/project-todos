import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoTasks } from 'reducers/todoTasks'

// defined our state from react
export const AddTodoForm = () => {
    const [todoText, setTodoText] = useState('')
    const dispatch = useDispatch()
    //When the input changes it will trigger the event which is passed on and the name/input will change.

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(todoTasks.actions.addTodo(todoText))
        setTodoText('')
    }

    return (
        <div className="inputField">
            <form className=""
                onSubmit={handleSubmit}>
                    <button className="addTodoButton"
                        type="submit">
                            <span 
                                className="emoji" 
                                role="img" 
                                aria-label="add-sign">
                                    ➕
                            </span>
                    </button>
        
                <label className="inputLabel">
                    <input 
                    type="text" 
                    value={todoText} 
                    placeholder={"Add task"}
                    onChange={(event) => setTodoText(event.target.value)}/>
                </label>

            </form>
        </div>
    )
}
