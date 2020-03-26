import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTask } from '../reducers/TasksSlice' 

const mapDispatch = { addTask }

const AddTask = ({ addTask }) => {

  const [value, setValue] = useState('')

  const handleChange = (e) => setValue(e.target.value)

  const handleSubmit = (e) => {
    e.preventDefault()
    addTask(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Add input</label>
        <input type="text" value={value} onChange={handleChange} />
        <button type="submit">Add</button>
      </div>
    </form>
  )
}

export default connect(
  null,
  mapDispatch
)(AddTask)