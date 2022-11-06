/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import minus from 'assets/minus.png';
import styled from 'styled-components'

const RemoveTask = ({ onDeleteTaskItem, index }) => {
  return (

    <RemoveButtonStyle>
      <button type="button" onClick={() => onDeleteTaskItem(index)}>
        <img src={minus} alt="remove item" />
      </button>
    </RemoveButtonStyle>
  )
}

export default RemoveTask;

const RemoveButtonStyle = styled.button`
border: none;
background: transparent;
justify-content: center;
img{
  width: 2vw;
  border: none;
}

button{
  border: none;
  background: transparent;
}


`