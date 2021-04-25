import React, { useState } from 'react'
import FlipMove from 'react-flip-move'
import moment from 'moment'

import Filter from 'components/Filter'
import TodoItem from 'components/TodoItem'

const TodoList = () => {
  const [filteredItems, setFilter] = useState([])
  
  const handleEditTodos = (editValue, id) => {
    const editTodo = [...filteredItems]
    editTodo.forEach((todo, index) => {
      if(index === id) {
        todo.description = editValue
      }
    })
    setFilter(editTodo)
  } 
 
  return (
    <section className='todo-container'>
      <h2 className='todo-header'>{moment().format('dddd')}</h2>
      <p className='date'>{moment().format('Do MMMM')}</p>
      <Filter 
        setFilter={setFilter}
      />
      <FlipMove duration={250} easing='ease-out'>
      {filteredItems.map((todo) => {
        return (
          <div key={todo.id}>
            <TodoItem
              checked={todo.isComplete}
              id={todo.id}
              text={todo.description}
              handleEditTodos={handleEditTodos}
            />
          </div>
        )})
      }
      </FlipMove>
    </section>
  )
}

export default TodoList
