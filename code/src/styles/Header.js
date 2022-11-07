import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 115px;
    display: flex;
    position: relative;
    font-family: 'Fjalla One', sans-serif;
    margin-top: 20px;
    @media (min-width: 750px) {
        height: 115px;
    }
`

export const HeaderText = styled.h1`
    margin-top: 40px;
    width: 150px;
    font-size: 35px;
    text-align: left;
    font-family: 'Fjalla One', sans-serif;
    @media (min-width: 750px) {
    font-size: 40px;
    }
`

export const HeaderDate = styled.span`
    font-family: 'Nunito Sans', sans-serif;
    line-height: 5px;
    position: absolute;
    top: 110px;
    left: 0;
    margin: 0;
    font-size: 16px;
    text-align: left;
    @media (max-width: 350px) {
    font-size: 14px;
    }
`
export const Counting = styled(HeaderDate)`
    text-align: right;
    right: 0;
    font-size: 16px;
    @media (max-width: 350px) {
    font-size: 14px;
    }
    &.complete-todo{
    font-weight: bold;
    font-size: 16px;
    }   
`

export const Line = styled.div`
  width: 100%;
  top: 130px;
  display: flex;
  position: absolute;
  border-bottom: 2px solid lightgrey
`
