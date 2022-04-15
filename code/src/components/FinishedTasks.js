// import React, { useState, useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { tasks } from 'reducers/tasks'


  
// const TaskBar = styled.li`
// padding: 2em;
// flex: 1;
// border: 1px solid gray;
// cursor: move;

// `

//   export const FinishedTasks = () => {

//     const dispatch = useDispatch()


//     const finishedTasks = useSelector((store) => store.tasks.items.filter(t => t.status))

//         return (
//         <>

//         { finishedTasks.map((task) => (
//             <TaskBar key={task.id} draggable="true" >
//                 <label htmlFor={task.id}>{task.title}</label> 
//                 <input type="checkbox" checked={task.status} id={task.id} onChange={() => dispatch(tasks.actions.toggleState(task.id))}></input>
//             </TaskBar>
//         ))}

//         </>

//         )
//   }