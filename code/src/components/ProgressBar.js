import React from 'react'
import { useSelector } from 'react-redux'

const ProgressBar = () => {
  const allTasksToDo = useSelector((store) => store.tasks.items);
  const numberOfTasksDone = allTasksToDo.filter((item) => item.isDone).length;

  return (
    <div>
      <p>You have completed {numberOfTasksDone}/{allTasksToDo.length} tasks.</p>
    </div>
  )
}

export default ProgressBar;

//   {numberOfTasksDone === 0 && <p>Better get started!</p>}
//   {numberOfTasksDone > 0 && numberOfTasksDone <= 0.5 && <p>Not bad!</p>}
//   {numberOfTasksDone > 0.5 && <p>Nearly there!</p>}