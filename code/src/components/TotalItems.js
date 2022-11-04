/* import React from 'react'

const TotalItems = () => {
  return (
    <h2>TotalItems:</h2>
  )
}

export default TotalItems */

import React from 'react';
import { useSelector } from 'react-redux';

const TotalItems = () => {
  const TaskCount = useSelector((store) => store.todos.items.length);
  return (
    <h2>Total items: {TaskCount}</h2>
  )
}

export default TotalItems;