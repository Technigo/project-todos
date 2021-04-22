import React from 'react'
import {useDispatch} from 'react-redux'

import todo from '../reducers/todo'

const FilterThumb = ({filter}) => {
  const dispatch = useDispatch()
  return (
    <button 
      className={`filter-button ${filter.status? "on":"off" }`} 
      onClick={()=> dispatch(todo.actions.toggleFilter(filter.id))}
    >
      {filter.name}
    </button>
  )
}
export default FilterThumb