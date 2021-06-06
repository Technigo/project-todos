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

const CategoriesOld = () => {
  //useselectors för att ta ut objekten categores och items från vår "globa store"
  const categoryList = useSelector((store) => store.todos.categories);
  const todoList = useSelector((store) => store.todos.items);

  // map metoden (unmutable approach) eftersom den "mappar igenom ett nytt array"
  //map metoden lopar ignom varje kategori i array och

  const renderCategories = categoryList.map((category) => {
    //För varje item  category array filterar den ut todo "items"
    //där item är samma som category
    //varför heter det item.category === category.title och inte item = category, vart kommer .title ifrån?

    const filteredTodos = todoList.filter(
      (item) => item.category === category.title
    );

    // This should return a TodoItem component
    // samtisigt som vi mappar igenom category array so  mappar vi genom varje toto item
    //så retunerar vi todo.description
    //hur vet vi att detta är i rätt ordning från det vi lägger in i "AddnewTodo"?

    const renderedfilteredTodos = filteredTodos.map((todo) => (
      <p>{todo.description}</p>
    ));

    // This should return a Category component
    // Props: category
    return (
      <div>
        <h2>{category.title}</h2>
        <div>{renderedfilteredTodos}</div>

        {/* <Category title={category.title} todos={renderedfilteredTodos} /> */}
      </div>
    );
  });

  return <div>{renderCategories}</div>;
};

const CategoriesBreakdown = () => {
  const categoryList = [
    { title: "Studies and work" },
    { title: "Training and health" },
    { title: "Admin stuff" },
    { title: "Other" },
  ];

  const todoList = [
    {
      id: Date.now(),
      description: "träna",
      iscomplete: false,
      category: "Training and health",
    },
    {
      id: Date.now(),
      description: "2",
      iscomplete: false,
      category: "Other",
    },
    {
      id: Date.now(),
      description: "3",
      iscomplete: false,
      category: "Training and health",
    },
    {
      id: Date.now(),
      description: "4",
      iscomplete: false,
      category: "Training and health",
    },
  ];

  const renderCategories = categoryList.map((category) => {
    console.log(category.title, "title");

    const filteredTodos = todoList.filter(
      (todo) => todo.category === category.title
    );

    console.log(todoList, "todoList");
    console.log(filteredTodos, "filteredTodos");

    const renderedfilteredTodos = filteredTodos.map((todo) => (
      <p>{todo.description}</p>
    ));

    return (
      <>
        <h2>{category.title}</h2>
        {renderedfilteredTodos}
      </>
    );
  });

  return renderCategories;
};

// Component tree categories
// Categories -> Category -> TodoItem
