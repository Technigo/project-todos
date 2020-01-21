import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { shopping } from 'reducers/shopping'
import './AddItemForm.css'

export const AddItemForm = () => {
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(shopping.actions.addItem(name))
        setName('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                To buy:
                <input className="addToBuyBox"
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)} />
            </label>

            <button className="submitButton" type="submit">Add Item</button>
        </form>
    )
} 