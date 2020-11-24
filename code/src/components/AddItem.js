import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'

import  Add  from '../assets/add.png'
import { AddButton } from '../styling/AddItemStyling'



export const AddItem = () => {
    const [text, setText] = useState ('')

    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(todos.actions.addItem({text}))
        setText('')
    }
    return(
        <form onSubmit ={handleSubmit}>
            <label>
                <input
                  className="new"
                  placeholder="New todo"
                  type="text"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                />
            </label> 
                <button
                  className ="add"
                  type="submit">
                  <img src={Add} alt="plus" />
                </button>
        </form>
    )
}
/*

<ListAddButton onClick={() => dispatch(todos.actions.addItem({text}))}>Add one</ListAddButton>

*/