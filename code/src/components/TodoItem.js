import { Container } from 'lib/Container';
import React from 'react';
import { useDispatch } from 'react-redux';

import { todos } from '../reducers/todos';

export const TodoItem = ({ id, name, isCompleted }) => {
    const dispatch = useDispatch();

    const onTodoDelete = () => {
        dispatch(todos.actions.removeItem(id));
    }

    const onIsCompletedChange = () => {
        dispatch(todos.actions.toggleComplete(id));
    };

    return (
        <Container>
        <div>
            <div>{name}</div>
            <div onClick={onIsCompletedChange}>
                {isCompleted ? "☒" : "☑︎"}
            </div>
            <div onClick={onTodoDelete}>ⓧ</div>
        </div>
        </Container>
    );
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