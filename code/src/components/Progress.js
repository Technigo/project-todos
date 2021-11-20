import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

export const Progress = () => {
  const items = useSelector((store) => store.todos.items)
  const itemsChecked = useSelector(
    (store) => store.todos.items.filter((item) => item.isComplete).length
  )

  return (
    <StyledSmallHeadline>
      Total to-dos done: {itemsChecked}/{items.length}
      <ProgressbarWrapperStyled>
        <div
          className="progress"
          style={{
            width: `${itemsChecked * (100 / items.length)}%`
          }}></div>
      </ProgressbarWrapperStyled>
    </StyledSmallHeadline>
  )
}

const StyledSmallHeadline = styled.h3`
  height: 25px;
  color: #9aaedb;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Inter', sans-serif;
  font-weight: 600;
  margin: 0;
  margin-bottom: 10px;
  line-height: 3;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const ProgressbarWrapperStyled = styled.div`
  height: 8px;
  width: 30%;
  overflow: hidden;
  border: 1px solid #9aaedb;
  border-radius: 10px;
  display: flex;

  .progress {
    background-color: #9aaedb;
    height: 100%;
    transition: 0.3s ease-out;
  }
`
