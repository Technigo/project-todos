import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import EmptyTodoList from './EmptyTodoList'
import TodoThumb from './TodoThumb'
import ClearAllButton from './ClearAllButton'
import AllDoneButton from './AllDoneButton'
import FilterThumb from './FilterThumb'

const TodoList = () => {
  const items = useSelector((store) => store.todo.items)
  const filters = useSelector(store => store.todo.filters)
  const [filteredItimes, setFilteredItems] = useState([])
  //console.log(filters)
  // let filteredItimes = [...items]
  // filters.forEach((filter) => {
  //   if(filter.name === "all done" && filter.status){
  //      filteredItimes = filteredItimes.filter(item => item.isComplete)
  //   }
  //   if(filter.name === "all undone" && filter.status) {
  //       filteredItimes = filteredItimes.filter(item => !item.isComplete) 
  //   }
  //   if(filter.name === "past deadline" && filter.status) {
  //      filteredItimes = filteredItimes.filter(item => (new Date(item.deadline) < Date.now()))
  //   }
  // })
  // console.log(filteredItimes)

  useEffect(() => {
    let newFilteredItems = [...items]
    filters.forEach(filter => {
      if (filter.name === "all done" && filter.status) {
        newFilteredItems = (newFilteredItems.filter(item => item.isComplete))
      }
      if (filter.name === "all undone" && filter.status) {
        newFilteredItems = (newFilteredItems.filter(item => !item.isComplete))
      }
      if (filter.name === "past deadline" && filter.status) {
        newFilteredItems = (newFilteredItems.filter(item => (new Date(item.deadline) < Date.now())))
      }
    })
    setFilteredItems(newFilteredItems)
  }, [filters, items])


  return (
    <div className="list-container">
      {items.length === 0 && <EmptyTodoList />}

      {items.length > 0 &&
        <div className="filters-container">
          <ClearAllButton />
          <AllDoneButton />
          {filters.map((filter) => <FilterThumb key={filter.id} filter={filter} />)}
        </div>
      }

      {filteredItimes.map((item) => <TodoThumb key={item.id} item={item} />)}

    </div>
  )
}

export default TodoList