import React from "react";
import { useSelector, useDispatch } from "react-redux";

import todos from "reducers/todos";
import {
  Article,
  FlexDiv,
  CheckBoxWrapper,
  CheckBox,
  TodoText,
  DeleteButton
} from "styles";

import TimeStamp from "./TimeStamp";

const TodoList = () => {
  const todoList = useSelector((state) => state.todos.lists);

  const dispatch = useDispatch();

  const onTodoToggle = (todoId) => {
    dispatch(todos.actions.toggleTodo(todoId));
  };

  const onTodoDelete = (todoId) => {
    dispatch(todos.actions.deleteTodo(todoId));
  };

  return (
    <section>
      {todoList.map((item) => (
        <Article key={item.id}>
          <FlexDiv>
            <CheckBoxWrapper>
              <CheckBox
                type="checkbox"
                tabIndex="0"
                id={item.id}
                checked={item.isComplete}
                onChange={() => { onTodoToggle(item.id); }} />
              <TodoText htmlFor={item.id} complete={item.isComplete}>{item.text}</TodoText>
            </CheckBoxWrapper>
          </FlexDiv>
          <FlexDiv time>
            <TimeStamp createdAt={item.createdAt} />
          </FlexDiv>
          <FlexDiv>
            <DeleteButton onClick={() => onTodoDelete(item.id)}>Delete</DeleteButton>
          </FlexDiv>
        </Article>
      ))}
    </section>
  );
};

export default TodoList;