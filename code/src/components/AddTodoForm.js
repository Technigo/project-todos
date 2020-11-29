import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { todos } from "reducers/todos";
import { useHistory } from "react-router-dom";
import uniqid from "uniqid";
import {
  TodoFormWrapper,
  ButtonWrapper,
  SubCheckboxWrapper,
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
} from "../lib/FormStyle";

export const AddTodoForm = () => {
  const [userCategory, setUserCategory] = useState([]);
  const [todoTitle, setTodoTitle] = useState("");
  const [todoContent, setTodoContent] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 767;
  const dispatch = useDispatch();
  const categories = useSelector((store) => store.todos.categories);
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  console.log(categories[1].subcategories);

  const onCategoryChange = (categoryValue) => {
    userCategory.includes(categoryValue)
      ? setUserCategory(userCategory.filter((item) => item !== categoryValue))
      : setUserCategory([...userCategory, categoryValue]);
  };
  console.log(userCategory);

  const onTodoAdd = (event) => {
    event.preventDefault();
    if (todoTitle) {
      dispatch(
        todos.actions.addItem({
          id: uniqid(),
          category: userCategory,
          title: todoTitle,
          content: todoContent,
          isCompleted: false,
          createdAt: Date.now(),
        })
      );
      setTodoTitle("");
      setTodoContent("");
      setUserCategory([]);
      history.push("/");
    } else {
      alert("Please write note first");
    }
  };

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
            rows={10}
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
                {width > breakpoint ? (
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
        </TodoCheckboxGroupWrapper>
        <ButtonWrapper >
          <AddTodoButton type="submit" onClick={onTodoAdd} >
            Add todo
          </AddTodoButton>
        </ButtonWrapper>
      </TodoForm>
    </TodoFormWrapper>
  );
};
