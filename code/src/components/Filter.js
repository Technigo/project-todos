import { connect } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { Filters } from '../reducers/FilterSlice'
import  TaskList  from 'components/TaskList'

const selectedTasks = (state => state.tasks)
const selectedFilter  = (state => state.filters)

const showFilteredTasks = createSelector(
  [ selectedTasks, selectedFilter ],
  (tasks, filter) => {
    switch(filter) {
      case Filters.SHOW_ALL:
        return tasks
      case Filters.SHOW_ACTIVE:
        return tasks.filter( task => !task.completed )
      case Filters.SHOW_COMPLETED:
        return tasks.filter( task => task.completed )
      }
    }
  )

const mapStateToProps = state => ({
  tasks: showFilteredTasks(state)
})

export default connect(
  mapStateToProps
)(TaskList)