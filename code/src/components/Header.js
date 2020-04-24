import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'

export const Header = () => {
  const user = useSelector(store => store.tasks.user)
  const dispatch = useDispatch()

  return (
    <header>
      <h1>{user && `${user}'s`} Todo list</h1>
      <a className="change-name" onClick={() => {
        dispatch(
          tasks.actions.changeUser(prompt("Välj namn")))
      }}>{user ? "Change" : "Add"} user name</a>
    </header>
  )
}