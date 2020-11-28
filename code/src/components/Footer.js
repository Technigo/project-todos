import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { tasks } from 'reducers/tasks'

import styled from 'styled-components'
import swal from 'sweetalert';

export const Footer = () => {
  const dispatch = useDispatch()

  const items = useSelector(store => store.tasks.items)
  const completedItems = items.filter(item => item.complete)

  const handleRemoveAll = () => {
    swal({
      text: "are you sure you want to clear the list?",
      buttons: ["no", "yes"],
      dangerMode: true,
    })
    .then ((willDelete) => {
      if (willDelete) {
        dispatch(tasks.actions.removeAll())
      }
    })
  }

  return (
    <Container>
      <FilterContainer>
        <FilterButton>
          undone
        </FilterButton>
        <FilterButton>
          all
        </FilterButton>
      </FilterContainer>
      <ClearButton
        onClick={handleRemoveAll}
      >
        clear all
      </ClearButton>
      <TotalTasks>
        {completedItems.length}/{items.length} tasks completed
      </TotalTasks>
    </Container>
  )
}

const Container = styled.footer`
  display: flex;
  flex-wrap:wrap;
  justify-content: space-between;
  margin-top: 10px;
  width: 100%;
`
const TotalTasks = styled.p`
  font-size: 12px;
  text-transform: uppercase;
  color: #514d4d;
  margin: 20px 0 0 0;
  width: 100%;

  @media (max-width: 280px) {
    font-size: 10px;
  }
`
const FilterContainer = styled.div` //DISPLAY IS SET TO NONE SINCE I HAVE NOT COMPLETED THE FILTER FUNCTION YET
  display: none; 
  width: 50%;
`
const FilterButton = styled.button`
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  background-color: #ffffff;
  border: none;
  box-shadow: 10px 13px 21px -18px rgba(158,158,158,1);
  padding: 10px;
  margin-right: 10px;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(143, 99, 148, 0.2);
  }

  &:focus {
    outline: 2px solid #9576A5;
  }

  @media (max-width: 280px) {
    font-size: 10px;
  }
`
const ClearButton = styled.button`
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  background-color: #ffffff;
  border: none;
  box-shadow: 10px 13px 21px -18px rgba(158,158,158,1);
  padding: 10px;
  transition: 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: rgba(143, 99, 148, 0.2);
  }

  &:focus {
    outline: 2px solid #9576A5;
  }

  @media (max-width: 280px) {
    font-size: 10px;
  }
`