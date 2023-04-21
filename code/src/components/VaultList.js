/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HandleVault from './HandleVault';

const VaultList = () => {
  const vaultList = useSelector((savedTodos) => savedTodos.vault.savedItems);
  const [selectedTODO, setSelectedTODO] = useState(null)

  const handleSavedTODOClick = (item) => {
    if (item === selectedTODO) {
      setSelectedTODO(null)
    } else {
      setSelectedTODO(item)
    }
  }

  return (
    <section>
      {vaultList.map((singleSavedTodo) => {
        const isSelected = singleSavedTodo === selectedTODO;
        return <div key={singleSavedTodo.id}>
          <button type="button" onClick={() => handleSavedTODOClick(singleSavedTodo)}>{singleSavedTodo.name}</button>
          {isSelected && <HandleVault />}
        </div>
      })}
    </section>
  )
}
export default VaultList;