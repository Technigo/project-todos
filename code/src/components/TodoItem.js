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
      return 'rgba(121, 168, 169, 0.4)'
    } else if (item.date < moment().format('YYYY-MM-DD') && item.date !== '') {
      return '#ff4d4d'
    } else {
      return '#79a8a9'
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
          <SpanTextBold color={statusStyling()}>
            {item.description}
          </SpanTextBold>
          {item.date === '' ? <SpanText></SpanText> :
            <SpanTextItem color={statusStyling()}>
            Due: {item.date}
            </SpanTextItem>
          }
        </TodoItemContent>
        <TodoItemContent>
          <SpanTextItem color={statusStyling()}>
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
