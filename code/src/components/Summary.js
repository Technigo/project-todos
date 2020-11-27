import React from 'react'
import { useSelector } from 'react-redux'

export const Summary = () => {
  const list = useSelector(store => store.tasklist.tasks)

  const todoDone = list.filter(item => item.complete).length

  return (
    <section>
      <h3><span role='img' aria-label='Done'>📝 </span>{todoDone}/{list.length} tasks done</h3>
    </section>
  )
}

