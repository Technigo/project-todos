import React from 'react'
import { useDispatch } from 'react-redux'

import { tasklist } from '../reducers/tasklist'

export const ClearAllButton = (id) => {
  const dispatch = useDispatch()
  
  const handleClearAll = () => dispatch(tasklist.actions.removeAll(id))

  return ( 
    <div>
      <button onClick={handleClearAll}> Clear All </button>
    </div>
  )
}