import React from 'react';
import styled from 'styled-components';

export const ListItem = styled.li`
  width: 100%;
  border-top: 2px solid #F0F0F0;
  padding: 15px;
  display: flex;
  justify-content: flex-start;
`

export const ListContainer = styled.ul`
  padding: 0;
`

export const DoneButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  margin-left: 5px;
`

export const EmptyCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #28065b;
  border-radius: 50%;
`