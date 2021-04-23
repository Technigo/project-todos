import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { format } from 'date-fns'
import { Checkbox } from '@material-ui/core';
import { ArrowDropDown, ArrowDropUp} from '@material-ui/icons'

import todo from '../reducers/todo'

import DeleteButton from './DeleteButton'
import SetPriorityButton from './SetPriorityButton'

const TodoThumb = ({ item }) => {
  const [isOpen, setOpen] = useState(false)
  const dispatch = useDispatch()

  const determineDeadlineClass = (itemDeadline) => {
    const today = Date.now()
    const deadline = new Date(itemDeadline)
    if (today > deadline) {
      return 'past-deadline'
    } else return null
  }

  return (
    <div className="item-container">
      <div className="todo-main" >
        <Checkbox
          color="primary"
          checked={item.isComplete}
          onChange={() => dispatch(todo.actions.toggleChecked(item.id))}
          inputProps={{ 'aria-label': 'Checkbox' }}
        />
        <p>{item.description}</p>
        <div onClick={() => setOpen(!isOpen)}>
          {isOpen ? <ArrowDropUp color="primary" fontSize="large"/> : <ArrowDropDown color="primary" fontSize="large"/>}
        </div>
      </div>
      <div className={`todo-details ${!isOpen ? "collapsed" : ""}`}>
        <p className="date-created">
          <span className="span">Created:</span>
          {format(item.dateCreated, 'dd MMMM YYY')}
        </p>
        <p className={`deadline ${determineDeadlineClass(item.deadline)}`}>
          {(determineDeadlineClass(item.deadline) === "past-deadline") &&
            <span
              className="span"
              role="img"
              aria-label="alarm clock">
              ⏰
          </span>}
          <span className="span">Deadline:</span>
          {item.deadline === "" ? "No set deadline" : format(new Date(item.deadline), 'dd MMMM YYY')}
        </p>
          <DeleteButton item={item} />
          <SetPriorityButton item={item} />
        <div className="set-priority">

        </div>
      </div>

    </div>
  )
}
export default TodoThumb