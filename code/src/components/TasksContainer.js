import React from 'react'

import TodoThumb from './TodoThumb'

const TasksContainer = ({ homeItems, personalItems, workItems }) => {
  return (
    <div className="tasks-container">
      {homeItems.length > 0 &&
        <div className="home-container">
          <h2 className="category-title">Home</h2>
          {homeItems.map((item) => <TodoThumb key={item.id} item={item} />)}
        </div>
      }
      {personalItems.length > 0 &&
        <div className="personal-container">
          <h2 className="category-title">Personal</h2>
          {personalItems.map((item) => <TodoThumb key={item.id} item={item} />)}
        </div>
      }
      {workItems.length > 0 &&
        <div className="work-container">
          <h2 className="category-title">Work</h2>
          {workItems.map((item) => <TodoThumb key={item.id} item={item} />)}
        </div>
      }
    </div>
  )

}
export default TasksContainer