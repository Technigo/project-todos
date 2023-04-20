import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import tasks from 'reducers/tasks.js';
// import Header from './Header.js';
// import AddTask from './AddTask.js';

const TaskList = () => { // Function.
  const taskList = useSelector((store) => store.tasks.items) // useSelector
  // to select the list/slice of tasks from Redux store and from that map over
  // them/select an item. We go to our store and grab the items from our task.
  const dispatch = useDispatch();
  const onDeleteSingleTaskBtnCLick = (id) => { // Function. Parameter = Id.
    dispatch(tasks.actions.deleteSingleTask(id)); // Dispatch the action
  }
  const onIsCompletedCheckboxToggle = (id) => { // To establish, we need the id.
    dispatch(tasks.actions.toggleIfTaskIsCompleted(id)); // Since id we need to dispatch an action.
  }
  return (
    <section>
      <ul>
        {taskList.map((singleTask) => {
          return (
            <li key={singleTask.id}>
              <p>
                <span>{singleTask.name}</span>
                <button
                  type="button"
                  onClick={() => onDeleteSingleTaskBtnCLick(singleTask.id)}>
                  Delete this task
                </button>
                <label htmlFor={`task_with_id${singleTask.id}`}>
                  Is this one Completed?
                  <input
                    id={`task_with_id${singleTask.id}`}
                    type="checkbox"
                    value={singleTask.isCompleted}
                    onChange={() => onIsCompletedCheckboxToggle(singleTask.id)} />
                </label>
              </p>
              {/* <input
                type="checkbox"
                id="checkbox"
                checked={singleTask.isCompleted}
                onChange={() => onIsTaskCompleted(singleTask.id)} /> */}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

// id as key and singleTask.name in list = printed out value.
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