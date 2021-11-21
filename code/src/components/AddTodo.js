import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import todos from '../reducers/todos';
//styling text input container
const InputContainer = styled.div`
  	display: flex;
    flex-direction: row;
    width: 100%;
    height: 50px;
    cursor:pointer;
    margin-bottom: 15px;
  `
  //button to add input text from to list
	const AddButton = styled.button `
   margin-right:10px;
    border: solid 1px, black;
    width: 20%;
    justify-content: flex-end;
    background: transparent;
    color: inherit;
    -webkit-appearance: none;
    -moz-appearance: none;

  @media (min-width: 768px) {
    flex-direction: column;
	margin-top: 20px;
    margin-left: 80px;
    margin-right: 80px;
    margin-bottom: 20px;
  }
  @media (min-width: 1366px) {
    justify-content: center;
  }
`;

//const StyledInput = styled.input`
 // border: none;
  //  width: 80%;
   // font-size: 16px;
   // margin-left: 30px;
  //  &:focus {
   //    outline:none;
  //    }   
  //  &::-webkit-input-placeholder {
  //      color: #CFD0D0;
  //      font-size: 20px;
    //    margin-left: 30px
  //    }   
  //@media (min-width: 768px) {
    padding: 25px;
 // }
 // @media (min-width: 1366px) {
  //  width: 400px;
  //  margin-right: 30px;
 // }
//`;

const AddTodo = () => {
  const [input, setInput] = useState ('');
  const dispatch = useDispatch();
  
  const onAddTodo = (input) => {
    dispatch(todos.actions.addTodo(input));

    setInput('');
  };

	return (
		<InputContainer>
		
		{/*<StyledInput
			type="text"
			value={input}
			onChange={(event) => setInput(event.target.value)}
			/>

			<AddButton onClick= {onAddTodo}>
			 </AddButton>
			 */}
		</InputContainer>
	);
};

export default AddTodo;




