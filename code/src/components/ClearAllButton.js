import React from 'react'
import swal from 'sweetalert'
import { useDispatch } from 'react-redux'
import { tasklist } from 'reducers/tasklist'

export const ClearAllButton = ({ id }) => {
  const dispatch = useDispatch()

  const handleClearAll = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, your To Do list is lost forever!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(
            tasklist.actions.removeAll(id)
          )
        }
      })
  }
  

  return (
    <button
      onClick={handleClearAll}>
      Clear all
    </button>
  )
}


