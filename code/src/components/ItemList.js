import React, {useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Task } from 'components/Task'
import { ListSummary } from 'components/ListSummary'
import { taskContainer } from 'components/taskContainer.css'
import { AddTaskForm } from './AddTaskForm'

export const ItemList = () => {

    const list = useSelector(store => store.todolist.list)
         
    return (
   <section className="task-container"> 
   <AddTaskForm />
   {list.items.map((item, index) => (
       <Task itemIndex={index}></Task>   
   ))}
   <ListSummary />
   </section>
    )
}
