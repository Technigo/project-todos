/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import newTodo from 'reducers/newTodo';

const AddTodoItem = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTodo = () => {
    dispatch(newTodo.actions.addTodo(input))
    setInput('')
  }

  return (
    <form className="form-inline mt-3 mb-3">
      <h1>My to do list</h1>
      <label className="sr-only">Name</label>
      <input
        type="text"
        className="form-control mb-2 mr-sm-2"
        placeholder="Add todo..."
        value={input} />
      {(event) => setInput(event.target.value)}
      <button type="submit" className="btn btn-primary mb-2" onClick={onAddTodo}>
        Submit
      </button>
    </form>
  )
}
export default AddTodoItem