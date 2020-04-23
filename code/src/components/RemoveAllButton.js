import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoStore } from '../reducers/todoStore'
import swal from 'sweetalert';


export const RemoveAllButton = () => {
  const item = useSelector((store)=> store.todoStore)
  console.log(item)
  const dispatch = useDispatch()
  
  
  const removeOnClick = (event) => {
    swal({
      title: "Sure?",
      text: "Once deleted, your todos are lost forever!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    })
    .then (dispatch(todoStore.actions.removeAllItems()))
  }

  return(
    <section>
    <a 
    className="remove-all-todo"
    onClick={removeOnClick}>Remove all todos</a>
    </section>
  )
}