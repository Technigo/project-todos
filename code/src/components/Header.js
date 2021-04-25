import React from 'react'
import { useSelector } from 'react-redux'

const options = { weekday: 'long', month: 'long', day: 'numeric' };
const date = new Date().toLocaleDateString("en-US", options)

const Header = () => {

  const items = useSelector((store) => store.tasks.items)
  const total = items.length
  const itemsDone = items.filter(task => task.isComplete === true)
  // console.log(itemsDone.length)

  return (
    <div className='header-container'>
      <h1>My to do list</h1>
      <p className='header-date'>{date}</p>
      <div className='header-number'>
        <div className='header-num'>
          <p>Total</p>
          <p className='num'>{total}</p>
        </div> 
        <div className='header-num'>
          <p>Done</p>
          <p className='num'>{itemsDone.length}</p>
        </div>  
      </div>  
    </div>
  )
}

export default Header
