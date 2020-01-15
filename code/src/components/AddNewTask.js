import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { addNewTask } from "reducers/addNewTask"


export const AddNewTask = () => {

  const [sendTask, setSendTask] = useState("")
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addNewTask.actions.addTask(sendTask))
    setSendTask("")
  }

  return (

    <form className="add-new-list" onSubmit={handleSubmit}>
      <label>
        ADD NEW TASK
          <input type="text" value={sendTask} onChange={(event) => setSendTask(event.target.value)} />
      </label>
      <button
        type="submit">Save</button>
    </form >



  )

}