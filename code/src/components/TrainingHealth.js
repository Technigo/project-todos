import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from "./TodoCard"



const TrainingHealth = () => {
    const todoList = useSelector((store) => store.todos);
    const filteredTasksList = todoList.items.filter((item) => item.category === "Training and health");
  
    return (
      <div >
        <h2>Training and health</h2>
        {filteredTasksList.map((item) => (
          <TodoCard todo={item}></TodoCard>
        ))}
      </div>
    );
  };
  
export default TrainingHealth