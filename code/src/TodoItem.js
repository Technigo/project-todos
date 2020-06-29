import React from 'react';
import { useDispatch, useTrackedState } from './store';
import { useFlasher } from './utils';
import './app.css'
//import  { Button } from "@material-ui/core/Button";
//import Checkbox from "@material-ui/core/Checkbox";
//import ListItem from "@material-ui/core/ListItem";
//import { green } from '@material-ui/core/colors';

const renderHighlight = (title, query) => {
  if (!query) return title;
  const index = title.indexOf(query);
  if (index === -1) return title;
  return (
    <>
      {title.slice(0, index)}
      <b>{query}</b>
      {title.slice(index + query.length)}
    </>
  );
};

const TodoItem = ({ id, title, completed }) => {
  const dispatch = useDispatch();
  const state = useTrackedState();
  const delTodo = () => {
    dispatch({ type: 'DELETE_TODO', id });
  };


  return (
    <listItem className="box" ref={useFlasher()}>
      <checkbox checked={!!completed}  onChange={() => dispatch({ type: 'TOGGLE_TODO', id })} />
     
      <span
        style={{
          textDecoration: completed ? 'line-through' : 'none',
        }}
      >
        {completed ? title : renderHighlight(title, state.query)}
      </span>
      <button onClick={delTodo}>X</button>
    </listItem>
  );
};

export default React.memo(TodoItem);