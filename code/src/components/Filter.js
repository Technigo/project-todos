import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const Filter = ({ setFilter }) => {
  const items = useSelector((store) => store.todos.items)
  const [status, setStatus] = useState('all')

  const statusHandler = (event) => {
      setStatus(event.target.value)
  }
 
  useEffect(()=> {
    filterHandler()
  }, [ status])

  const filterHandler = () => {
    switch(status) {
      case 'completed': 
      setFilter(items.filter((todo) => todo.isComplete))
        break;
      case 'uncompleted': 
      setFilter(items.filter((todo) => !todo.isComplete))
        break; 
      default:
        setFilter(items)
        break;
    }
  }
  
  return (
    <div className='select-container'>
      <select className='custom-select' onChange={statusHandler}>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='uncompleted'>Uncompleted</option>
      </select>
    </div>
  )
}

export default Filter