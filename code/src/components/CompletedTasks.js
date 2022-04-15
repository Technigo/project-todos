import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import tasks from 'reducers/Tasks'

const CompletedTodos = () => {
  const items = useSelector((store) =>
    store.tasks.items.filter((item) => item.isComplete === true)
  )
}
