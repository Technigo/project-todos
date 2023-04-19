import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks.js';
// import Header from './Header.js';
// import AddTask from './AddTask.js';

const TaskList = () => { // Function.
  const taskList = useSelector((store) => store.tasks.items) // useSelector
  // to fetch the list of tasks and map over them.
  const dispatch = useDispatch();
  const onIsTaskCompleted = (id) => {
    dispatch(tasks.actions.markTaskAsCompleted(id))
  }
  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <li key={singleTask.id}>{singleTask.name}
              <input
                type="checkbox"
                id="checkbox"
                checked={singleTask.isCompleted}
                onChange={() => onIsTaskCompleted(singleTask.id)} />
              {/* <label key={singleTask.title}>
              </label> */}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

// store = backpack
export default TaskList;

// const Tasks = () => {
// const allTasks = useSelector((store) => store.tasks.items);
// const dispatch = useDispatch();

// const onIsTaskDone = (id) => {
//   dispatch(tasks.actions.markTaskAsDone(id))
// }
//   return (
//     // <Outerwrapper>
//       // <Header />
//       // <InnerWrapper>
//         {allTasks.map((singleTask, index) => {
//           return (
//             <Content key={singleTask.id}>
//               <SingleTask>
//                 <input
//                   type="checkbox"
//                   id="checkbox"
//                   checked={singleTask.isCompleted}
//                   onChange={() => onIsTaskCompleted(singleTask.id)} />
//                 <label>
//                   <TasklistText>{singleTask.title}</TasklistText>
//                 </label>
//               </SingleTask>
//             </Content>
//           )
//         })}
//         {/* <NewTask />
//       </InnerWrapper>
//     </Outerwrapper>
//   )
// } */}