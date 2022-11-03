/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todo from 'reducers/todo';
import { InformationWrap, ListWrap, CheckWrap, StyledCheckbox } from 'styles/SectionWrapper';
import moment from 'moment'
import { CreatedAt, Deadline, Priority, TaskTitle } from 'styles/TextStyles';
import { Trash, TrashBtn } from 'styles/Input';

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
            <TaskTitle><TrashBtn onClick={() => dispatch(todo.actions.deleteItem(singleToDo.id))} type="button"><Trash>✕</Trash></TrashBtn>
              <CheckWrap>
                <StyledCheckbox
                  type="checkbox"
                  checked={singleToDo.completed}
                  onChange={() => onCompletedToggle(singleToDo.id)} />
              </CheckWrap>
              {singleToDo.task}
            </TaskTitle>
            <InformationWrap>
              <Priority>{singleToDo.tag}</Priority>
              <Deadline>Complete by {singleToDo.deadline}</Deadline>
              <CreatedAt>Created: {moment(date.createdAt).fromNow()}</CreatedAt>
            </InformationWrap>
          </ListWrap>
        );
      })}
    </section>
  )
}
export default TodoList;