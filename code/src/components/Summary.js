import React from 'react'
import { useSelector } from 'react-redux'

import './style/Summary.css'

export const Summary = () => {
  const list = useSelector(store => store.tasklist.tasks)

  const toDoDone = list.filter(item => item.complete).length

  return (
    <section>
      <h3>
        {toDoDone}/{list.length} tasks done
      </h3>
    </section>
  )
}

