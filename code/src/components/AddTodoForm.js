import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "reducers/todos";

export const AddTodoForm = () => {
  const [userCategory, setUserCategory] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");
  const dispatch = useDispatch();
  const category = useSelector((store) => store.todos.items.category);
  const categories = useSelector((store) => store.todos.categories);

  const onCategoryChange = (categoryValue) => {
    userCategory.includes(categoryValue)
      ? setUserCategory(userCategory.filter((item) => item !== categoryValue))
      : setUserCategory([...userCategory, categoryValue]);
  };

  const onTodoAdd = (event) => {
    event.preventDefault();
    if (todoTitle && todoContent) {
      dispatch(
        todos.actions.addItem(title, content, category))
        //   id: Date.now(),
        //   category: userCategory, 
        //   title: todoTitle, 
        //   content: todoContent,
        //   isCompleted: false,
        //   createdAt: Date.now()
        // })
    
        setTodoTitle('');
        setTodoContent('');
        setUserCategory([]);
    } else {
      alert('Please write note first')
    }
  }

  return (
    <form>
      <label htmlFor="todoTitle">
        <input
          type="text"
          id="todoTitle"
          value={todoTitle}
          aria-label="Write your task heading here"
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        H1
      </label>
      <label htmlFor="todoContent">
        <textarea
          type="textarea"
          ic="todoContent"
          value={todoContent}
          aria-label="Write your task here"
          rows="10"
          onChange={(e) => setTodoContent(e.target.value)}
        />
      </label>
      {categories.map((category, index) => (
        <div key={category.id}>
          <label htmlFor={category.name[index]}>
            <input
              type="checkbox"
              name={category.name[index]}
              value={category.name}
              checked={userCategory.includes(category.name)}
              onChange={() => onCategoryChange(category.name)}
            />
            {category.name}
          </label>
        </div>
      ))}
      <button 
        type="submit" 
        onClick={onTodoAdd}
        > Add todo
        </button>
    </form>
  );
};
