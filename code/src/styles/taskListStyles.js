import React from 'react';
import styled from 'styled-components';

export const ListItem = styled.li`
  width: 100%;
  height: 14vh;
  border-bottom: 2px solid #F0F0F0;
  padding: 15px;
  display: flex;
  justify-content: space-between;
`

export const ListContainer = styled.ul`
  padding: 0;
  margin: 0;
`

// Components for add list form

export const AddForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-left: 5px;
`

export const NewTaskInput = styled.input`
  width: 100%;
  margin: 0 15px;
  border: none;
  font-size: 2.5vh;
`

export const AddButton = styled.input`
  background-color: #28065b;
  color: white;
  font-family: 'Open Sans', Arial, Helvetica, sans-serif;
  border: none;
  border-radius: 1vh;
  padding: 1vh 2vh;
`

// Components for list items

export const DoneButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
  margin-left: 5px;
`

export const EmptyCheckbox = styled.div`
  width: 20px;
  height: 20px;
  border: 1px solid #28065b;
  border-radius: 50%;
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-right: 20px;
  font-size: 2.5vh;
`

export const Timestamp = styled.p`
  font-size: 1.8vh;
  color: #A9A9A9;
`

export const DeleteButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`