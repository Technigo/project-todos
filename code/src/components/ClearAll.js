import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todoList } from '../reducers/todoList'
import './clearall.css'

export const ClearAll = () => {
  const quantity = useSelector((state) => state.todoList.items)

  const totalQuantity = quantity.length

  const dispatch = useDispatch()

  return ( 
    <>
    <div className='clear-container'>
    {totalQuantity >= 1 && (
      <button className="clear-button" onClick={() => dispatch(todoList.actions.removeAll())}>Clear All</button>
      )} 
      </div>
    </>
  )
}