import styled from 'styled-components';

export const AddToDoForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 0;
  border-bottom: 1px solid #CED0D6;
`;

export const AddToDoInputField = styled.input`
  height: 25px;
  border: 2px solid #5395b0;
  border-radius: 5px;
  padding-left: 5px;
  margin-left: 10px;
  font-size: 16px;
`;

export const LabelText = styled.label`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 15px;
`;

export const Select = styled.select`
  height: 30px;
  border: 2px solid #5395b0;
  border-radius: 5px;
  font-size: 16px;
  margin-left: 10px;
  padding-left: 5px;
`;

export const AddButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #fe97a7;
  color: white;
  font-size: 30px;
  margin-top: 8px;

  &:hover {
    background-color: #808080;
  }
`;
