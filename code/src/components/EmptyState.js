import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import img from './images/item-illu.jpg'
import { H2 } from './styles/global';

const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const TaskImg = styled.img`
  width: 80vw;

  @media (min-width: 668px) {
    width: 40vw;
  }

`

export const EmptyState = () => {
  const items = useSelector((store) => store.tasks.items)

  const emptyState = () => {
    if (items.length === 0) {
      return (
        <EmptyStateWrapper>
          <TaskImg src={img} alt="illustration" />
          <H2>Nothing here yet</H2>
        </EmptyStateWrapper>)
    }
  }
  return (
    <span>
      {emptyState()}
    </span>
  )
}