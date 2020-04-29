import React from 'react';
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import moment from 'moment';
import { TodoItems, TodoItemContainer, TodoItemContent } from '../lib/Containers';
import { SpanText, SpanTextItem, SpanTextBold } from '../lib/Texts';
import { RemoveButton } from '../lib/Buttons';
import { Checkbox } from '../lib/Checkbox';

export const TodoItem = ({ projectName, item, itemIndex }) => {
  const dispatch = useDispatch();

  const statusStyling = () => {
    if (item.done) {
      return 'done'
    } else if (item.date < moment().format('YYYY-MM-DD') && item.date !== '') {
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
      <Checkbox isChecked={item.done ? 'checked' : ''} onChangeHandler={handleOnChange} /> 
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
