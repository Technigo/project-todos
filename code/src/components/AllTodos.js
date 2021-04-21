import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { tasks } from '../reducers/tasks';

const AllTodos = () => {
  const dispatch = useDispatch()

  const allTodos = useSelector((store) => store.tasks)
  const completedTodos = allTodos.filter((task) => task.complete)

  return (
    <section>
      <div className="completed-and-clear">
        <p>Completed: {completedTodos.length}/{allTodos.length}</p>
        <div className="remove-buttons">
          <button
            className="remove-button"
            onClick={() => dispatch(tasks.actions.removeAll())}>
            Delete all
          </button>
          <button
          className="remove-button"
            onClick={() => dispatch(tasks.actions.removeCompleted())}>
            Delete Completed
          </button>
          <button
            className="remove-button"
            onClick={() => dispatch(tasks.actions.completeAll())}>
            Complete all
          </button>
        </div>
      </div>

     </section>
  )
}

export default AllTodos;