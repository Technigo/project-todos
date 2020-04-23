import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoStore } from '../reducers/todoStore'
import { CustomCheckbox } from './CustomCheckbox'
import 'todo.css' 


export const TodoItem = ({ itemIndex, checked }) => {
  const item = useSelector(store => store.todoStore.list.items[itemIndex])
  const dispatch = useDispatch()

  const removeOnClick = event => {
    event.preventDefault()
    dispatch(
      todoStore.actions.removeItem({
        itemIndex: itemIndex,
      })
    )
  }
  const handleOnChange = event => {
    dispatch(
      todoStore.actions.setDone({
        //here comes the payload...
        itemIndex: itemIndex,
        done: !item.done
      })
    )
  }


  return (
    <section className="todo-contianer">
      
        <div className={`todo-item ${item.done ? "done" : ""}`}>
          <label>
            <div className="todo-checkbox">
              <CustomCheckbox
                isChecked={checked}
                onChangeHandler={handleOnChange} />
            </div>
          </label>
          <span className='todo-description'>{item.description}</span>
          <div className="remove-button">
            <a className='remove-todo-button'
              onClick={removeOnClick}
            ><span className="remove-todo">✖️</span></a>
          </div>
        </div>
    
    </section>
  )
}