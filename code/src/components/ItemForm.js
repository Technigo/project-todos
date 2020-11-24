import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from 'reducers/todos';

export const ItemForm = () => {
    const form = useSelector((store) => store.todos.form);
    const dispatch = useDispatch();
    
    const category = useSelector((store) => store.todos.category)
    const categories = todos.categories;
    const [userCategory, setUserCategory] = useState("")
    return (

//getting started on form

        <form>
            <label htmlFor="todoHeadingInput">
                <input
                  value={todoHeadingInput}
                  type="text"
                  aria-label="Write your task heading here"
                />
            H1    
            </label>
            <label>
                <input
                  value={todoTextInput}
                  type="textarea"
                  aria-label="Write your task here"
                  rows={10}
                />
            </label>
            {categories.map((category, index) => (
                <div key={index}>
                    <label>
                        <input
                            id={index}
                            type="checkbox"
                            name={`${input.name}[${index}]`}
                            value={todos.category}
                            checked={input.value.indexOf(todo.category) !== -1}
                            onChange={((event) => setUserCategory(event.target.value))}
                        />
                        {category}
                    </label>
                </div>
            ))}
            <label>
                <input 

                />
            </label>
        </form>
    )
}