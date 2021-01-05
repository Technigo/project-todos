import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'
import '../index.css'

export const AddItemForm = () => {
    const [name, setName] = useState('')
    const [category, setCategory] = useState('')
    
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(todos.actions.addItem({ text:name, category:category }))
        setName('')
    }

    return (
        <div className="form">
        <form onSubmit={handleSubmit}>
            <div className="form-name">
            <label>
                Name:
                <input
                    type='text'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

            </label>
            </div>
            <div className="form-category">
            <label>
                Category:
                <select
                    value={category}
                    onChange={(event) => setCategory(event.target.value)}
                    >
                    <option value=''>select...</option>
                    <option value='🧃'>Drinks</option>
                    <option value='🥕'>Veggies</option>
                    <option value='🍌'>Fruits</option>
                    <option value='🍬'>Candy</option>
                    <option value='🥩'>Meats</option>
                    <option value='🧀'>Dairy</option>
                </select>
            </label>
            </div>
            {/* <lable>
                Due dueDate
                <DatePicker onChange={(date) => setDueDate(date)} value={dueDate} />
            </lable> */}
            <div className="add-items-button">
                <button type='submit'>Add Item</button>
            </div>
           
        </form>
        </div>
    )
}