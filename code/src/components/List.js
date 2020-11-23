
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Item } from  './Item.js'
import styled from 'styled-components'; 
import { todos } from 'reducers/todos';

const ListContainer = styled.ul`
display: flex;
width: 100%;
flex-direction: column;
word-wrap: wrap;
`;

const listActionButton = styled.button`
align-self:center;
padding:4px;
margin:2px;
font-size: 22px;
color: #3f3f3f;
`;


export const List = () => {
  const dispatch = useDispatch();
  const items = useSelector((store) => store.todos.items);

  return (
  <ListContainer > 
    {items.map((item, index) => (
    <Item  key={index} item={item}></Item>
  ))}
<listActionButton onClick={() => dispatch(todos.actions.removeOne())}>
Remove one
</listActionButton>
  </ListContainer>

 );
};






// import React from 'react'
// import { useSelector } from 'react-redux' 

// import { Task } from './Task'


// export const TodoTasks = () => {
//   //here we fetch all products from the store
//   const allTasks = useSelector ((store) => store.task)

//   return (
//     <div className="all-tasks">
//       {allTasks.map((task) => (
//         <Task key={task.id} task={task} />
//       ))}
//     </div>
//   )
// }
