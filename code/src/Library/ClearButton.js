import React from "react"
import { useDispatch } from "react-redux"

import { todo } from "../Reducers/todo"
import Swal from 'sweetalert2'

export const ClearButton = () => {
  const dispatch = useDispatch()
   
  const hanlderemoveAll = () => {
    Swal.fire({
      background: 'url(https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#4BC0C8',
      cancelButtonColor: '#FEAC5E',
      confirmButtonText: 'Yes, delete all!'
    })
    .then((removeAll) => {
      if (removeAll) {
        dispatch (todo.actions.removeAll())
        Swal.fire({
          background: 'url(https://images.pexels.com/photos/1831234/pexels-photo-1831234.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940)',
          title: 'Deleted!',
          text: 'Your to do list has been deleted.',  
       })
      } 
    })
  }

  return (
    <button
      className="clear-button"
      onClick={hanlderemoveAll} 
    >
      <span className="clear-button-before">Remove All</span>
      <span className="clear-button-after">Are you sure?</span>
    </button>
  )
}