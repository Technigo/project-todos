import React from 'react'

import assets from '../assets/icons/icons8-plus-48.png'

const AddTodoButton = ({ isAddInputFilled }) => {
  if (isAddInputFilled()) {
    return (
      <button className="add-button" type="submit">
        <img src={assets} alt="A plus icon" />
      </button>
    )
  } else {
    return (
      <button className="add-button" type="submit" disabled>
        <img src={assets} alt="A plus icon" />
      </button>
    )
  }
}
export default AddTodoButton
