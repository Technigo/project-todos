import React from 'react'

export const Task = ({ task }) => {
  return (
    <div className="wrapper">
      <span className="emoji" role="img"> {task.emoji} </span>
      {/* <p>{XXX}</p> */}
      <input
        type="checkbox"
        checked={task.complete} />
    </div>
  )
};
/**   // onChange={
        //   () => taskToggle(task.id)
        // }
        // onClick={() => { }} */