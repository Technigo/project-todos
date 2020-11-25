import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { todos } from 'reducers/todos'

export const EditTodoForm = () => {
  const { id } = useParams();
  const todo = useSelector(store => 
       store.todos.items.find(item => item.id === parseInt(id)));

  const [userCategory, setUserCategory] = useState(todo.category);
  const [todoTitle, setTodoTitle] = useState(todo.title);
  const [todoContent, setTodoContent] = useState(todo.content);

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
    
    if (todoTitle && todoContent) {
      dispatch(
        todos.actions.updateItem({
          id,
          category: userCategory, 
          title: todoTitle, 
          content: todoContent,
          isCompleted: false,
          createdAt: Date.now()
        })
      );
  
        history.push('/')
        
    } else {
      alert('Please write note first')
    }
  };
    
    if (!todo) {
        return (
            <section>
                <h2>Todo not found!</h2>
            </section>
        )
    };

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
            type="button" 
            onClick={onTodoEditSubmit}
            > Add todo
            </button>
        </form>
      );
    };
