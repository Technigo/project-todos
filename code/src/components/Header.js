import React from 'react'
import styled from 'styled-components'
import dayjs from 'dayjs'

const TextContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Date = styled.div`
  font-size: 22px;
  color: #266150;
  margin-top: 25px;
`;

const Header = () => {
  return (
    <TextContainer>
      <h1>
        To Do's
      </h1>
      <Date>{dayjs().format('dddd D MMM YYYY')}</Date>
    </TextContainer>
  )

}

export default Header