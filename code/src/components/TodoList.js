/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todo from 'reducers/todo';
import { ListWrap } from 'styledcomponents/SectionWrapper';
import moment from 'moment'

const TodoList = () => {
  const todoList = useSelector((store) => store.todo.items);
  const dispatch = useDispatch();

  const onCompletedToggle = (id) => {
    dispatch(todo.actions.toggleItem(id))
  }

  const date = new Date();

  return (
    <section>
      {todoList.map((singleToDo) => {
        return (
          <ListWrap>
            <label>
              <input
                type="checkbox"
                checked={singleToDo.completed}
                onChange={() => onCompletedToggle(singleToDo.id)} />
            </label>
            <h1>{singleToDo.task}</h1>
            <h3>Deadline {singleToDo.deadline}</h3>
            <h3>Importance {singleToDo.tag}</h3>
            <p>Created: {moment(date.createdAt).fromNow()}</p>
            <button onClick={() => dispatch(todo.actions.deleteItem(singleToDo.id))} type="button">❌</button>
          </ListWrap>
        );
      })}
    </section>
  )
}
export default TodoList;