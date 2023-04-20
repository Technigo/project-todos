import React from 'react';
import { useSelector } from 'react-redux';
// import styled from 'styled-components';

export const AllDone = () => {
  const items = useSelector((store) => store.tasks.items)

  const allDone = () => {
    if (items.length === 0) {
      return (<h2>Nothing here yet</h2>)
    }
  }
  return (
    <span>
      {allDone()}
    </span>
  )
}