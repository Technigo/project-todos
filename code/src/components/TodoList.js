import { Container } from 'lib/Container';
import React from 'react';
import { useSelector } from 'react-redux';

import { TodoItem } from './TodoItem';

export const TodoList = () => {
    const items = useSelector(store => store.todos.items);

    return (
        <Container>
            {items.map(item => (
                <TodoItem
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    isCompleted={item.isCompleted}
                />
            ))}
        </Container>
    );
};





// Local state in react vs global store in Redux, but you could call the the same

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
