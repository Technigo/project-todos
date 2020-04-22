import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import moment from 'moment';
import { TodoItems } from '../lib/Containers'
import { TodoItemContainer } from '../lib/Containers'
import { TodoItemContent } from '../lib/Containers'
import { SpanText } from '../lib/Texts'
import { RemoveButton } from '../lib/Buttons'

export const TodoItem = ({ projectName, item, itemIndex }) => {
  const dispatch = useDispatch();

  const statusStyling = () => {
    if (item.done) {
      return 'done'
    } else if (item.date > moment().format('MMMM Do YYYY')) {
      return 'over-due'
    } else {
      return ''
    }
  }

  const handleOnChange = () => {
    dispatch(
      todos.actions.setDone({
        projectName,
        itemIndex,
        done: !item.done
      })
    );
  };

  const onClickedRemoved = () => {
    dispatch(
      todos.actions.removeTodo({
        projectName,
        itemIndex
      })
    );
  };

  return (
    <TodoItems className={`todo-item ${statusStyling()}`}>
      <label>
          <input 
            type='checkbox'
            onChange={handleOnChange}
            checked={item.done ? 'checked' : ''}
          ></input>
      </label>
      <TodoItemContainer>
        <TodoItemContent>
          <SpanText>
            {item.description}
          </SpanText>
          {item.date === '' ? <SpanText></SpanText> :
            <SpanText>
            Due: {item.date}
            </SpanText>
          }
        </TodoItemContent>
        <TodoItemContent>
          <SpanText>
            {moment(item.createdAt).fromNow()}
          </SpanText>
          <RemoveButton
            onClick={onClickedRemoved}
          >X</RemoveButton>
        </TodoItemContent>
      </TodoItemContainer>
    </TodoItems>
  )
};
