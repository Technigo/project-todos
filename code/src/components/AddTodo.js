import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import uniqid from "uniqid"

import todos from "reducers/todos";

const AddContainer = styled.section`
  display: flex;
  justify-content: center;
  position: relative;

  .add {
    cursor: pointer;
    border: none;
    font-size: 50px;
    height: 70px;
    width: 70px;
    position: absolute;
    top: -20px;
    border-radius: 50%;
    background-color: #CE5D45;
    color: #fff6e2;
  }
`
const AddBox = styled.article`

  form {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    justify-content: center;
    align-items: center;
    margin-top:40px;
    gap: 10px;
  }

  .send {
    width: 70px;
    background-color: #CE5D45;
    cursor: pointer;
    border: none;
    padding: 5px;
    border-radius: 5px;
    color: #fff6e2;
  }

  input {
    background-color: #F6AC87;
    font-size: 20px;
    border-radius: 5px;
    border: none;
    padding:10px;
  }
`

// const NewtodoButton = styled.button`
//   height: 15px;
//   width: 15px;
//   position: absolute;
//   top: -10px;
//   border: none;
//   cursor: pointer;
//   text-align: center;
//   `
  


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

    const newTask = {
      id: uniqid(),
      listitem: newItem,
      isDone: false,
    }

    return (
      <AddContainer>
        <button 
          type="button"
          className="add"
          onClick={() => setVisible(!visible)}>+
        </button>
        
          {visible && (
            <AddBox>
          <form onSubmit={handleSubmit}>
            <label>
            <input
            type="text"
            placeholder="My new todo"
            onChange={(event) => setNewItem(event.target.value)}
            value={newItem}
            />
            </label>
            <button className="send" type="submit">ADD</button>
            </form>
            
            </AddBox>
          )}
          
        </AddContainer>
    )
}

export default AddTodo