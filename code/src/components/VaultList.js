/* eslint-disable react/jsx-closing-tag-location */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import HandleVault from './HandleVault';
import { TODOButton } from './buttons';

// this component displays the saved items
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
    <section id="vaultListSection">
      {vaultList.map((singleSavedTodo) => {
        const isSelected = singleSavedTodo === selectedTODO;
        return <div key={singleSavedTodo.id}>
          <TODOButton
            type="button"
            onClick={() => handleSavedTODOClick(singleSavedTodo)}
            className={isSelected ? 'selectedSaved' : ''}>{singleSavedTodo.name}</TODOButton>
          {isSelected && <HandleVault item={singleSavedTodo} />}
        </div>
      })}
    </section>
  )
}
export default VaultList;