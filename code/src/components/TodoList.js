import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from '../reducers/todo';
import { Priority, TaskTitle } from '../styles/TextStyles';
import { TrashBtn, Trash } from '../styles/Button.styled';
import { TodoInfoWrap, TodoListWrap, CheckMarkWrap, StyledCheckbox, TaskBackground } from './TodoList.styled';

// TodoList component for displaying the list of todo items
const TodoList = () => {
  const todoList = useSelector((store) => store.todos.items);
  const dispatch = useDispatch();

  const onCompletedToggle = (id) => {
    dispatch(todos.actions.changeCompletionStatus(id))
  }

  return (
    <section>
      {todoList.map((singleTodo) => {
        return (
          <TodoListWrap key={singleTodo.id}>
            <TaskBackground color={singleTodo.tag}>
              <TaskTitle>
                <TrashBtn
                  onClick={() => dispatch(todos.actions.deleteItem(singleTodo.id))}
                  type="button">
                  <Trash>X</Trash>
                </TrashBtn>
                <CheckMarkWrap>
                  <StyledCheckbox
                    type="checkbox"
                    checked={singleTodo.completed}
                    onChange={() => onCompletedToggle(singleTodo.id)} />
                </CheckMarkWrap>
                {singleTodo.task}
              </TaskTitle>
              <TodoInfoWrap>
                <Priority className={singleTodo.completed ? 'complete-todo' : ''}>{singleTodo.tag}</Priority>
              </TodoInfoWrap>
            </TaskBackground>
          </TodoListWrap>
        );
      })}
    </section>
  )
}

// Export the TodoList component
export default TodoList;
