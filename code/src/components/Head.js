import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { tasks } from 'reducers/tasks'
import moment from 'moment'

export const Head = () => {
  const dispatch = useDispatch()
  const taskList = useSelector((store) => store.tasks.items)
  const date = moment().format("MMMM Do")

  return (
    <div className="head-main">
      <div class="head-top">
        <div class="head-title">Todo</div>
        <div>{taskList.length} tasks</div>
      </div>
      <div class="head-bottom">
        <div>{date}</div>
        <button
          class="clear-button"
          type="button"
          onClick={() => dispatch(tasks.actions.clearAll())}
        >
          Clear all
        </button>
      </div>
    </div>
  )
}