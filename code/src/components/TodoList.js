/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { list } from 'reducers/list'

export const TodoList = () => {
  const todoList = useSelector((store) => store.list.items)
  const dispatch = useDispatch()

  const completedToggle = (id) => {
    dispatch(list.actions.toggleItem(id))
  }

  /* const deleteTask = (taskIndex) => {
    dispatch(list.actions.deleteItem(taskIndex))
  } */

  return (
    <section>
      {
        todoList.map((item) => {
          return (
            <article className="todo" key={item.id}>
              <div>⭐️ {item.task} ⭐️</div>
              <label> Is this task done ?
                <input name="checkbox" className="checkbox" type="checkbox" checked={item.completed} onChange={() => completedToggle(item.id)} />
              </label>
              <button type="button" onClick={() => dispatch(list.actions.deleteItem())}> 🗑️ </button>
            </article>
          )
        })
      }
    </section>
  )
}
