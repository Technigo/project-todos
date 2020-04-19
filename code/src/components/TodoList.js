import React from "react";
import { useSelector } from "react-redux";
import { TodoInput } from "./TodoInput";
import { TodoItem } from "./TodoItem";
//import { TodoSummary } from "../components/TodoSummary";

export const TodoList = () => {
  const list = useSelector(store => store.todos.list);
  return (
    <div className="todo-list"> 
      
      <TodoInput />
        {list.items.map((item, index) => (
        <TodoItem key={index} itemIndex={index}></TodoItem>
      ))}        
    </div>
  );
};