import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const NewItem = () => {
const [newTodo, setNewTodo] = useState('')

  return (
    <>
    <input
      type="text"
      value={newTodo}
      onChange={ () => setNewTodo()}
     />
    <button 
      className="add-button"
    >
      add new
    </button> 
    </>
  )  
}

export default NewItem