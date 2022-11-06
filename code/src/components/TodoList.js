import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectTodoList, completeAll, deleteAll } from 'reducers/todoSlice';
import TodoItem from './TodoItem';

const TodoList = () => {
  const todoList = useSelector(selectTodoList)
  const dispatch = useDispatch()
  const allDone = () => {
    dispatch(completeAll)
  }
  const allDeleted = () => {
    dispatch(deleteAll)
  }

  return (
    <>
      <div>
        <button type="button" onClick={allDone()}>complete</button>
        <button type="button" onClick={allDeleted()}>delete</button>
      </div>
      {
        todoList.map((item) => (
          <TodoItem
            name={item.item}
            done={item.done}
            id={item.id} />
        ))
      }
    </>
  )
}

export default TodoList;