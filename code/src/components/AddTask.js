import React from 'react'

export const AddTask = () => {
  return (
    <>
      <form onSubmit={() => { }}>
        <label>
          Category:
          <select
            value={{}}
            onChange={() => { }}
          >
            <option value='To-Do'>To-Do</option>
            <option value='Shopping'>Shopping</option>
            <option value='Work'>Work</option>
            <option value='Family'>Family</option>
          </select>
        </label>
        <label>
          Task:
          <input
            type='text'
            placeholder='+ add a new task'
            onChange={() => { }}
          />
        </label>
        <button type='submit'>Add task</button>
      </form>
    </>
  )
}
