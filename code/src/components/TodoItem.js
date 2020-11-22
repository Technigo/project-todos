import React, { useState } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { todos } from '../reducers/todos';
import { Image } from '../lib/Image';
import styled from 'styled-components';
import CustomCheckbox from '../lib/CustomCheckbox';



const TodoItem = ({ itemIndex }) => {
  const item = useSelector(store => store.todos.list.items[itemIndex])
  const [checked, setChecked] = useState(item.complete);

  const dispatch = useDispatch();

  //Remove todos from list
  const onRemoveTodo = () => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex,
      })
    )
  }

  //Mark todo as complete 
  const handleChange = (event) => {
    dispatch (
      todos.actions.setComplete({
        itemIndex: itemIndex,
        complete: !item.complete
      }) 
    );  
    setChecked(event.target.checked);
  }

  return (
    <Container>
      <label>
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
      </input> */}
      
        <p className="todo__item-description">{item.description}</p> 
        <p className="todo__item-category">{item.category}</p> 
        <p>Created: {moment(item.date).fromNow()}</p>
        <p>{moment(item.dueDate).format('MMM Do YYYY')}</p> 

        <div className="todo__item-delete" onClick={onRemoveTodo}>
          <Image src="./assets/garbage.svg" alt="trash bin"/>
        </div>
    </Container>
  )
}
export default TodoItem

const Container = styled.div `
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`
