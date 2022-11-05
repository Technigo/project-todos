import styled from 'styled-components/macro'

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
`

export const InputField = styled.input`
  background-color: #367857;
  border-radius: 20px;
  border: none;
  color: white;
  width: 100%;
  cursor: pointer;
  padding: 10px 20px;

  &::placeholder {
  color: #81BB9E;
}

  &:focus-visible {
    outline: none;
}
@media (min-width: 668px){
  height: 70px;
  padding: 10px 40px;
  border-radius: 70px;
  
  }
  @media (min-width: 1025px){
    
  }

`
export const InputBox = styled.div`
  background-color: #367857;
  border-radius: 20px;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 668px){
  border-radius: 70px;
  
  }
  @media (min-width: 1025px){
    
  }
`

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color:  #367857;
  border-radius: 20px;

  @media (min-width: 668px){
    border-radius: 70px;

  }
  @media (min-width: 1025px){
    
  }
`
