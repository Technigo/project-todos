import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { todos } from '../reducers/todos';
import CustomCheckbox from '../lib/CustomCheckbox';
import { Image } from '../lib/Image';
import { TodoParagraph } from '../lib/Text'

const TodoItem = ({ item }) => {
  const [checked, setChecked] = useState(item.complete);
  const [active, setActive] = useState('');
  const [height, setHeight] = useState('0px');
  //const [rotate, setRotate] = useState('');

  const dispatch = useDispatch();

  const onRemoveTodo = () => {
    dispatch(
      todos.actions.removeTodo({
        id: item.id,
      })
    )
    console.log(item.id)
  }
  
  const handleOnChange = event => {
    dispatch(todos.actions.setComplete(item.id))
    // dispatch(
    //   todos.actions.setComplete({
    //     id: item.id,
    //     complete: !item.complete,
    //   })
    //);
    console.log(item.id)
    setChecked(event.target.checked);
  };

  const toggleAccordion = () => {
    setActive(active === '' ? 'active' : '');
    setHeight(active === 'active' ? '0px' : 'auto');
    //setRotate(active === 'active' ? '' : `${rotate}`);
  };

  return (
    <Container>
      <MyTodos className={`accordion ${active}`} onClick={toggleAccordion}>
        <label>
        <CustomCheckbox
          //checked={checked}
          checked={item.complete ? true : ""}
          onChange={handleOnChange}
        ></CustomCheckbox>
        </label>
        <TodoContainer>
          <TodoParagraph>
              {item.description}
          </TodoParagraph> 
        </TodoContainer>
        <Image src="../assets/garbage.svg" onClick={onRemoveTodo} /> 
      </MyTodos>

      <Open style={{ height: `${height}` }}>
          <TodoParagraph><Span>Category:</Span> {item.category}</TodoParagraph>
          <TodoParagraph><Span>Created:</Span> {moment(item.date).fromNow()}</TodoParagraph>
          <TodoParagraph><Span>Due:</Span> {moment(item.dueDate).format('MMM Do YYYY')}</TodoParagraph>
        </Open>
    </Container>
  );
};

export default TodoItem;

const Container = styled.div`
`

export const MyTodos = styled.li `
  width: 100%;
  background-color: transparent; 
  border: none;
  border-bottom: 1px solid #3d5f6b;
  display: flex;
  align-items: center;
  font-family: 'Architects Daughter', cursive;
  font-size: 16px;
  padding: 10px;
`

const TodoContainer = styled.div `
  width: 100%;  
  display: flex;
  justify-content: space-between;  
  flex-direction: column; 
  align-items: flex-start;
  margin-left: 10px;
`;

const Open = styled.div`
  padding: 4px;
  overflow: hidden;
`;

const Span = styled.span`
  font-weight: bold;
`



/*
import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos';
import { Image } from '../lib/Image';
import styled from 'styled-components';
import CustomCheckbox from '../lib/CustomCheckbox';
import TodoAccordion from './TodoAccordion';



const TodoItem = ({ item }) => {
  //const item = useSelector(store => store.todos.list.items.find(item => item.id === id))//find 
  //const item = useSelector((store) => store.todos.list.items[id])
  //console.log(item)
  const [checked, setChecked] = useState(item.complete);

  const dispatch = useDispatch();

  //Remove todos from list
  const onRemoveTodo = () => {
    dispatch(
      todos.actions.removeTodo({
        id: item.id,
      })
    )
    console.log(item.id)
  }

  //Mark todo as complete 
  // const handleOnChange = (event) => {
  //   dispatch (
  //     todos.actions.setComplete({
        /////itemIndex: itemIndex,
        /////complete: !item.complete
        //id: item.id,
        //complete: !item.complete,
      //}) 
  //   );  
  //   setChecked(event.target.checked);
  //   console.log(item.complete)
  //   console.log(item.id)
  // }

  const handleOnChange = (event) => {
    dispatch(todos.actions.setComplete(item.id))
    setChecked(event.target.checked);
    //console.log(item.complete)
    //console.log(item.id)
  }

  return (
    <>
      {/* <label>
        <CustomCheckbox
          checked={checked}
          onChange={handleChange}
        ></CustomCheckbox>
      </label> 
      {/* <input 
        type="Checkbox"
        onChange={handleChange}
        className="todo__item-checked"
        checked={item.complete ? "checked" : ""}
      >
      </input> 
        <TodoAccordion 
          accordionText={item.description}
          accordionCategory={item.category}
          accordionDueDate={moment(item.dueDate).format('MMM Do YYYY')}
          accordionCreated={moment(item.date).fromNow()}
          checked={checked}
          handleOnChange={handleOnChange}
          onRemoveTodo={onRemoveTodo}>
                  
        </TodoAccordion>
        {/* <p className="todo__item-description">{item.description}</p>  
        {/* <p className="todo__item-category">{item.category}</p>  
        {/* <p>Created: {moment(item.date).fromNow()}</p> 
        {/* <p>{moment(item.dueDate).format('MMM Do YYYY')}</p>  

       <div className="todo__item-delete" onClick={onRemoveTodo}>
          <Image src="./assets/garbage.svg" alt="trash bin"/>
        </div> 
    </>
  )
}
export default TodoItem */

// const Container = styled.div `
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
// `
