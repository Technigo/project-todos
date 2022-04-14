import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const CompletedTodos = () => {
  const items = useSelector((store) =>
    store.task.items.filter((item) => item.isComplete === true)
  )
}
