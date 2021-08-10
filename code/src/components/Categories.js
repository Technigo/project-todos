import React from "react";
import { useSelector } from "react-redux";
import todos from "reducers/todos";
import Category from "./Category";

// ansvarsområde
// Loopa kategorier
// Filtrerar todos baserat på en kategori
// Rendera en kategori komponent som tar emot titel och en filtrerad todo array
const Categories = () => {
  const categoryList = useSelector((store) => store.todos.categories);
  const todoList = useSelector((store) => store.todos.items);

  const renderCategories = categoryList.map((category) => {
    const filteredTodos = todoList.filter(
      (item) => item.category === category.title
    );

    return (
      <div>
        <Category title={category.title} todos={filteredTodos} />
      </div>
    );
  });

  return <div>{renderCategories}</div>;
};

export default Categories;
