import React from "react";
import { useSelector } from "react-redux";

const TaskCounter = () => {
const taskList = useSelector ((state) => state.tasks.items)


if (taskList.length > 0 && taskList.length === 1) {
  return (
    <div>
      <p>You have {taskList.length} task to do</p>
    </div>
  )
} else if (taskList.length > 1) {
  return (
    <div>
      <p>You have {taskList.length} tasks to do</p>
    </div>
    )
  } else if (taskList.length === 0) {
return (
  <div>
    <p>Let's add something to your list!</p>
  </div>
  )
} 

}

//   const taskList = useSelector((state) => state.tasks.items);
//   const remainingTodo = taskList.filter((items) => items.complete === false);

//   return (
//    <div>
//     <p>You have {remainingTodo.length} tasks to do</p>
//    </div>
//   );
// };
export default TaskCounter