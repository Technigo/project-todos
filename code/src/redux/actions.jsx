import { ADD_TODO, TOGGLE_TODO, SET_FILTER, DELETED } from './actionsTypes';

//ADD TODO
let nextTodoId = 0;
export const addTodo = content => ({
  type: ADD_TODO,
  payload: {
    id: ++nextTodoId,
    content
  }
});
//DELETE TODO
export const deleteTodo = id => ({
  type: DELETED, 
  payload: { 
    id
  }
});
//COMPLETE TODO
export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  payload: { id }
});
//FILTER TODOS
export const setFilter = filter => ({
  type: SET_FILTER,
  payload: { filter }
});
