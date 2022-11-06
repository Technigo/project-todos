/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import items from 'reducers/Item';

const AddItem = () => {
  const itemList = useSelector((store) => store.items.items);
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newItem = { id: Date.now().toString(),
      name: inputValue,
      isBought: false }
    dispatch(items.actions.addItem(newItem));
    setInputValue('');
    localStorage.setItem('itemlist', JSON.stringify(itemList))
  }

  return (
    <form onSubmit={onFormSubmit}>
      <label>
           New Item:
        <input type="text" value={inputValue} onChange={(event) => setInputValue(event.target.value)} />
      </label>
      <button type="submit"> Add Item </button>
    </form>
  )
}

export default AddItem;