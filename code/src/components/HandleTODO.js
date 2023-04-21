/* eslint-disable max-len */
import React from 'react';
import { useDispatch } from 'react-redux';
import vault from 'reducers/vault';
import tickets from 'reducers/tickets';
import { HandleTODOButton } from './buttons';

// we pass down item since the dispatches regard updates to single items, and eith "item" we add the information about which one it is
const HandleTODO = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      <HandleTODOButton type="button" onClick={() => dispatch(tickets.actions.markAsDone(item))}> Done</HandleTODOButton>
      <HandleTODOButton type="button" onClick={() => dispatch(vault.actions.addToVault({ id: item.id, name: item.name, isDone: false }))}>Save</HandleTODOButton>
      <HandleTODOButton type="button" onClick={() => dispatch(tickets.actions.removeTODO(item))}>Delete</HandleTODOButton>
    </>
  )
}

export default HandleTODO;