import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import moment from 'moment';
import styled from 'styled-components';
import { todos } from '../reducers/todos';
import { TrashBin } from '../lib/Image';
import { Span } from '../lib/Text';
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
        <Label>
        <CustomCheckbox
          checked={item.complete ? true : ""}
          onChange={toggleComplete}
        ></CustomCheckbox>
        </Label>
        <TodoContainer>
          <Description checked={item.complete ? true : ''}>
            {item.description}
          </Description> 
        </TodoContainer>
        <TrashBin src="../assets/garbage.svg" onClick={handleRemoveTodo} /> 
      </Todo>
      <Open active={active}>
        <AccordionText><Span>Category:</Span> {item.category}</AccordionText>
        <AccordionText><Span>Created:</Span> {moment(item.createdAt).fromNow()}</AccordionText>
        <AccordionText><Span>Due:</Span> {moment(item.dueDate).format('MMM Do YYYY')}</AccordionText>
      </Open>
    </Container>
  );
};
export default TodoItem;

//LOCAL STYLES
const Container = styled.article`
  margin-bottom: 20px;
`;

//To be able to click the custom checkbox
const Label = styled.label `
`

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
`;

const AccordionText = styled.p`
  color: #000;

  @media (min-width: 668px) {
    font-size: 26px;
  }
`;

const TodoContainer = styled.div `
  width: 100%;  
  display: flex;
  justify-content: space-between;  
  flex-direction: column; 
  align-items: flex-start;
  margin-left: 10px;

  &:checked + ${AccordionText} {
    text-decoration: line-through;
  }
`;

const Description = styled.p`
  color: #000;
  font-size: 20px;
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
    background-color: papayawhip;
    `
  }
`;