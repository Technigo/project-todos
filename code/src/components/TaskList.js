import React from 'react'
import { useSelector } from 'react-redux'
// import styled from 'styled-components/'

import { Task } from './Task'

export const TaskList = () => {
  const items = useSelector((store) => store.tasks.items)

  return (
    <section>
      {items.map((item) => (
        <Task key={item.id} item={item} />
      ))}
    </section>
  )
}