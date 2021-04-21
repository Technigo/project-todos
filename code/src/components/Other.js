import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from "./TodoCard"



const Other = () => {
    const todoList = useSelector((store) => store.todos);
    const filteredTasksList = todoList.items.filter((item) => item.category === "Other");
  
    return (
      <div >
        <h2>Other</h2>
        {filteredTasksList.map((item) => (
          <TodoCard todo={item}></TodoCard>
        ))}
      </div>
    );
  };
  
export default Other