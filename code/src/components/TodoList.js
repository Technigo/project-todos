import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

const TodoList = () => {
  const items = useSelector((store) => store.todos.items);

  return (
    <LayoutStyle>
      <div className="item" key={items.id}>
        <button type="submit">Delete</button>
        <p>Posted: Todays date</p>
      </div>
    </LayoutStyle>
  );
};

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: row;
  max-width: 14em;
  min-width: 330px;
  min-height: 330px;
  height: fit-content;
  margin: auto;
  background-color: #FFFF99;
  margin-top: 3em;
  margin-bottom: 3em;
  transform: rotate(1.2deg);
  box-shadow: 3px 5px 6px 0px rgba(0,0,0,0.5);
  padding: 0.7em;
  padding-bottom: 1.1em;
`

export default TodoList;