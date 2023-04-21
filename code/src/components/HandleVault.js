import React from 'react';
import { useDispatch } from 'react-redux';
import tickets from 'reducers/tickets';
import vault from 'reducers/vault';

const HandleVault = ({ item }) => {
  const dispatch = useDispatch()

  const handleClearSaved = () => {
    dispatch(vault.actions.clearSaved());
  }
  return (
    <>
      <button type="button" onClick={() => dispatch(tickets.actions.moveToTickets({ id: item.id, name: item.name, isDone: false }))}>Activate</button>
      {item && (
        <button type="button" onClick={() => dispatch(vault.actions.deleteSavedTodo(item.id))}>Delete</button>
      )}
      <button type="button" onClick={handleClearSaved}>Clear All Saved</button>
    </>
  )
}
export default HandleVault;