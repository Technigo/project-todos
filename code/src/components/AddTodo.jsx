import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { todos } from '../reducers/todos';
import styled from 'styled-components';
// import { AddBtn } from './AddBtn'
import { FaPlus } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

const AddButton = styled.button`
  background-color: red;
  color: white;
  border: 1px solid red;
  border-radius: 30px;
  padding: 10px 20px;
  margin-right: 10px;
`;

const CancelBtn = styled.button`
  background-color: white;
  border: 1px solid red;
  border-radius: 30px;
  padding: 10px 20px;
`;

export const AddTodo = ({ setAddView }) => {
  const dispatch = useDispatch();
  const [description, setDescription] = useState('')

  return (
    <Container>
      <h2>Add Todo</h2>
      <InputContainer>
        <input 
          type="text"
          onChange={(event) => setDescription(event.target.value)}
        ></input>
        <ButtonContainer>
          <AddButton
            type="submit"  
            onClick={() => {
              dispatch(todos.actions.addTodo(description));
              setAddView(false);
            }}
          >
          <FaPlus />
            ADD
          </AddButton>
          <CancelBtn
            type="button"
            onClick={() => setAddView(false)}
            >
            Cancel
        </CancelBtn>
      </ButtonContainer>
     </InputContainer>
    </Container>
  )
}