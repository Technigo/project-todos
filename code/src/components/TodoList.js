/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { list } from 'reducers/list'

export const TodoList = () => {
  const todoList = useSelector((store) => store.list.items)
  const dispatch = useDispatch()

  const isDoneToggle = (id) => {
    dispatch(list.actions.toggleItem(id))
  }

  return (
    <section>
      {
        todoList.map((item) => {
          return (
            <article key={item.id}>
              <div>⭐️ {item.task}</div>
              <label> Is this task done
                <input name="checkbox" type="checkbox" checked={item.isDone} onChange={() => isDoneToggle(item.id)} />
              </label>
              <button type="button" onClick={() => dispatch(list.actions.deleteItem(item.task))}>Button</button>
            </article>
          )
        })
      }
    </section>
  )
}
