import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import todos from 'reducers/todos';
import Header from './Header';
import AddTodo from './AddTodo';
import { TaskList, CompletedTaskList } from './TodoListStyled';
import { Button, Task } from './AddTodoStyled';

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

  const deleteCompletedTodo = (event, todoId) => {
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
      <TaskList>
        <AddTodo />

        {todoList.map((singleTodo) => {
          return (
            <Task key={singleTodo.id}>
              <label htmlFor="CheckBox">
                <input
                  type="checkbox"
                  checked={singleTodo.checked}
                  onChange={(event) => handleCheckbox(event, singleTodo.id)} />
              </label>
              {singleTodo.name}
              <button type="button" onClick={(event) => deleteTodo(event, singleTodo.id)}>✖️</button>
            </Task>
          )
        })}

      </TaskList>
      <CompletedTaskList>
        <p>
        You have completed {completedList.length} of {todoList.length + completedList.length} todos.
        </p>
        {completedList.map((completedTodo) => {
          return (

            <Task key={completedTodo.id}>
              <label htmlFor="CheckBox">
                <input
                  type="checkbox"
                  checked={completedTodo.checked}
                  onChange={(event) => handleCheckbox(event, completedTodo.id)} />
              </label>
              {completedTodo.name}
              <button type="button" onClick={(event) => deleteCompletedTodo(event, completedTodo.id)}>✖️</button>
            </Task>
          )
        })}
      </CompletedTaskList>
      <Button type="button" onClick={() => deleteAllTodos()}>Delete All</Button>
    </section>
  )
}

export default TodoList;