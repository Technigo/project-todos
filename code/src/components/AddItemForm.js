import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import '../index.css'

export const AddItemForm = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    const [dueDate, setDueDate] = useState()

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(todos.actions.addItem({ name, category,  dueDate }))
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
                
            </label>
            <label>
                Category:
                <select
                value={category}
                onChange={(event) => setCategory(event.target.value)
                }>
                    <option value='🧃'>Drinks</option>
                    <option value='🥕'>Veggies</option>
                    <option value='🍌'>Fruits</option>
                    <option value='🍬'>Candy</option>
                    <option value='🥩'>Meats</option>
                    <option value='🧀'>Dairy</option>



                </select>
            </label>
            <div className="add-items-button">
                <button type='submit'>Add Item</button>
                </div>
        </form>
    )
}