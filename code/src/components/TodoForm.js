import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { todos } from "reducers/todos";
import AddTodo from "./AddTodo"
import {
  TodoFormWrapper,
  ButtonWrapper,
  SubCheckboxWrapper,
  TodoInputGroupWrapper,
  TodoHeaderLabel,
  TodoContentLabel,
  TodoHeaderInput,
  TodoTextarea,
  TodoCheckboxGroupWrapper,
  CheckboxWrapper,
  CheckboxLabel,
  CheckboxInput,
  AddTodoButton,
  TodoFormStyled,
} from "../lib/FormStyle";

export const TodoForm = ({ todo, handle }) => {


  const breakpoint = 767;
  const [width, setWidth] = useState(window.innerWidth);

  const [todoTitle, setTodoTitle] = useState(todo.title ? todo.title : "");
  const [todoContent, setTodoContent] = useState(todo.content ? todo.content : "");

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const handleSubmit = event => {
    event.preventDefault();
    setTodoTitle("");
    setTodoContent("");
    handle(todoTitle, todoContent);
  }

  return (
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
            rows={10}
            onChange={(e) => setTodoContent(e.target.value)}
          />
        </TodoInputGroupWrapper>
        {/* <TodoCheckboxGroupWrapper>
          {categories.map((category, index) => (
            <CheckboxWrapper key={category.id}>
              <CheckboxLabel htmlFor={category.name[index]}>
                <CheckboxInput
                  type="checkbox"
                  name={category.name[index]}
                  value={category.name}
                  checked={userCategory.includes(category.name)}
                  onChange={() => onCategoryChange(category.name)}
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
                          onChange={() => onCategoryChange(subcategory.name)}
                        />
                        {subcategory.name}
                      </CheckboxLabel>
                    </SubCheckboxWrapper>
                  ))}
                </SubCheckboxWrapper>}
            </CheckboxWrapper>
          ))}
        </TodoCheckboxGroupWrapper> */}
        <ButtonWrapper>
          <AddTodoButton type="submit">
            Add todo
          </AddTodoButton>
        </ButtonWrapper>
      </TodoFormStyled>
  );
};
