import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'

import todo from '../reducers/todo'
import DeleteButton from './DeleteButton'

const TodoThumb = ({ item }) => {
  const dispatch = useDispatch()
  return (
    <div className="item-container">
      <input className="item-checkbox"
        type="checkbox"
        checked={item.isComplete}
        onChange={() => dispatch(todo.actions.toggleChecked(item.id))} 
      />
      <p className="item-description">{item.description}</p>
      <p className="date-created">{moment(item.dateCreated).format('MMMM Do YYYY, h:mm')}</p>
      <p className="deadline">{item.deadline !== "" && moment(item.deadline).format('MMMM Do YYYY')}</p>
      <DeleteButton item={item}/>
    </div>
  )
}
export default TodoThumb