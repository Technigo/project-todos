import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import uniqid from "uniqid"

import todos from "reducers/todos";

const AddBox = styled.article`
  border: 1px solid orange;
  padding: 10px;
  margin-bottom: 5px;
  border-radius: 5px;  
`


const AddTodo = () => {

    const dispatch = useDispatch()
    const [newItem, setNewItem] = useState('')
    const [visible, setVisible] = useState(false)
    

    const handleSubmit =  (event) => {
        event.preventDefault();
        dispatch(todos.actions.addTask(newTask));
        setNewItem('')
        setVisible(false)
    }

  //   const time = (event) => {
  //     event.preventDefault();
  //     date = new Date()
  //   }
  // //   const date = new Date()
  // // console.log(date, 'ny tid')
  // // const h = date.toDateString()
  // // console.log(h)
  // // const time = date.toLocaleTimeString()
  // // console.log(time, 'klockslag')

    const newTask = {
      id: uniqid(),
      listitem: newItem,
      isDone: false,
    }

    return (
      <section>
        <button 
          type="button"
          onClick={() => setVisible(!visible)}>➕ </button>
          {visible && (
        <AddBox>
          <form onSubmit={handleSubmit}>
            <label>
              New item : &nbsp;
            <input
            type="text"
            placeholder="My new todo"
            onChange={(event) => setNewItem(event.target.value)}
            value={newItem}
            />
            </label>
            <button type="submit">ADD TODO</button>
            </form>
            
            </AddBox>
          )}
        </section>
    )
}

export default AddTodo