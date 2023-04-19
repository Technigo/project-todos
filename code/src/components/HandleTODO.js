import React from 'react';
import { useDispatch } from 'react-redux';
import vault from 'reducers/vault';
import tickets from 'reducers/tickets';

const HandleTODO = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <button type="button" onClick={() => dispatch(tickets.actions.markAsDone(item))}>This one&apos;s Done</button>
      <button type="button" onClick={() => dispatch(vault.actions.addToVault({ id: item.id, name: item.name, isDone: false }))}>Save</button>
      <button type="button" onClick={() => dispatch(tickets.actions.removeTODO(item))}>Delete</button>
    </>
  )
}

export default HandleTODO;