import styled from 'styled-components'

export const Outerwrapper = styled.section`
  background-color: #FCF8E8;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InnerWrapper = styled.section`
  width: 50%;
  background-color: #94B49F;
  border-radius: 20px;
  box-shadow: 5px 5px 5px #ECB390;
  @media (min-width: 668px) and (max-width: 1024px) {
    width: 40%;
  }
  @media (min-width: 1025px) {
    width: 30%;
  }
  `