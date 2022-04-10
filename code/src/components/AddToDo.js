import React from 'react'
import { useState } from 'react'

export const AddToDo = () => {
    const [addToDo, setAddToDo] = useState('')
    
    const newToDo = () => {

    }
    return (
        <div>
            <input
              type='text'
              value={addToDo}
              onChange={e=>setAddToDo(e.target.value)}
              placeholder ='Add new todo'
              />
            <button 
              onClick={newToDo}
              >New todo</button>
        </div>

    )
}

//When clicking the button the newToDo should be added to the list
// the newToDo function will be invoked when the button is clicked

//Import and use useState for the input and button