import React from 'react'
import styled from 'styled-components'

export const ClearAll = () => {
  return (
    <ClearAllButton>Clear all</ClearAllButton>
  )
}

const ClearAllButton = styled.button`
  width: 90%;
  height: 35px;
  margin: 5px auto;
  padding: 8px;
  border: none;
  border-radius: 10px; 
  background: #888d64;
  color: #fff;
  font-family: 'Playfair Display';
  font-size: 1em;
`