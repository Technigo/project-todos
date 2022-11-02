import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import ToDo from 'reducers/todo';

export const AddToDo = () => {
  const dispatch = useDispatch()
  const [newToDo, setNewToDo] = useState('');

  const onFormSubmit = (event) => {
    event.preventDefault();

    const postNewToDo = { id: 1,
      name: newToDo,
      complete: false }

    dispatch(ToDo.actions.addToDo(postNewToDo))
    setNewToDo(' ')
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h2>Add ToDo</h2>
      <textarea
        className="TextArea"
        value={newToDo}
        onChange={(event) => setNewToDo(event.target.value)} />
      <button className="Submit" type="submit">❤️ Add ToDo</button>
    </form>
  )
}

