import React from 'react'
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa";

const Btn = styled.button`
  background-color: #5899E2;
  border: 1px solid #5899E2;
  border-radius: 30px;
  padding: 10px 20px;
  text-align: center;
  font-size: 15px;
  font-weight: bold;
  color: white;
  margin: 30px 0 20px 20px;
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