import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { todoList } from '../reducers/todoList'

const AddItem = () => {
  const dispatch = useDispatch()
  const [todoValue, setTodoValue] = useState("")

  const submitTodo = (e) => {
    e.preventDefault()
    dispatch(todoList.actions.addTask(todoValue))
    setTodoValue("")

  }
  
  return (
    <form className="add-item collection" onSubmit={(e) => submitTodo(e)}>
      <label htmlFor="addItem"></label>
      <input 
        id="addItem" 
        type="text" 
        placeholder=" + Add new task"
        onChange={(e) => setTodoValue(e.target.value)}
        value={todoValue}
      />
    </form>
    )
}
 
export default AddItem