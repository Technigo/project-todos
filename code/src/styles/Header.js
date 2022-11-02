import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 90px;
    margin-left: 15%;
    font-family: 'Fjalla One', sans-serif;
    text-align: left;
        @media (min-width: 800px) {
        width: 70%;
        }
`

export const HeaderText = styled.h1`
    margin-top: 40px;
    font-family: 'Fjalla One', sans-serif;
`

export const HeaderDate = styled.p`
    font-family: 'Nunito Sans', sans-serif;
    line-height: 5px;
    margin: 0;
    font-size: 16px;
`

export const Line = styled.div`
  width: 90%;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid lightgrey
`
