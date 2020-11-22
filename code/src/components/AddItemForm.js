import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

export const AddItemForm = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [dueDate, setDueDate] = useState()

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(todos.action.addItem({ name, category, dueDate }))
        setName('')

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                type='text'
                value={name}
                onChange={(event) => setName(event.target.value)
                }
                />

                <button type='submit'>Add Item</button>
            </label>
        </form>
    )
}