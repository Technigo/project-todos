import React from 'react';
import { useSelector } from 'react-redux';

export const AllTodos = () => {
  const allTodos = useSelector((store) => store.tasks)
  const completedTodos = allTodos.filter((task) => task.complete)
  return (
    <div className="header">
      <h1>My todo's</h1>
      <h4>You have completed: {completedTodos.length} / {allTodos.length}</h4>
    </div>
  )

  //  const totalTodos = useSelector((state) => {
  //    state.tasks.filter((task) => task.complete === true)
  //  })
  //  return(
  //    console.log(totalTodos.length),
  //    <h3> Total complete tasks: {totalTodos.length} </h3>
  // )
}