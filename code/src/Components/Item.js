import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { tasks } from '../Reducers/tasks'

import { Button } from '../library/Button'
import { Listelement } from '../Styles/Listelement'
import { Checkbox } from './Checkbox'

export const Item = ({ item }) => {
  const dispatch = useDispatch()
  const [removeBtn, setRemoveBtn] = useState(true)
  //Where to put this?
  const [complete, setComplete] = useState(false)

  return (
    <Listelement>
      <Checkbox />
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
