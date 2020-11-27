import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { tasks } from '../Reducers/tasks'

import { Button } from '../library/Button'
import { Listelement } from '../Styles/Listelement'
import { Checkbox } from './Checkbox'

export const Item = ({ item }) => {
  const dispatch = useDispatch()
  const [removeBtn, setRemoveBtn] = useState(true)

  const handleCheckboxClick = () => {
    console.log('This works!')
    dispatch(tasks.actions.toggleDone({ id: item.id}))
  }

  return (
    <Listelement>
      <Checkbox done={item.done} onChangeHandler={handleCheckboxClick}/>
      {item.text}
      <Button
        removebtn={removeBtn}
        onClick={() =>
          dispatch(tasks.actions.removeItem({ id: item.id }))
        } //item here is the prop referring to taskInfo
      >
        -
      </Button>
    </Listelement>
  )
}
