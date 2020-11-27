import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { todos } from 'reducers/todos';
import { CheckedCheckbox } from 'components/CheckedCheckbox';


const Container = styled.li`
  display: flex;
  justify-content: flex-start;
  align-content: center;
`;

const Div = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0 0 0;
  border-radius: 5px;
`;

const Button = styled.button`
  font-size: 13px;
  font-weight: 800;
  border: none;
  background: none;
  cursor: pointer;
  padding: 2px 0 0 4px;
  margin-right: 5px;

  &:focus {
    outline: 0
  }
`;

const Text = styled.text`
  font-family: monospace;
  font-size: 16px;
`;

export const Item = ({ itemIndex }) => {
  const dispatch = useDispatch();
  const item = useSelector(store => store.todos.list.items[itemIndex]);

  const handleOnChange = event => {
    dispatch(
      todos.actions.setDone({
        itemIndex: itemIndex,
        done: !item.done
      })
    );
  };

  const onDelete = event => {
    dispatch(
      todos.actions.deleteTodo({
        itemIndex: itemIndex
      })
    );
  };

  return (
    <Container>
      <Div>
      <CheckedCheckbox
          isDone={item.done}
          onChangeHandler={handleOnChange} 
          tabIndex='0'
        >
        </CheckedCheckbox>
        <Text>{item.description}</Text>
        
        <Button
          onClick={onDelete}
        >
          ⌫
        </Button>
      </Div>
    </Container>
  )
};  