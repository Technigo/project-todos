import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { todos } from "reducers/todos";
import {
  TodoFormWrapper,
  TodoForm,
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
  SubCheckboxWrapper,
  ButtonWrapper,
} from "../lib/FormStyle";

export const EditTodoForm = () => {
  const { id } = useParams();

  const todo = useSelector((store) =>
    store.todos.items.find((item) => item.id === id)
  );

  const [userCategory, setUserCategory] = useState(todo.category);
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [todoContent, setTodoContent] = useState(todo.content);
  const [width, setWidth] = useState(window.innerWidth);

  const breakpoint = 767;
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((store) => store.todos.categories);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  const onCategoryChange = (categoryValue) => {
    userCategory.includes(categoryValue)
      ? setUserCategory(userCategory.filter((item) => item !== categoryValue))
      : setUserCategory([...userCategory, categoryValue]);
  };

  const onTodoEditSubmit = (event) => {
    event.preventDefault();

    if (todoTitle) {
      dispatch(
        todos.actions.updateItem({
          id,
          category: userCategory,
          title: todoTitle,
          content: todoContent,
          createdAt: Date.now(),
        })
      );

      history.push("/");
    } else {
      alert("Please write note first");
    }
  };

  if (!todo) {
    return (
      <section>
        <h2>Todo not found!</h2>
      </section>
    );
  }

  return (
    <TodoFormWrapper>
      <TodoForm>
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
                  onChange={() => onCategoryChange(category.name)}
                />
                {category.name}
              </CheckboxLabel>
             
              {width > breakpoint  ? (
                <SubCheckboxWrapper>
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
                </SubCheckboxWrapper>
              ) : null}
            </CheckboxWrapper>
          ))}

          <ButtonWrapper
            buttonTop={width > breakpoint? "75%" : "70%"}
            buttonLeft={width > breakpoint ? "75%" : "70%"}
          >
            <AddTodoButton type="button" onClick={onTodoEditSubmit}>
              Edit todo
            </AddTodoButton>
          </ButtonWrapper>
        </TodoCheckboxGroupWrapper>
      </TodoForm>
    </TodoFormWrapper>
  );
};
