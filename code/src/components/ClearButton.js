import React from "react"
import { useDispatch, useSelector } from "react-redux"


import { tasks } from '../reducers/tasks'
import { dialogs } from '../reducers/dialogs'

import { Dialog } from '../components/Dialog'

import "./removebuttons.css"

export const ClearButton = () => {
  const dispatch = useDispatch()
  const allDialogs = useSelector((store) => store.dialogs)

  const removeAllHandler = () => {
    dispatch(dialogs.actions.openDialog('ClearAll'))
    // dispatch(tasks.actions.removeAllTasks())

  }


  return (
    <>
      <button className="remove-all-btn" type="button" onClick={() => { removeAllHandler() }} >
        <span className="remove-all-btn-text" role="button" aria-label="remove">CLEAR ALL</span>
      </button >
      <Dialog
        title="Do you want to clear all?"
        supportingText="This will clear all task permanently and you can not undo it."
        primaryBtnText="Yes"
        secondaryBtnText="Cancel"
        showDialog={allDialogs.dialog2}
      />
    </>
  )
}