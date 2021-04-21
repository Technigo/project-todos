import React from 'react'
import { useDispatch } from 'react-redux'
import { format } from 'date-fns'
import { Checkbox } from '@material-ui/core';

import todo from '../reducers/todo'
import DeleteButton from './DeleteButton'

const TodoThumb = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="item-container">
      {/* <input className="item-checkbox"
        type="checkbox"
        checked={item.isComplete}
        onChange={() => dispatch(todo.actions.toggleChecked(item.id))}
      /> */}
      <Checkbox 
      checked={item.isComplete}
      onChange = {() => dispatch(todo.actions.toggleChecked(item.id))}
      />
      <p className="item-description">{item.description}</p>
      <p className="date-created">{format(item.dateCreated, 'dd MMMM  YYY')}</p>
      <p className="deadline">{item.deadline !== "" && format(item.deadline, 'dd MMMM  YYY HH:mm')}</p>
      <DeleteButton item={item} />
    </div>
  )
}
export default TodoThumb