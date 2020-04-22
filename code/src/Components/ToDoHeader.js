import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import swal from 'sweetalert';
import { todoitem } from './Reducers/todoitem';

export const ToDoHeader = () => {

  const warningAlert = () => {

    swal({
      icon: "warning",
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover your tasks!",
      buttons: true,
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("All task cleared!", {
          icon: "success",
        });
        dispatch(todoitem.actions.removeAll())
      } else {
        swal("Ok, saving your tasks!");
      }
    });
  }

  const dispatch = useDispatch();
  const allItems = useSelector((store) => store.todoitem.items)

  const myDate = new Date();
  const myDay = myDate.getDate();
  const myMonthNumber = myDate.getMonth();
  const myYear = myDate.getFullYear();
  const myMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  return (
    <header>
      <div className="header-left">
        <h1>To do</h1>
        <p>{myDay} {myMonth[myMonthNumber]} {myYear}</p>
      </div>
      <div className="header-right">
        <p>{allItems.length} tasks</p>
        <button onClick={() => warningAlert()}>Clear all</button>
        {/* <button onClick={() => dispatch(todoitem.actions.removeAll())}>Clear all</button> */}
      </div>
    </header>
  )
}

