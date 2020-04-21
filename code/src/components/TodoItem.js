import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { todos } from '../reducers/todos'
import styled from 'styled-components'
import { Button } from 'lib/Button'
// import { Checkbox } from 'lib/Checkbox'


const TodosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Div = styled.div`
  display: flex;
  align-items: center;
`

const Styled = styled.div`
  margin-right: 10px;
  position: relative;
  top: 0px;
  left: 0px;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: #F5F0D7;

  &:hover {
    background: #ED839D;
  }

  &:before {
    content: '';
  }

  &:after {
    content: "✔";
    position: absolute;
    top: 5px;
    left: 10px;
    font-size: 16px;
    color: #ED839D;
    }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
position: absolute;
opacity: 0;
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
      <Div>
        <Styled>
          <Checkbox
            onChange={handleOnchange}
            checked={item.done ? "checked" : ""}
          ></Checkbox>
        </Styled>
        <p>{item.description}</p>
      </Div>

      <Button onClick={onRemoveClicked}
        background="#E66032"
        color="#F5F0D7"
      >-</Button>
    </TodosContainer>
  )
};