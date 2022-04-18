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
    <div style={{backgroundColor: 'pink'}}>
    {allTodos.map((todoItem) => (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px'}}>
        <input
            style={{margin: '1px'}}
            className="toggle"
            type="checkbox"
            checked={completed}
            onChange={() => onToggle(todoItem.id)}
        />
        <p style={{margin: '10px'}}>{todoItem.text}</p>
        {/* Make the delete button a own display column, so can align items to left (checkbox and text) and (delete button) - two columns, each column aligned to the left for proportion when typing diff. length of text */}
        <TodoDelete todoItem={todoItem}/>
        </div>
    ))}
    </div>
  )
}
