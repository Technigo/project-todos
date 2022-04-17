import React from 'react'
import { useSelector } from 'react-redux'

import { TodoDelete } from './TodoDelete'

export const TodoItem = () => {
  const allTodos = useSelector((store) => store.tasks);

  return (
    <div style={{backgroundColor: 'pink'}}>
    {allTodos.map((todoItem) => (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '5px'}}>
        <input
            style={{margin: '1px'}}
            className="toggle"
            type="checkbox"
            //change checked to completed, and take it from destrcutring from useselector
            //also set the completed property somewhere first
            checked={false}
        />
        <p style={{margin: '10px'}}>{todoItem.text}</p>
        {/* Make the delete button a own display column, so can align items to left (checkbox and text) and (delete button) - two columns, each column aligned to the left for proportion when typing diff. length of text */}
        <TodoDelete todoItem={todoItem}/>
        </div>
    ))}
    </div>
  )
}
