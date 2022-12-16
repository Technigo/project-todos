import styled from 'styled-components/macro'

export const AddButton = styled.button`
  border: none;
  background-color: #408498;  
  border-radius: 20px;
  cursor: pointer;
  font-size: 0.8rem;
  color: #D1DED9;
  margin: 0px 10px;
  height: 30px;
  padding: 12px;
  line-height: 0px;
  transition: all 0.3s ease-in-out;

  &:hover {
      color: #fff;
    }

  @media (min-width: ${({ theme }) => theme.tablet}){
    margin: 20px 20px;
    padding: 20px 20px;

  }
  @media (min-width: ${({ theme }) => theme.desktop}){
    
  }
`
export const RemoveButton = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
  position: relative;
  bottom: -2px;

  @media (min-width: ${({ theme }) => theme.tablet}){
    bottom: 7px;

  }
`

export const ClearAllBtn = styled.button`
  border: none;
  background-color: #ffffff8c;
  border-radius: 20px;
  cursor: pointer;
  color: #1d5d90;
  font-size: 0.8rem;
  height: 100%;
  padding: 6px 12px;
  margin-left: 5px;

  @media (min-width: ${({ theme }) => theme.tablet}){
    padding: 0px 25px;

  }
  @media (min-width: ${({ theme }) => theme.desktop}){
    
  }
`