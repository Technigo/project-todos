import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { shoppings } from 'reducers/shoppings'
import { EntryContainer } from '../styledComponents/EntryContainer'
import { Input } from '../styledComponents/Input'
import { Button } from '../styledComponents/Button'
import { Dropdown } from 'styledComponents/Dropdown'


export const AddShopping = () => {
  const [newShop, setNewShop] = useState('')
  const [category, setCategory] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = event => {
    event.preventDefault();

    dispatch(
      shoppings.actions.addShop({
        description: newShop,
        category: category,
        done: false
      })
    );
    setNewShop('')
  }

  return (
    <EntryContainer onSubmit={handleSubmit}>
      <Input
        type='text' required
        placeholder='Add to shopping list'
        value={newShop}
        onChange={event => setNewShop(event.target.value)} />
      <Dropdown
        value={category}
        onChange={event => setCategory(event.target.value)}
      >
        <option value=''>Category</option>
        <option value='Groceries'>Groceries</option>
        <option value='Diaries'>Diaries</option>
        <option value='Bread'>Bread</option>
        <option value='Fruit&amp;Veg'>Fruit&amp;Veg</option>
        <option value='Other'>Other</option>
      </Dropdown>
      <Button type='submit'>
        Add
      </Button>
    </EntryContainer>
  )
}