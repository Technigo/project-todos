import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'


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
                  placeholder="New todo"
                  type="text"
                  value={text}
                  onChange={(event) => setText(event.target.value)}
                />
            </label> 
                <button
                  type="submit">
                  Button
                </button>
        </form>
    )
}
/*

<ListAddButton onClick={() => dispatch(todos.actions.addItem({text}))}>Add one</ListAddButton>

*/