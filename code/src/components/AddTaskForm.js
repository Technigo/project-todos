import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { list, todolist } from 'reducers/todolist'
import { taskContainer } from 'components/taskContainer.css'
import { button } from 'components/button.css'



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
    <section className=''>
        <h2>Add task</h2> 
        <div>  
            <form onSubmit={handleOnSubmit}>         
                <lable> 
                    <input
                    type='text'
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue}
                    />
                </lable>
                <button className="button"
                    type='submit'
                    value='Add task*'
                >+</button>
            </form>
        </div>
</section>
)
}