import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clothes } from 'reducers/clothes';
import styled from 'styled-components';

const InnerWrapper = styled.div`
display: flex;
flex-direction: column;
`

const ClothesItem = styled.div`
font-size: 20px;
`

const CheckboxList = styled.div`
font-size: 23px;
`

const DeleteBtn = styled.button`
width: 25px;
height: 30px;
`

const ClothesList = () => {
  const clothesList = useSelector((store) => store.clothes.items)
  const dispatch = useDispatch();
  const onCheckedToggle = (id) => {
    dispatch(clothes.actions.toggleItem(id));
  }
  const onDeleteClothesBtn = (clothesIndex) => {
    dispatch(clothes.actions.deleteClothes(clothesIndex));
  }

  return (
    <InnerWrapper>
      {clothesList.map((singleClothes, index) => {
        return (
          <ClothesItem key={singleClothes.id}>
            <CheckboxList>
              <input
                type="checkbox"
                id={singleClothes.id}
                checked={singleClothes.isChecked}
                onChange={() => onCheckedToggle(singleClothes.id)} />
            </CheckboxList>
            <DeleteBtn onClick={() => onDeleteClothesBtn(index)} type="button" />
          </ClothesItem>
        )
      })}
    </InnerWrapper>
  )
}

export default ClothesList;