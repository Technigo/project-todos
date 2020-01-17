import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { list } from 'reducers/list'

export const AddTodo = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(list.actions.addTask(name))
        setName('')
      }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type="text" 
                    value={name} 
                    onChange={(event) => setName(event.target.value)}/>
            </label>
            <button type="submit">Submit!</button>
        </form>
        
    )
} 