import React from 'react'
import AddTask from "./AddTask"
import FilterButton from 'components/Header/FilterButton'
import { Filters }  from 'reducers/FilterSlice'
import TaskSummary from 'components/Header/TaskSummary'


const HeaderContainer = () => {
  return (
    <div>
      <TaskSummary />
      <AddTask />
      <FilterButton filter={ Filters.SHOW_ALL }/>
      <FilterButton filter={ Filters.SHOW_COMPLETED }/>
      <FilterButton filter={ Filters.SHOW_ACTIVE }/>
    </div>
  )
}

export default HeaderContainer