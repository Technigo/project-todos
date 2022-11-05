import styled from 'styled-components'

export const OuterWrapper = styled.main`
  width: 100%;
  height: 100%;
  background-color: pink;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid blue 1px;
`
export const InnerWrapper = styled.div`
  width: 60%;
  height: 100%;
  background-color: lightgrey;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: solid red 1px;
`
export const Section = styled.section`
  width: 100%;
  background-color: whitesmoke;
  display: flex;
  flex-direction: column;
  border: solid blue 1px;
`
