import styled from 'styled-components'

export const Section = styled.section`
    border: 2px solid yellow;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const Wrapper = styled.div`
    background-color: pink;
    width: 200px; 
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const InputWrapper = styled.div`
    background-color: pink;
    width: 300px; 
    height: 100px;
    border-radius: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
`

export const TaskInput = styled.h2`
color: white;
font-size: 16px;
`

export const InputForm = styled.input`
  border: none;
  background-color: transparent;
  font-size: 18px;
  width: 200px; 
  height: 80px;
  color: #8fc9a3;
  &:focus {
  background-color: lightblue;
  border-radius: 20px;
  outline: none;
}
`
