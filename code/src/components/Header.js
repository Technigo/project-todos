import React from 'react';
import todos from '../reducers/todos';
import Moment from 'react-moment';
import { useSelector, useDispatch } from 'react-redux';

// const Header = () => {
//   const date = Moment();
//   return (
//     <div>
//       <p>
//         {Moment(date).format('dddd')},{Moment(date).format('ll')}
//       </p>
//       ;
//     </div>
//   );
// };

// export const Header = () => {
//   const items = useSelector((store) => store.todos.items);
//   console.log('items?', items);

//   return (
//     <div>
//       <h1>Todo Today</h1>
//       <h2>{items.length}</h2>
//       <p>{Moment().format('MM/DD/YYYY')}</p>
//       <p>Complete:</p>
//       <p>Incomplete:</p>
//     </div>
//   );
// };
