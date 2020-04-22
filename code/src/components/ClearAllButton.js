import React from 'react'
import swal from 'sweetalert'
import { useDispatch } from 'react-redux'
import { tasklist } from 'reducers/tasklist'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


import './style/ClearAllButton.css'

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
    <div className='container'>
      <button
        className='clear-all-button'
        onClick={handleClearAll}>
          <FontAwesomeIcon icon={faTrash} className='icon' />
          Clear all
      </button>
    </div>

  )
}


