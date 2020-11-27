import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import moment from 'moment';
import styled from 'styled-components';
import { todos } from '../reducers/todos';
import { TrashBin } from '../lib/Image';
import { ParagraphBlack, Span } from '../lib/Text';
import CustomCheckbox from '../lib/CustomCheckbox';

const TodoItem = ({ item }) => {
  const [active, setActive] = useState('');
  const dispatch = useDispatch();

  const handleRemoveTodo = () => {
    dispatch(
      todos.actions.removeTodo({
        id: item.id,
      })
    );
  };
  
  const toggleComplete = () => {
    dispatch(todos.actions.setComplete(item.id));
  };

  const toggleAccordion = () => {
    setActive(active === '' ? 'active' : '');
  };

  return (
    <Container>
      <Todo className={`accordion ${active}`} onClick={toggleAccordion}>
        <label>
        <CustomCheckbox
          checked={item.complete ? true : ""}
          onChange={toggleComplete}
        ></CustomCheckbox>
        </label>
        <TodoContainer>
          <Description checked={item.complete ? true : ''}>
              {item.description}
          </Description> 
        </TodoContainer>
        <TrashBin src="../assets/garbage.svg" onClick={handleRemoveTodo} /> 
      </Todo>

      {/* <Open style={{ height: `${height}` }}> */}
      <Open active={active}>
        <ParagraphBlack><Span>Category:</Span> {item.category}</ParagraphBlack>
        <ParagraphBlack><Span>Created:</Span> {moment(item.createdAt).fromNow()}</ParagraphBlack>
        <ParagraphBlack><Span>Due:</Span> {moment(item.dueDate).format('MMM Do YYYY')}</ParagraphBlack>
      </Open>
    </Container>
  );
};
export default TodoItem;

//LOCAL STYLES
//to get rid of the space between todo text and description 
//when accordion is active
const Container = styled.article`

`;

const Todo = styled.li `
  width: 100%;
  background-color: transparent; 
  border: none;
  border-bottom: 1px solid #3d5f6b;
  display: flex;
  align-items: center;
  font-family: 'Architects Daughter', cursive;
  font-size: 16px;
  padding: 10px;

  ${({ active }) => active === 'active' &&
    `background-color: red;
    `
  }
`;

const TodoContainer = styled.div `
  width: 100%;  
  display: flex;
  justify-content: space-between;  
  flex-direction: column; 
  align-items: flex-start;
  margin-left: 10px;

  &:checked + ${ParagraphBlack} {
    text-decoration: line-through;
  }
`;

const Description = styled.p`
  color: #000;
  ${({ checked }) => checked && `
    opacity: 0.3;
    `
  }  
  @media (min-width: 668px) {
    font-size: 26px;
  } 
`;

const Open = styled.div`
  padding: 4px;
  overflow: hidden;
  height: 0;
  ${({ active }) => active === 'active' &&
    `height: auto;
    `
  }
`;

