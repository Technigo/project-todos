import React, { useState } from "react"
import { useDispatch } from "react-redux"

import { toggleTask } from "reducers/toggleTask"


export const AddNewTask = ({ newTask }) => {

  const [saveTask, setSaveTask] = useState("")
  console.log(saveTask)
  const dispatch = useDispatch()

  return (
    <div className="add-new-list" >
      <form >
        <textarea value={saveTask}
          onChange={(e) => { setSaveTask(e.target.value) }}

        />
        <div>
          <button
            type="button"
            onClick={() => dispatch(toggleTask.actions.addTask(newTask))}>Save</button>
        </div>
      </form >
    </div >


  )

}