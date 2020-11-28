import React, { useState } from "react";
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
} from "../lib/FormStyle";

export const EditTodoForm = () => {
  const { id } = useParams();
  const todo = useSelector((store) =>
    store.todos.items.find((item) => item.id === parseInt(id))
  );

  const [userCategory, setUserCategory] = useState(todo.category);
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [todoContent, setTodoContent] = useState(todo.content);
  console.log(todo.content);
  const dispatch = useDispatch();
  const history = useHistory();
  const category = useSelector((store) => store.todos.items.category);
  const categories = useSelector((store) => store.todos.categories);

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
          isCompleted: false,
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
            </CheckboxWrapper>
          ))}
          <AddTodoButton type="button" onClick={onTodoEditSubmit}>
            Edit todo
          </AddTodoButton>
        </TodoCheckboxGroupWrapper>
      </TodoForm>
    </TodoFormWrapper>
  );
};
