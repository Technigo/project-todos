import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { Item } from './Item.js';
import { todos } from 'reducers/todos';
import  NoteAddIcon from '@material-ui/icons/NoteAddRounded';

const ListContainer = styled.ul`
    display: flex;
    width: 100%;
    flex-direction: column;
`

const ListActionButton = styled.button`
    align-self: center;
    padding: 4px;
`

export const List = () => {
    const [userCategory, setUserCategory] = useState([])
    const [userTodoHeaderInput, setUserTodoHeaderInput] = useState("")
    const [userTodoTextInput, setUserTodoTextInput] = useState("")
    const dispatch = useDispatch();
    const items = useSelector(store => store.todos.items)
    const form = useSelector((store) => store.todos.form);    
//    const category = useSelector((store) => store.todos.category)
    const categories = useSelector((store) => store.todos.categories);
     

    // const submitTodo = (id, index) => {
    //     dispatch(todos.actions.submitTodo({id: id, categoryIndex: index}))
    // }

    //THIS IS FOR THE CHECKBOX ON FORM
    const handleCategoryChange = (categoryValue) => {
        userCategory.includes(categoryValue)
            ? setUserCategory(userCategory.filter((item) => item !== categoryValue))
            : setUserCategory([...userCategory, categoryValue]);
    };

    console.log(userTodoTextInput);
    return (
        <ListContainer>
            <ListActionButton onClick={() => dispatch(todos.actions.goToForm())}>
                <NoteAddIcon></NoteAddIcon>
            </ListActionButton>
            {items.map((item) => (
              <Item key={item.id} item={item}></Item>
              ))}  
            <form>
             <label htmlFor="todoHeadingInput">
                <input
                  type="text"
                  aria-label="Write your task heading here"
                  onChange={((event) => setUserTodoHeaderInput(event.target.value))}
                />
            H1    
            </label>
            <label>
                <textarea
                  type="textarea"
                  aria-label="Write your task here"
                  rows='10'
                  onChange={((event) => setUserTodoTextInput(event.target.value))}
                />
            </label>
            {/* THIS IS FOR THE CHECKBOX ON*/}
            {categories.map((category, index) => (
                <div key={category.id}>
                    <label htmlFor={category.name[index]}>
                        <input
                            type="checkbox"
                            name={category.name[index]}
                            value={category.name}
                            checked={userCategory.includes(category.name)}
                            onChange={() => handleCategoryChange(category.name)}
                        />
                        {category.name}
                    </label>
                </div>
            ))}
        {/* <button disabled={userNoteInput === ''} type="submit" onClick={() => submitTodo(userNoteInput, userCategory)}></button> */}
        
        </form>
    
        </ListContainer>
    );
};