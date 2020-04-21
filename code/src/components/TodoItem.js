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

const Icon = styled.svg`
  fill: none;
  stroke: white;
  stroke-width: 2px;
`

const Styled = styled.div`
  margin-right: 10px;
  position: relative;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background: ${props => (props.checked ? '#ED839D' : '#F5F0D7')};

  ${Icon} {
    visibility: ${props => (props.checked ? 'visible' : 'hidden')}
  }

  &:hover {
    background: #ED839D;
  }
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
// opacity: 0;
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
        <Styled
          onChange={handleOnchange}
          checked={item.done}
        ><Checkbox>
          </Checkbox>
          <Icon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </Icon>
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