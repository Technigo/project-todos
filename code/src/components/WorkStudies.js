import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from "./TodoCard"



const WorkStudies = () => {
    const todoList = useSelector((store) => store.todos);
    const filteredTasksList = todoList.items.filter((item) => item.category === "Studies and work");
  
    return (
      <div >
        <h2>Studies and Work</h2>
        {filteredTasksList.map((item) => (
          <TodoCard todo={item}></TodoCard>
        ))}
      </div>
    );
  };
  
export default WorkStudies