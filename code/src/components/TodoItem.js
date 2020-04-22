import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import moment from 'moment';
import { TodoItems } from '../lib/Containers'
import { TodoItemContainer } from '../lib/Containers'
import { TodoItemContent } from '../lib/Containers'
import { SpanText } from '../lib/Texts'
import { SpanTextItem } from '../lib/Texts'
import { SpanTextBold } from '../lib/Texts'
import { RemoveButton } from '../lib/Buttons'

export const TodoItem = ({ projectName, item, itemIndex }) => {
  const dispatch = useDispatch();

  const statusStyling = () => {
    if (item.done) {
      return 'done'
    } else if (item.date > moment().format('L')) {
      
      return 'over-due'
    } else {
      return 'normal'
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
    <TodoItems>
      <label>
          <input 
            type='checkbox'
            onChange={handleOnChange}
            checked={item.done ? 'checked' : ''}
          ></input>
      </label>
      <TodoItemContainer>
        <TodoItemContent>
          <SpanTextBold className={statusStyling()}>
            {item.description}
          </SpanTextBold>
          {item.date === '' ? <SpanText></SpanText> :
            <SpanTextItem className={statusStyling()}>
            Due: {item.date}
            </SpanTextItem>
          }
        </TodoItemContent>
        <TodoItemContent>
          <SpanTextItem className={statusStyling()}>
            {moment(item.createdAt).fromNow()}
          </SpanTextItem>
          <RemoveButton
            onClick={onClickedRemoved}
          >X</RemoveButton>
        </TodoItemContent>
      </TodoItemContainer>
    </TodoItems>
  )
};
