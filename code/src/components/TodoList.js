/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { list } from 'reducers/list'

export const TodoList = () => {
  const dispatch = useDispatch()
  const todoList = useSelector((store) => store.list.items)
  const [count, setCount] = useState(0)

  const completedToggle = (id) => {
    dispatch(list.actions.toggleItem(id))
    setCount(count + 1)
  }

  const date = Date.now() // timestamp
  const timeStamp = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(date)

  const checkBoxes = document.querySelectorAll('#checkbox')
  console.log(checkBoxes)

  /* const checkAll = (item) => {
    if (item.completed.checked === true) {
      checkBoxes.forEach((checkbox) => {
        checkbox.checked = true
      })
    }
    console.log(checkBoxes)
    console.log(item)
  } */

  return (
    <section>
      <p>{() => completedToggle()} Completed tasks: {count} 💖 </p>
      {/* <input type="checkbox" onChange={checkAll(this)}>All tasks complete</input> */}
      {
        todoList.map((item) => {
          return (
            <article className="todo" key={item.id}>
              <div className="timestamp">{timeStamp}</div>
              <div> ⭐️ {item.task} ⭐️</div>
              <label htmlFor="option-all"> Is this task done ?
                <input name="checkbox" id="checkbox" className="completed-checkbox" type="checkbox" checked={item.completed} onChange={() => completedToggle(item.id)} />
              </label>
              <button type="button" onClick={() => dispatch(list.actions.deleteItem())}> TRASH 🗑️ CAN </button>
            </article>
          )
        })
      }
    </section>
  )
}
