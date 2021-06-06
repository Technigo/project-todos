import React from "react";
import TodoItem from "./TodoItem";

// ansvarsområden
// Ta emot kategori titel (title )
// Ta emot en array med todos som ska visas ( )
// Loopa todos och render en todo komponent per todos
// Denna komponent är inte smart nog att veta om todo array är filtrerad eller inte
// spread operator alla egenskaper inom todo item, kommer TodoItem kunna ta emot

const Category = ({ title, todos }) => {
  const renderTodos = todos.map((todo) => (
    <TodoItem
      description={todo.description}
      isComplete={todo.isComplete}
      id={todo.id}
    />
  ));

  console.log(renderTodos, "renderTodos");

  return (
    <div>
      <h1>{title}</h1>
      {renderTodos}
    </div>
  );
};

export default Category;

// nästa steg en ny fil todoItem

// Categories (prop1)
//  Category
//    Todos
//      TodoItem
