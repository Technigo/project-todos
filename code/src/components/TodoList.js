import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { todos } from 'reducers/todos' 

const TodoList = () => {
    const todoList = useSelector((store) => store.todos.items);
    //const completedTodos = taskList.filter(taskItem => taskItem.isDone);
    //const incompletedTodos = taskList.filter(taskItem => !taskItem.isDone);
    
    const dispatch = useDispatch()

    const onTodoToggle = (taskId) => {
      dispatch(todos.actions.toggleTodos(taskId));
      };

    const onTodoDelete = (taskIndex) => {
      dispatch(todos.actions.removeTodos(taskIndex));
      };

  return (
    <section>
            {todoList.map((taskItem, taskIndex) => (
               <article className ='displaytodos' key={taskItem.id}>
                 <div className="card">
                   <h2 className='textarea'>{taskItem.description}</h2>
                   <div className='cta-container'>
                        <label>
                                <input
                                    className='checkbox'
                                    type='checkbox'
                                    onChange={() => onTodoToggle(taskItem.id)}
                                />
                        </label>
                        <button onClick={() => onTodoDelete(taskIndex)}>
                            <span role='img' aria-label='delete'>X</span>
                        </button>
                   </div>
                   </div>
               </article>
            ))}
        </section>
    );
};

export default TodoList;