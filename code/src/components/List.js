
import React from 'react'
import { useSelector } from 'react-redux' 
import styled from 'styled-components'; 

import { Item } from  './Item.js'


const ListContainer = styled.ul`
display: flex;
width: 100%;
flex-direction: columns;
word-wrap: wrap;
`;



// store lika med nedan =

// export const todos = createSlice({
//   name: 'todos',
//   initialState: {
//     username: 'Van',
//     items: [ 
//       {
//         id:1 ,
//         text: 'todo 1', 
//         id:2 ,
//         text: 'todo 1', 
//         id:3 ,
//         text: 'todo 1', 
//     }
//      ],
//   },
// });


export const List = () => {
  const items = useSelector((store) => store.todos.items);

  return (
  <ListContainer > 
    {items.map((item, index) => (
    <Item  key={index} item={item.text}></Item>
  ))}
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
