import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import uniqid from "uniqid"

import todos from "reducers/todos";



const AddContainer = styled.section`
  display: flex;
  justify-content: center;
  position: relative;

  p {
    margin: 0;
  }
  `
  // .add {
  //   cursor: pointer;
  //   border: none;
  //   font-size: 50px;
  //   height: 70px;
  //   width: 70px;
  //   position: absolute;
  //   top: -20px;
  //   border-radius: 50%;
  //   background-color: var(--darkblgr);
  //   color: var(--ltgrey);
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  // }

  const Button = styled.button`
  cursor: pointer;
  border: none;
  font-size: 50px;
  // height: 100%;
  // width: 100%;
  position: absolute;
  left: 15px;
  top: 5px;
  border-radius: 50%;
  background-color: var(--darkblgr);
  color: var(--ltgrey);
  display: flex;
  // align-items: center;
  // justify-content: center;
  `

const Circle = styled.div `
  height: 70px;
  width: 70px;
  background-color: var(--darkblgr);
  border-radius: 50%;
  position: absolute;
  top: -20px;
`

const AddBox = styled.article`

  form {
    display: flex;
    justify-content: center;
    padding-top: 30px;
    margin-top:40px;
    width: 80vw;

    @media (min-width: 768px) {
      width: 400px;
    }
  }

  .send {
    background-color: var(--darkblgr);
    cursor: pointer;
    border: none;
    padding: 10px;
    border-radius: 0 5px 5px 0;
    color: var(--ltgrey);
    font-size: 20px;
  }

  input {
    background-color: var(--misty);
    font-size: 20px;
    border-radius: 5px 0 0 5px;
    border: none;
    padding: 10px;
  }
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

    const newTask = {
      id: uniqid(),
      listitem: newItem,
      isDone: false,
    }

    return (
      <AddContainer>
        <Circle>
        <Button
          type="button"
          className="add"
          onClick={() => setVisible(!visible)}>+
        </Button>
        </Circle>
          {visible && (
            <AddBox>
          <form onSubmit={handleSubmit}>
            {/* <label> */}
            <input
            type="text"
            placeholder="My new todo"
            maxLength="26"
            onChange={(event) => setNewItem(event.target.value)}
            value={newItem}
            />
            {/* </label> */}
            <button 
              className="send" 
              type="submit"
              disabled={newItem === ""}><p>Add</p> 
            
              </button>
            </form>
            
            </AddBox>
          )}
          
        </AddContainer>
    )
}

export default AddTodo