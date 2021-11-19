import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import quests from '../reducers/quests'

const AddQuest = () => {
  const [input, setInput] = useState('')

  const dispatch = useDispatch()

  const onAddTask = () => {
    dispatch(quests.actions.addQuest(input))
    // empty the text field
    setInput('')
  }

  return (
    <div className='add-quest'>
      <input
        type='text'
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder='Add Quest...'
      />
      <button type='button' onClick={onAddTask}>
        Add Quest
      </button>
    </div>
  )
}

export default AddQuest
