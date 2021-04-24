import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import EmptyTodoList from './EmptyTodoList'
import FiltersList from './FiltersList'
import TasksContainer from './TasksContainer'


const TodoList = () => {
  const items = useSelector((store) => store.todo.items)
  const filters = useSelector(store => store.todo.filters)
  const [filteredItimes, setFilteredItems] = useState([])
  const homeItems = filteredItimes.filter(item => item.category === "Home")
  const personalItems = filteredItimes.filter(item => item.category === "Personal")
  const workItems = filteredItimes.filter(item => item.category === "Work")

  useEffect(() => {
    let newFilteredItems = [...items]
    filters.forEach(filter => {
      if (filter.name === "done" && filter.status) {
        newFilteredItems = (newFilteredItems.filter(item => item.isComplete))
      }
      if (filter.name === "to do" && filter.status) {
        newFilteredItems = (newFilteredItems.filter(item => !item.isComplete))
      }
      if (filter.name === "past deadline" && filter.status) {
        newFilteredItems = (newFilteredItems.filter(item => (new Date(item.deadline) < Date.now())))
      }
      if (filter.name === "priority" && filter.status) {
        newFilteredItems = (newFilteredItems.filter(item => item.isPriority))
      }
    })
    setFilteredItems(newFilteredItems)
  }, [filters, items])

  return (
    <div className="list-container">
      {items.length === 0 && <EmptyTodoList />}
      {items.length > 0 && <FiltersList filters={filters} />}
      {items.length > 0 && <TasksContainer homeItems={homeItems} workItems={workItems} personalItems={personalItems}  />}
    </div>
  )
}

export default TodoList