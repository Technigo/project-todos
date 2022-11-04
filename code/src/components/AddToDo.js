import React, { useState } from 'react'
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux'
import { TaskReducer, IdeaReducer } from 'reducers/reducers';

export const AddTask = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTask = (event) => {
    event.preventDefault();
    dispatch(TaskReducer.actions.addTask(input))
    setInput('')
  }

  return (
    <section className="add">
      <div className="add-header">
        <div className="create-text">
          <Text>Add a new task</Text>
        </div>
      </div>
      <div className="add-task-container">
        <input
          type="text"
          className="add-input"
          value={input}
          onChange={(event) => setInput(event.target.value)} />
        <button
          type="button"
          className="add-button"
          onClick={onAddTask}> ➕
        </button>
      </div>
    </section>
  )
}

export const AddIdea = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddIdea = () => {
    dispatch(IdeaReducer.actions.addIdea(input))
    setInput('')
  }

  return (
    <section>
      <div>
        <Text>Add a new idea</Text>
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(event) => setInput(event.target.value)} />
        <button
          type="button"
          onClick={onAddIdea}> ➕
        </button>
      </div>
    </section>
  )
}

const Text = styled.h2`
color: #ff999b;
`