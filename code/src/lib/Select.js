import styled from 'styled-components';

export const Select = styled.select`
  width: 100%;
  border: 1px solid #3d5f6b;
  border-radius: 10px;
  padding: 10px;
  background-color: transparent;
  color: #fff;
  font-size: 16px;
  font-family: 'Architects Daughter', cursive;
  -webkit-appearance: none;
  
    option {
      color: #3d5f6b;
      background: white;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 1px;
      font-family: 'Architects Daughter', cursive;
    }
`
export const FilterSelect = styled(Select)`
  color: #000;
  &:first-child {
    margin-right: 10px;
  }
`