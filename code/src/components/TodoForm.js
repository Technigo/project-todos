import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import uniqid from 'uniqid';

import { todos } from "reducers/todos";
import {
  TodoFormWrapper,
  TodoFormStyled,
  TodoInputGroupWrapper,
  TodoHeaderLabel,
  TodoContentLabel,
  TodoHeaderInput,
  TodoTextarea,
  TodoCheckboxGroupWrapper,
  CheckboxWrapper,
  CheckboxLabel,
  CheckboxInput,
  SaveTodoButton,
  SubCheckboxWrapper,
  ButtonWrapper,
} from "../lib/FormStyle";

export const TodoForm = () => {
  const { id } = useParams();

  const todo = useSelector((store) =>
    store.todos.items.find((item) => item.id === id)
  );

  const [userCategory, setUserCategory] = useState(id ? todo.category : []);
  const [todoTitle, setTodoTitle] = useState(id ? todo.title : "");
  const [todoContent, setTodoContent] = useState(id ? todo.content : "");
  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 767;

  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((store) => {
    return store.todos.categories
  });

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const handleCategoryChange = categoryValue => {
    userCategory.includes(categoryValue)
      ? setUserCategory(userCategory.filter(item => item !== categoryValue))
      : setUserCategory([...userCategory, categoryValue]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const todoItem = {
      category: userCategory,
      title: todoTitle,
      content: todoContent,
      createdAt: Date.now(),
    };
    if (todoTitle) {
      if(id) {
        todoItem.id = id;
        dispatch(todos.actions.updateItem(todoItem));
      } else {
        todoItem.id = uniqid();
        todoItem.isDone = false;
        dispatch(todos.actions.addItem(todoItem))};
      setTodoTitle("");
      setTodoContent("");
      setUserCategory([]);
      history.push("/");
    } 
  };

  if (id && !todo) {
    return (
      <section>
        <h2>Todo not found!</h2>
      </section>
    );
  }

  return (
    <TodoFormWrapper>
      <TodoFormStyled onSubmit={handleSubmit}>
        <TodoInputGroupWrapper>
          <TodoHeaderLabel htmlFor="todoTitle">H1</TodoHeaderLabel>
          <TodoHeaderInput
            type="text"
            id="todoTitle"
            value={todoTitle}
            aria-label="Write your task heading here"
            onChange={(e) => setTodoTitle(e.target.value)}
          />
        </TodoInputGroupWrapper>

        <TodoInputGroupWrapper>
          <TodoContentLabel htmlFor="todoContent">p</TodoContentLabel>
          <TodoTextarea
            type="textarea"
            id="todoContent"
            value={todoContent}
            aria-label="Write your task here"
            rows="10"
            onChange={(e) => setTodoContent(e.target.value)}
          />
        </TodoInputGroupWrapper>

        <TodoCheckboxGroupWrapper>
          {categories.map((category, index) => (
            <CheckboxWrapper key={category.id}>
              <CheckboxLabel htmlFor={category.name[index]}>
                <CheckboxInput
                  type="checkbox"
                  name={category.name[index]}
                  value={category.name}
                  checked={userCategory.includes(category.name)}
                  onChange={() => handleCategoryChange(category.name)}
                />
                {category.name}
              </CheckboxLabel>
             
              {width > breakpoint && <SubCheckboxWrapper>
                  {category.subcategories.map((subcategory, index) => (
                    <SubCheckboxWrapper key={subcategory.name}>
                      <CheckboxLabel htmlFor={subcategory.name[index]}>
                        <CheckboxInput
                          type="checkbox"
                          name={subcategory.name[index]}
                          value={subcategory.name}
                          checked={userCategory.includes(subcategory.name)}
                          onChange={() => handleCategoryChange(subcategory.name)}
                        />
                        {subcategory.name}
                      </CheckboxLabel>
                    </SubCheckboxWrapper>
                  ))}
                </SubCheckboxWrapper>}
            </CheckboxWrapper>
          ))}       
        </TodoCheckboxGroupWrapper>
  
        <ButtonWrapper>
          <SaveTodoButton type="submit" >
           {id ? "Edit todo" : "Add todo"}
          </SaveTodoButton>          
        </ButtonWrapper>
      </TodoFormStyled>
    </TodoFormWrapper>
  );
};
