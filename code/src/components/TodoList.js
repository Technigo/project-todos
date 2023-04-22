import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import Header from './Header';
import AddTodo from './AddTodo';

const TodoList = () => {
  const dispatch = useDispatch()
  const todoList = useSelector((store) => store.todos.items.filter((todo) => !todo.checked))
  const completedList = useSelector((store) => store.todos.items.filter((todo) => todo.checked))
  const handleCheckbox = (event, todoId) => {
    dispatch(todos.actions.toggleTodo(todoId));
  }
  const deleteTodo = (event, todoId) => {
    dispatch(todos.actions.deleteSingleTodo(todoId));
  }

  const deleteAllTodos = () => {
    if (window.confirm('Are you sure you want to delete all tasks?')) {
      dispatch(todos.actions.deleteAllTodos());
    }
  }

  return (
    <section>
      <Header />
      <AddTodo />
      <p>
        You have completed {completedList.length} of {todoList.length + completedList.length} todos.
      </p>
      <ul>
        {todoList.map((singleTodo) => {
          return (
            <li key={singleTodo.id}>
              {singleTodo.name}
              <label htmlFor="CheckBox">
                <input
                  type="checkbox"
                  checked={singleTodo.checked}
                  onChange={(event) => handleCheckbox(event, singleTodo.id)} />
              </label>
              <button type="button" onClick={() => deleteTodo(singleTodo.id)}>✖️</button>
            </li>
          )
        })}
      </ul>
      <h2>Completed todos</h2>
      <ul>
        {completedList.map((singleTodo) => {
          return (

            <li key={singleTodo.id}>
              {singleTodo.name}
              <label htmlFor="CheckBox">
                <input
                  type="checkbox"
                  checked={singleTodo.checked}
                  onChange={(event) => handleCheckbox(event, singleTodo.id)} />
              </label>
              <button type="button" onClick={() => deleteTodo(singleTodo.id)}>✖️</button>
            </li>
          )
        })}
      </ul>
      <button type="button" onClick={() => deleteAllTodos()}>Empty List</button>
    </section>
  )
}

export default TodoList;