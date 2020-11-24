import React from 'react'


export const TaskItem = ({ item }) => {
  return (
   
    <section className="task-container">
     <span className="task-item">{item}</span>
    </section>
  )
}
