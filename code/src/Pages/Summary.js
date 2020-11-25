import React from 'react'
import { useDispatch } from 'react-redux'
import { tasks } from '../Reducers/tasks'

import { List } from '../Components/List'
import { UserInput } from '../Components/UserInput'
import { Button } from '../library/Button'

export const Summary = () => {

    
  const dispatch = useDispatch()

  return (
    <>
      <UserInput />
      <List/>
      <Button onClick={() => dispatch(tasks.actions.removeAll())}>
        Clear List
      </Button>
    </>
  )
}
