import React from 'react'
import { useSelector } from 'react-redux'

const ProgressBar = () => {
  const allTasksToDo = useSelector((store) => store.tasks.items);
  const numberOfTasksDone = allTasksToDo.filter((item) => item.isDone).length;

  return (
    <div>
      <p>{numberOfTasksDone}/{allTasksToDo.length} done</p>
    </div>
  )
}

export default ProgressBar;
