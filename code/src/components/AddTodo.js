import React, {useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { todos } from 'reducers/todos'

//state for input
export const AddTodo = () => {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('')

    const handleOnSubmit = e => {
        e.preventDefault()
        //What we add within the curly braces is the payload:
        dispatch(todos.actions.addOne({    
            text: inputValue,
                complete: false
        })
        )

        setInputValue('')
    }

    return (
        <form onSubmit={handleOnSubmit}>
            <input type="text"
            onChange={e => setInputValue(e.target.value)}
            value={inputValue}
            ></input>
            <input 
            type="submit"
            value="Add Todo"
            ></input>
        </form>
    )
} 