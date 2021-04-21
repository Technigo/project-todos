import React from 'react'
import { useSelector } from 'react-redux'
import TodoCard from "./TodoCard"



const AdminStuff = () => {
    const todoList = useSelector((store) => store.todos);
    const filteredTasksList = todoList.items.filter((item) => item.category === "Studies and work");
  
    return (
      <div >
        <h2>Admin stuff</h2>
        {filteredTasksList.map((item) => (
          <TodoCard todo={item}></TodoCard>
        ))}
      </div>
    );
  };
  
export default AdminStuff