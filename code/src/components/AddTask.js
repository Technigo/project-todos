import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import uniqid from 'uniq'

import tasks from 'reducers/tasks'


const AddTask = () => {

    const [inputValue, setInputValue] = useState("")
    
    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
    event.preventDefault()

    const newTask = {
        id: uniqid(),
        name: inputValue,
        isDone: false,
    }
    
    dispatch(tasks.actions.addItem(newTask))

    setInputValue('')
    }

    return (
        <form onSumbit={onFormSubmit}>
            
           <label>
               New task: &nbsp;
           <input 
            type="text"
            value={inputValue} 
            onChange={e => setInputValue(e.target.value)} />

           </label>
           &nbsp;
        <button type="submit">Submit</button>
        </form>

    )
}


export default AddTask