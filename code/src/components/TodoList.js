import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import * as Icon from 'react-icons/fi'
import Checkbox from 'react-custom-checkbox'

import todos from '../reducers/todos'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items)
  const dispatch = useDispatch()

  return (
    <section>
      {items.map((todo) => {
        return (
          <div key={todo.id}>
            <Checkbox
              icon={<Icon.FiCheck color="#2643C4" size={18} />}
              name="my-input"
              checked={todo.isComplete}
              onChange={() => dispatch(todos.actions.toggleComplete(todo.id))}
              borderColor="#2643C4"
              borderRadius={20}
              style={{ cursor: "pointer" }}
              labelStyle={{ marginLeft: 5, userSelect: "none" }}
              label={todo.description}
            /> 
          </div>
        )})
      }
    </section>
  )
}

export default TodoList