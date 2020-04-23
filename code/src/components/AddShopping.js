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
        catgory: category,
        done: false
      })
    );
    setNewShop('')
  }

  return (
    <EntryContainer onSubmit={handleSubmit}>
      <Input
        type='text'
        placeholder='Add to shopping list'
        value={newShop}
        onChange={(event) => setNewShop(event.target.value)} />
      <Dropdown
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value=''>Category</option>
        <option value='groceries'>Groceries</option>
        <option value='diaries'>Diaries</option>
        <option value='bread'>Bread</option>
        <option value='fruitveg'>Fruit&amp;Veg</option>
        <option value='other'>Other</option>
      </Dropdown>
      <Button type='submit'>
        Add
      </Button>
    </EntryContainer>
  )
}