import React from 'react'
import AddTask from "./AddTask"
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

const InputContainer = () => {
  return (
    <Wrapper>
        <AddTask />
    </Wrapper>
  )
}

export default InputContainer