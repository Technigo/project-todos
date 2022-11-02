import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const TodoList = () => {
  const todoList = useSelector((store) => store.list.items)
  const dispatch = useDispatch()

  return (
    <section>
      {
        todoList.map((item) => {
          return (
            <>
              <div key={item.id}>{item.task}</div>
              <label> Is this task done
                <input type="checkbox" checked={item.isDone} />
              </label>
            </>
          )
        })
      }
    </section>
  )
}
