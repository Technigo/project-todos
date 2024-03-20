/* eslint-disable max-len */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import tickets from 'reducers/tickets';
import { HandleTODOButton } from './buttons';

// we pass down item since the dispatches regard updates to single items, and eith "item" we add the information about which one it is
const HandleTODO = ({ item }) => {
  const singleTodo = useSelector((store) => store.tickets.items.find((todo) => todo.id === item.id))
  console.log(singleTodo)
  const dispatch = useDispatch();
  return (
    <div className="buttonContainer">
      <HandleTODOButton type="button" onClick={() => dispatch(tickets.actions.markAsDone(item))} isDone={singleTodo.isDone}>Done</HandleTODOButton>
      <HandleTODOButton type="button" onClick={() => dispatch(tickets.actions.markAsPrio(item))} isPrioritized={singleTodo.isPrioritized}>Important</HandleTODOButton>
      <HandleTODOButton type="button" onClick={() => dispatch(tickets.actions.removeTODO(item))}>Delete</HandleTODOButton>
    </div>
  )
}

export default HandleTODO;