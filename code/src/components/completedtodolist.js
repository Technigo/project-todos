import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos.js';

export const CompletedTasks = () => {
  const list = useSelector((store) => store.todos.list);
  const tasks = list.items.filter((item) => item.completed === true);

  if (tasks == 0) {
    return <></>;
  } else {
    return (
      <div>
        Stuff you did today:{' '}
        {tasks.map((item) => (
          <p>{item.text}</p>
        ))}
      </div>
    );
  }
};

export const CompletedShopping = () => {
  const list = useSelector((store) => store.todos.list);
  const shopping = list.items.filter((item) => item.shopped === true);

  if (shopping == 0) {
    return <></>;
  } else {
    return (
      <div>
        Stuff you rememebered to buy:{' '}
        {shopping.map((item) => (
          <p>{item.text}</p>
        ))}
      </div>
    );
  }
};

//   if (shopped == false && completed == false) {
//     return (
//       <div>
//         <p> You haven't completed any tasks yet.</p>
//       </div>
//     );
//   }
//   if (shopped == true && completed == false) {
//     return <div>Completed tasks: Bought </div>;
//   }
// };
