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
@media (min-width: ${({ theme }) => theme.tablet}){
  height: 70px;
  padding: 10px 40px;
  border-radius: 70px;
  
  }
  @media (min-width: ${({ theme }) => theme.desktop}){
    
  }

`
export const InputBox = styled.div`
  background-color: #367857;
  border-radius: 20px;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: ${({ theme }) => theme.tablet}){
  border-radius: 70px;
  
  }
  @media (min-width: ${({ theme }) => theme.desktop}){
    
  }
`

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color:  #367857;
  border-radius: 20px;

  @media (min-width: ${({ theme }) => theme.tablet}){
    border-radius: 70px;

  }
  @media (min-width: ${({ theme }) => theme.desktop}){
    
  }
`
export const CalenderPick = styled.div`
position: relative;
width: 30px;
height: 30px;

&:hover svg{
      fill: #fff;
    }


.react-datepicker__input-container {
  position: inherit;
  opacity: 0;
}

input {
  width: 2.4rem;
    left: 120px;
    bottom: -1px;
    opacity: 1;

    &:hover {
      cursor: pointer;
      fill: #fff;
    }
}
svg {
    position: absolute;
    bottom: 4px;
    right: 3px;
    fill: #9fdfbf;
    pointer-events: none;
    transition: all 0.3s ease-in-out;

  @media (min-width: ${({ theme }) => theme.tablet}){
    bottom: -5px;

  }
}
`
