import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clothes } from 'reducers/clothes';

const AddClothes = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newClothes = {
      id: uniqid(),
      name: input,
      isChecked: false }
    dispatch(clothes.actions.addClothes(newClothes));
    setInput('');
  }

  return (
    <InnerWrapper>
      <AddText>Add new things to the list</AddText>
      <AddInnerWrapper>
        <form onSubmit={onFormSubmit}>
          <Input
            type="text"
            value="{input}"
            onChange={(event) => setInput(event.target.value)} />
          <SubmitBtn type="submit" disabled={input.length === 0}>+</SubmitBtn>
        </form>
      </AddInnerWrapper>
    </InnerWrapper>
  )
}

