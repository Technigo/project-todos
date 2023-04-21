import React from 'react';
import { useDispatch } from 'react-redux';
import tickets from 'reducers/tickets';
import vault from 'reducers/vault';
import { HandleTODOButton } from './buttons';

const HandleVault = ({ item }) => {
  const dispatch = useDispatch()

  const handleClearSaved = () => {
    dispatch(vault.actions.clearSaved());
  }
  return (
    <>
      <HandleTODOButton type="button" onClick={() => dispatch(tickets.actions.moveToTickets({ id: item.id, name: item.name, isDone: false }))}>Activate</HandleTODOButton>
      {item && (
        <HandleTODOButton type="button" onClick={() => dispatch(vault.actions.deleteSavedTodo(item.id))}>Delete</HandleTODOButton>
      )}
      <HandleTODOButton type="button" onClick={handleClearSaved}>Clear All Saved</HandleTODOButton>
    </>
  )
}
export default HandleVault;