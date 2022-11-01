/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'

const Tasks = () => {
  const allTasks = useSelector((store) => store.tasks.todos);
  const dispatch = useDispatch();

  const onIsTaskDone = (id) => {
    dispatch(tasks.actions.toggleTask(id))
  }
  return (
    <section>
      {allTasks.map((singleTask) => {
        return (
          <article>
            <h2>{singleTask.title}</h2>
            <label>
              is task done?
              <input
                type="checkbox"
                checked={singleTask.isDone}
                onChange={() => onIsTaskDone(singleTask.id)} />
            </label>
            <button type="button">X
            </button>
          </article>
        )
      })}
    </section>
  )
}
export default Tasks;

// eslint-disable-next-line no-lone-blocks
{ /* <div>
{allTasks.map((singleTask) => (
  console.log(singleTask.title)
))}
</div> */ }