import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { list, todolist } from 'reducers/todolist'
import { taskContainer } from 'components/taskContainer.css'



export const AddTaskForm = () => {
    const dispatch = useDispatch()

    const [inputValue, setInputValue] = useState("")

    const handleOnSubmit = (e) => {
        console.log(inputValue)
        e.preventDefault()

        dispatch(todolist.actions.addTodo({
            description: inputValue,
            done: false
        })
        )
        setInputValue("")
    }

return (
    <section className='task-container'>
    <form onSubmit={handleOnSubmit}>         
        <lable>
            Add task   
            <input
            type='text'
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            />
        </lable>
        <button 
        type='submit'
        value='Add task*'
        >+</button>
    </form>
</section>
)
}