import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Checkbox from '@material-ui/core/Checkbox'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import SaveIcon from '@material-ui/icons/Save'

import todos from '../reducers/todos'

const TodoItem = ({ checked, id, text, handleEditTodos }) => {
  const dispatch = useDispatch()
  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(text)
  
  const onHandleEdit = () => {
    setOnEdit(true)
  }

  const onHandleSave = (id) => {
    setOnEdit(false)
    if (editValue) {
      handleEditTodos(editValue, id)
    } else {
      setEditValue(text)
    }
  }

  if(onEdit) {
    return (
      <div className='test'>
        <input 
          className='custom-select'
          type='text' 
          id='editValue' 
          value={editValue} 
          name='editValue'
          onChange={e => setEditValue(e.target.value)}
        />
        <SaveIcon onClick={() => onHandleSave(id)} />
      </div>
    )
  } else {
      return (
        <div className='todo-item'>
          <Checkbox
            checked={checked}
            className='checked'
            onChange={() => dispatch(todos.actions.toggleComplete(id))}
          />
          <div className='todo-content'>
            <p className={checked ? 'done' : null}> {editValue} </p>
          </div>
          <div className='todo-btn'>
            <EditIcon onClick={onHandleEdit} />
            <DeleteIcon onClick={() => dispatch(todos.actions.removeTodo(id))} />
          </div>
        </div>
      )
  }
}

export default TodoItem