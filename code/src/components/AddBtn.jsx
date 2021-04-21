import React from 'react'
import styled from 'styled-components';
import { FaPlus } from "react-icons/fa";

const Btn = styled.button`
  background-color: white;
  border: none;
  margin-left: 8%;
  position: absolute;
  bottom: 5%;
  left: 5%;
`;

const Plus = styled(FaPlus)`
  color: red;
  margin-right: 5px;
  font-size: 20px;
`;

export const AddBtn = ({ setAddView }) => {

  return (
    <Btn
      type="button"  
      onClick={() => setAddView(true)}
    >
      <Plus />
        ADD TODO
    </Btn>
  )
}