import styled from 'styled-components'

export const Title = styled.h1`
  margin-top: 0;
  color: #5692ff;
  font-size: 40px;
  align-self: flex-start;
  line-height: 20px;

  @media (min-width: 500px) {
    font-size: 88px;
    margin-top: 15px;
  } 
`

export const Subtitle = styled.h2`
  margin: 0;
  color: #5692ff;
  font-size: 20px;
  text-align: right;

  @media (min-width: 500px) {
    font-size: 40px;
  }
`
export const H3 = styled.h3`
  margin: 0;
  color: #5692ff;
  font-size: 18px;
  text-align: right;
`

export const Priority = styled.text`
  font-size: 10px
`