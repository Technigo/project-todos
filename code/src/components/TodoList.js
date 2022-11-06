/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { list } from 'reducers/list'
import { Checkbox } from './Checkbox'

export const TodoList = () => {
  const dispatch = useDispatch()
  const todoList = useSelector((store) => store.list.items)
  const [count, setCount] = useState(0)

  const completedToggle = (id) => {
    dispatch(list.actions.toggleItem(id))
    setCount(count + 1)
  }

  const timeStamp = Date.now() // timestamp
  console.log(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timeStamp))

  return (
    <section>
      <p>{() => completedToggle()} Completed tasks: {count} 💖 </p>
      {
        todoList.map((item) => {
          return (
            <article className="todo" key={item.id}>
              <div className="timestamp">{(new Intl.DateTimeFormat('en-US', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(timeStamp))}</div>
              <div> ⭐️ {item.task} ⭐️</div>
              <label> Is this task done ?
                <input name="checkbox" className="checkbox" type="checkbox" checked={item.completed} onChange={() => completedToggle(item.id)} />
              </label>
              <button type="button" onClick={() => dispatch(list.actions.deleteItem())}> TRASH 🗑️ CAN </button>
            </article>
          )
        })
      }
      <Checkbox />
    </section>
  )
}