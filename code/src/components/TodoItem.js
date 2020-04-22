import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from '../reducers/todos'
import styled from 'styled-components'
import { Button } from 'lib/Button'
import { CustomCheckbox } from 'lib/CustomCheckbox'


const TodosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`


export const TodoItem = ({ itemIndex }) => {

  const dispatch = useDispatch();

  const item = useSelector(store => store.todos.list.items[itemIndex]);

  const handleOnchange = event => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done
      })
    );
  };

  const onRemoveClicked = event => {
    dispatch(
      todos.actions.removeTodo({
        itemIndex: itemIndex
      })
    );
  };


  return (
    <TodosContainer>
      <CustomCheckbox isChecked={item.done}
        onChangeHandler={handleOnchange}
      >
      </CustomCheckbox>
      <Button onClick={onRemoveClicked}
        background="#E66032"
        color="#F5F0D7"
      >-</Button>
    </TodosContainer>
  )
};