import React, { useState } from 'react'         
import { useSelector, useDispatch } from 'react-redux';

const AddTodo = () => {
  const [newToDo, setNewTodo] = useState('')

  // this one is slightly weird!!! 
  const onNewAddTodoChange = (e) => {
    setNewTodo(e.target.value)}

  const dispatch = useDispatch()

  const items = useSelector((store) => store.todos.items) // I actually do not need to get something here. I just want to add. But I do need to be able to use dispatch and hint at "todos"
  console.log(items) //the right now 3 existing items
{/*  does textarea need an id now? no label for */}
  return (
    <div>
      <textarea
        type="text"
        maxLength="60"
        placeholder="Add task"
        onChange={onNewAddTodoChange}
        value={newToDo}        
      >
      </textarea>
      <button 
        type="button"
/*         onClick={() => dispatch(todos.actions.addToDo('Something will be here'))} */
      > 
          +
      </button>
    </div>
  )
}

export default AddTodo