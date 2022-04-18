import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tasks } from 'reducers/tasks'

import { TodoDelete } from './TodoDelete'

export const TodoItem = () => {
  const allTodos = useSelector((store) => store.tasks);
  const {completed} = allTodos;

  const dispatch = useDispatch();

  const onToggle = (id) => {
    dispatch(
        tasks.actions.toggleItem(id)
    )
  }

  return (
    <div style={{backgroundColor: 'white'}}>
    {allTodos.map((todoItem) => (
        <>
        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px',  borderBottom: '1px solid grey'}}>
        <span style={{display: 'flex', alignItems: 'center'}}>
        <input
            style={{margin: '1px'}}
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => onToggle(todoItem.id)}
        />
        <p style={{margin: '10px'}}>{todoItem.text}</p>
        </span>
            <TodoDelete todoItem={todoItem}/>
        </div>
        </>
    ))}
    </div>
  )
}
