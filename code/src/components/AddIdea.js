import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { IdeaReducer } from 'reducers/reducers';

export const AddIdea = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddIdea = () => {
    dispatch(IdeaReducer.actions.addIdea(input))
    setInput('')
  }

  return (
    <section className="add">
      <div className="add-header">
        <div className="create-text">
          <h3>Add a new idea</h3>
        </div>
      </div>
      <div className="add-idea-container">
        <input
          type="text"
          className="add-input"
          value={input}
          onChange={(event) => setInput(event.target.value)} />
        <button
          type="button"
          className="add-button"
          onClick={onAddIdea}> ➕
        </button>
      </div>
    </section>
  )
}