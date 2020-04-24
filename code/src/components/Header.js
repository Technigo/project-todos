import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const Header = () => {
  const user = useSelector(store => store.tasks.user)
  const dispatch = useDispatch()

  if (user === "") {
    dispatch(
      tasks.actions.changeUser(prompt("Välj namn")))
  }

  return (
    <header>
      <h1>{user}'s Todo List</h1>
      <button type="button" onClick={() => {
        dispatch(
          tasks.actions.changeUser(""))
      }}>Change user name</button>
    </header>
  )
}