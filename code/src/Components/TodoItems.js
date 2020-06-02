import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { todos } from '../reducers/todos'
import { Span, SpanRemove, Article } from '../lib/Section'

export const TodoItems = ({itemIndex}) => {
  const item = useSelector(store => store.todos.list.items[itemIndex]);
  const dispatch = useDispatch();

  const onRemoveClicked = event => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex
      })
    );
  };

  const handleOnChanged = event => {
    dispatch(todos.actions.setDone({
      itemIndex: itemIndex,
      done: !item.done
    }));
  };

  return (
    <Article>
      <div className = {`todo-item ${item.done ? "done" : ""}`}>
        <input
          type="checkbox"
          onChange={ handleOnChanged }
          checked= {item.done ? "checked" : ""}>
        </input>
      
        <Span>{item.description}</Span>
        <SpanRemove onClick ={onRemoveClicked}>
          🗑
        </SpanRemove>
      </div>
    </Article>
  );
};