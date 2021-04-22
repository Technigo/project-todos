import React, { useState } from 'react';
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
  background-color: #5899E2;
  color: white;
  border: 1px solid #5899E2;
  border-radius: 30px;
  padding: 10px 20px;
`;

const CancelBtn = styled.button`
  background-color: #D81159;
  border: 1px solid #D81159;
  border-radius: 30px;
  padding: 10px 20px;
  color: white;
  font-weight: bold;
  margin-right: 10px;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid white;  
  background: transparent;
  width: 100%;
  padding: 8px 0 5px 0;
  font-size: 16px;
  color: white;
  margin-bottom: 40px;
`;

const Plus = styled(FaPlus)`
  color: white;
  margin-right: 5px;
`;

export const AddTodo = ({ setAddView }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('')

  return (
    <Container>
      <h2>Add Todo</h2>
      <InputContainer>
        <Input 
          type="text"
          placeholder="Type here"
          value={value}
          onChange={(event) => setValue(event.target.value)}
        >
        </Input>
        <ButtonContainer>
          <CancelBtn
              type="button"
              onClick={() => setAddView(false)}
              >
              Cancel
          </CancelBtn>
          <AddButton
            type="submit"  
            onClick={() => {
              dispatch(todos.actions.addTodo(value));
              setAddView(false);
            }}
            required
          >
          <Plus />
            ADD
          </AddButton>
      </ButtonContainer>
     </InputContainer>
    </Container>
  )
}