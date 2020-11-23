
import React from 'react';
import styled from 'styled-components'; 


const ItemContainer = styled.li`
align-self: flex-start;
padding:8px;
margin: 8px;
font-size: 36px;
color: #3f3f3f;
background-color: #8f4ff;
`;

export const Item = ({ item }) => {
 return  <ItemContainer>{item.text} </ItemContainer>;

};
























// import React from 'react'
// import { useDispatch } from 'react-redux'
// // this is (todoTasks) the reducer that we are going to dispatch an action to 
// //betyder "vad vi vill skicka en åtgärd till"
// import { todoTasks } from 'reducers/todos'

// export const Task = ({ task }) => {

  // here we initsialise our dispatch
//   const dispatch = useDispatch()
//   return (
//     <article className="single-task">
//       <span className="emoji" role="img" aria-label={task.text}>{task.emoji}</span>
  

//       <button
//         type="button"
//         disabled={task.inventory === 0}
//         onClick={() => dispatch(task.actions.addItem(task))}>
//         Add to Todolist
//       </button>
//     </article>
//   )
// }
// 


// FORTSÄTT HÄR =)