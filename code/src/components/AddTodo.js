import React from 'react'

const AddTodo = () => {

  return (
    <form className="todo-input-form" onSubmit={0}>
      <label className="" htmlFor="thoughts">
        Add todo
        </label>
      <input className="input-thought"
        id=""
        type="text"
        value={0}
        onChange={0}
      />
      <button className="send-button" type="submit">+</button>
    </form>
  )

}

export default AddTodo