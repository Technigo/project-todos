import React from 'react';
import { Box } from "@chakra-ui/react"
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selector";

import { Todo } from "./Todo";
import { Done } from './illustrations/Done';

export const TodoList = () => {
  const { todos, visibilityFilter } = useSelector(state => state);
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);

// CHEKS IF THERE ARE TODOS IF NOT SHOWS THE <DONE /> COMPONENT OTHERWISE MAPS THE LIST OF TODOS AND DISPLAYS THEM

  return (
    <Box my={5}>
      {filterTodos.length ? 
      filterTodos.map(todo => (
        <Todo key={`todo-${todo.id}`} todo={todo}></Todo> 
      )) 
      : <Done /> }
    </Box>
  )
}
