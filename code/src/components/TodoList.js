/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todo from 'reducers/todo';
import { ListWrap } from 'styledcomponents/SectionWrapper';
import moment from 'moment'
import { Deadline, Priority, TaskTitle } from 'styledcomponents/TextStyles';
import { TrashBtn } from 'styledcomponents/Input';

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
            <TaskTitle>
              <label>
                <input
                  type="checkbox"
                  checked={singleToDo.completed}
                  onChange={() => onCompletedToggle(singleToDo.id)} />
              </label>
              {singleToDo.task}
            </TaskTitle>
            <TrashBtn onClick={() => dispatch(todo.actions.deleteItem(singleToDo.id))} type="button">❌</TrashBtn>
            <Priority>{singleToDo.tag}</Priority>
            <Deadline>Deadline {singleToDo.deadline}</Deadline>
            <p>Created: {moment(date.createdAt).fromNow()}</p>
          </ListWrap>
        );
      })}
    </section>
  )
}
export default TodoList;