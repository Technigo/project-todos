import React from 'react'
import { useDispatch } from 'react-redux'

import { tasks } from '../Reducers/tasks'

import { Button } from '../library/Button'
import { Listelement } from '../Styles/Listelement'
import { Checkbox } from './Checkbox'
import { Text, Span } from '../Styles/Texts'

import moment from 'moment'

export const Item = ({ item }) => {
  const dispatch = useDispatch()

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.toggleDone({ id: item.id}))
  }

  return (
    <Listelement>
      <Checkbox done={item.done} onChangeHandler={handleCheckboxClick}/>
      <Text stroke={item.done ? true : ''}>{item.text}<Span>Created: {moment(item.created).fromNow()}</Span></Text> {/* I get an error when the stroke is set to true, but don't know how to solve it */}
      <Button
        removebtn={true}
        onClick={() =>
          dispatch(tasks.actions.removeItem({ id: item.id }))
        }
      >
        -
      </Button>
    </Listelement>
  )
}
