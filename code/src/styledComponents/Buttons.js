import styled from 'styled-components';

export const AddButton = styled.button`
  background-color: ${(props) => (props.delete ? '#e65f4a' : '#d88699')};
  border: none;
  border-radius: 5px;
  color: white;
  padding: 2px 10px 2px 10px;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  color: grey;
  font-size: 1rem;
  cursor: pointer;
`;

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;

  button {
    border: none;
    padding: 10px;
    border-radius: 5px;
    background-color: #f3d195;
    cursor: pointer;
  }
`;

export const CheckAllContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;

  button {
    background-color: #7e949e;
    padding: 10px;
    border-radius: 5px;
    color: #e9e9e9;
    border: none;
  }
`;
