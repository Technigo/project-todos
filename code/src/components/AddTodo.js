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
    background-color: #ff9b21;
    color: #fff6e2;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    margin: 0;
  }
`
const AddBox = styled.article`

  form {
    display: flex;
    // flex-direction: column;
    padding-top: 30px;
    // justify-content: center;
    // align-items: center;
    margin-top:40px;
    // gap: 10px;
  }

  .send {
    // width: 70px;
    background-color: #ff9b21;
    cursor: pointer;
    border: none;
    padding: 10px;
    border-radius: 0 5px 5px 0;
    color: #fff6e2;
    font-size: 20px;
  }

  input {
    background-color: #aac3bd;
    font-size: 20px;
    border-radius: 5px 0 0 5px;
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
            maxlength="26"
            onChange={(event) => setNewItem(event.target.value)}
            value={newItem}
            />
            </label>
            <button 
              className="send" 
              type="submit"
              disabled={newItem === ""}><p>ADD</p> 
            
              </button>
            </form>
            
            </AddBox>
          )}
          
        </AddContainer>
    )
}

export default AddTodo