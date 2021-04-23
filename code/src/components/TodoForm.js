import React, { useState } from 'react'

const TodoForm = () => {
  const [value, setValue] = useState('');

  const onFormSubmit = (e) => {
    e.preventDefault();  
  } 

  return (
    <form onSubmit={onFormSubmit}> 
      <input
        type="text"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button type="submit">Add todo</button>
    </form>
  )
}

export default TodoForm
