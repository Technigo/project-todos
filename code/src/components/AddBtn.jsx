import React from 'react'
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa";

const Btn = styled.button`
  background-color: red;
  border: 1px solid red;
  border-radius: 30px;
  margin-left: 8%;
  padding: 10px 20px;
  position: absolute;
  bottom: 5%;
  left: 5%;
  text-align: center;
  font-size: 15px;
  color: white;
`;

const Plus = styled(FaPlus)`
  color: white;
  margin-right: 5px;
  font-size: 15px;
`;

export const AddBtn = ({ setAddView }) => {

  return (
    <Btn
      type="button"  
      onClick={() => setAddView(true)}
    >
      <Plus />
        ADD
    </Btn>
  )
}