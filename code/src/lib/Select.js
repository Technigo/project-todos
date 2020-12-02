import styled from 'styled-components/macro';

export const Select = styled.select`
  width: 100%;
  border: 1px solid #3d5f6b;
  border-radius: 3px;
  padding: 5px;
  background-color: transparent;
  color: #fff;
  font-size: 20px;
  font-family: 'Architects Daughter', cursive;
  opacity: 0.7;
  
    option {
      color: #3d5f6b;
      background: white;
      display: flex;
      white-space: pre;
      min-height: 20px;
      padding: 0px 2px 2px;
      font-family: 'Architects Daughter', cursive;
      margin: 0;
    }
  
  @media (min-width: 668px) {
    font-size: 26px;
  }
`;

export const FilterSelect = styled(Select)`
  color: #000;
  margin-bottom: 20px;
    &:first-child {
      margin-right: 10px;
    }
`;