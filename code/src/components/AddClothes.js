import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clothes } from 'reducers/clothes';
import uniqid from 'uniqid';
import styled from 'styled-components';

const InnerWrapper = styled.div`
display: flex;
flex-direction: column;
`
const AddText = styled.div`
font-size: 18px;
`

const AddInnerWrapper = styled.div`
backround-color: blue;
`

const Input = styled.div`
width: 35px;
`

const SubmitBtn = styled.button`
width: 30px;
height: 30px;
border-radius: 50px;
`

const AddClothes = () => {
  const [input, setInput] = useState('')
  const dispatch = useDispatch()
  const onFormSubmit = (event) => {
    event.preventDefault();
    const newClothes = { id: uniqid(),
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

export default AddClothes;