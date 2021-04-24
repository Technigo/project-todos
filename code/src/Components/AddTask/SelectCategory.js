import React from "react";
import styled from "styled-components";

import { Checkbox } from "../Selects/Checkbox";

export const SelectCategory = ({ setCategory, checked, setChecked }) => {
  const categoryArr = [
     { name: "travel", symbol: require("../../Assets/travel.svg"), color: "#1687a7"},
    { name: "chores", symbol: require("../../Assets/chores.svg"), color:"#91091e"},
    { name: "recipes", symbol: require("../../Assets/recipe.svg"), color:"#184d47"},
    { name: "shopping", symbol: require("../../Assets/shopping.svg"), color:"#822659"},
    { name: "work", symbol: require("../../Assets/work.svg"), color:"#325288"},
    { name: "other", symbol: require("../../Assets/other.svg"), color:"#f0a500"}
  ];
  let newArr = []
  const handleChange = (item) => {
    setChecked(item.name)
    newArr= [item.name, item.symbol];
    setCategory(newArr)
  }

  return (
    <CheckboxWrapper>
      {categoryArr.map((item) => (
        <Label key={item.name} htmlFor={item.name}>
          <Checkbox
            checked={checked === item.name}
            onChange={() => handleChange(item)}
            id={item.name}
            color={item.color}
            type="category"
          />
          <ImageContainer>
          <Image src={item.symbol} />
          </ImageContainer>
        </Label>
      ))}
    </CheckboxWrapper>
  );
};
const Label = styled.label`
display: flex;
align-items: center;

  font-size: 14px;
  color: grey;
`;

const CheckboxWrapper = styled.div`
width: 100%;
  display: flex;
  justify-content: space-evenly;
  padding: 5px;
`;

const ImageContainer = styled.div`
display: flex;
align-items: center;
height: 30px;`

const Image = styled.img`
  object-fit: cover;
  filter: invert(58%) sepia(5%) saturate(3064%) hue-rotate(145deg)
    brightness(95%) contrast(95%);
  height: 60%;
`;