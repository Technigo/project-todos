import { createSelector } from '@reduxjs/toolkit'
import { connect } from 'react-redux'
import { Filters } from '../reducers/FilterSlice'
import  TaskList  from 'components/TaskList'

const selectedTasks = (state => state.tasks)
const selectedFilters  = (state => state.filters)

const ShowFilteredTasks = createSelector(
  [ selectedFilters, selectedTasks ],
  (filter, tasks) => {
    switch(filter) {
      case Filters.SHOW_ALL:
        return tasks
      case Filters.SHOW_ACTIVE:
        return tasks.filter( task => task.completed )
      case Filters.SHOW_COMPLETED:
        return tasks.filter( task => !task.completed )
    }
  }
)

const mapStateToProps = state => ({
  tasks: ShowFilteredTasks(state)
})

export default connect(
  null,
  mapStateToProps
)(TaskList)