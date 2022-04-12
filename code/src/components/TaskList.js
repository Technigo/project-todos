import React from 'react'

import { useSelector, useDispatch } from "react-redux";

import { TaskListFlexColumn, TaskListWrapper } from './styles/Containers.styled'
import { Tag } from './styles/Tags.styled'
import { Task } from './styles/FontsAndSpans.styled'
import { RemoveTaskButton } from './styles/Buttons.styled'



const TaskList = () => {

  const allTasks = useSelector((store) => store.tasks.items);

  // const checkTag = () => { 
  //   if (tag !== "") {
  //     if (tag === "work") {
  //       return <Tag color='#3DB429'> work </Tag>
  //     } else if (tag === "study") {
  //       return <Tag color='#3DB429'> study </Tag>
  //     } else if (tag === "shopping") {
  //       return <Tag color='#3DB429'> shopping </Tag>
  //     } else if (tag === "gym") {
  //       return <Tag color='#3DB429'> gym </Tag>
  //     } else {
  //       <Tag color='#3DB429'> misc </Tag>
  //     }
  //   } 
  //     return null
  // }


  return (
    <TaskListFlexColumn>
      {allTasks.map((task => (
        <TaskListWrapper key={task.id}>
          <label htmlFor="checkTask">
            <input
              type="checkbox"
              name="checkTask"
              checked={task.isDone}
            />
            <Task>{task.task}</Task>
            {(() => {
        switch (task.tag) {
          case "work": return <Tag color='#3DB429'> work </Tag>
          case "study": return <Tag color='#F36969'> study </Tag>
          case "shopping": return <Tag color='#5B87C9'> shopping</Tag>
          case "gym": return <Tag color='#A093D4'> gym </Tag>
          case "other": return <Tag color='#FB9A08'> other </Tag>
          case "": return null
        }
      })()}
            <button>
              <RemoveTaskButton
                src='./images/remove-icon.svg'
                alt='remove task'
              />
            </button>
          </label>
        </TaskListWrapper >
      )))}
    </TaskListFlexColumn>
  )
}

export default TaskList
