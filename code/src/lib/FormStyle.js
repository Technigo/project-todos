import styled from "styled-components";

export const TodoFormWrapper = styled.section`
    width: 100%;
    height: 100%;
`

export const TodoForm = styled.form`
  width: 100vw;
  background-color: #fafafa;
`;

export const TodoInputGroupWrapper = styled.div`
  margin: 30px 22px 10px 22px;
  display: flex;
  align-items: center;
`;

export const TodoHeaderLabel = styled.label`
  margin: 6px;
  padding: 6px;
  font-size: 24px;
`;

export const TodoHeaderInput = styled.input`
  width: 70%;
  border: none;
  outline: none;
  margin: 0 0 0 6px;
  padding: 6px;
  font-size: 24px;
  border-left: 1px solid rgba(0,0,0,.2);
  background-color: #fafafa;


  &:focus {
    padding: 12px;
    border-left: 2px solid #00838f;
    background-color: none;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const TodoContentLabel = styled.label`
  margin: 6px;
  padding: 6px;
  font-size: 18px;
`;

export const TodoTextarea = styled.textarea`
  width: 70%;
  background-color: #fafafa;
  border: none;
  border-left: 1px solid rgba(0,0,0,.2);
  outline: none;
  margin: 0 0 0 22px;
  padding: 6px;
  font-size: 18px;
  resize: none;
  
  &:focus {
    padding: 12px;
    border-left: 2px solid #00838f;
  }
  &:hover {
    cursor: pointer;
  }
`;
export const TodoCheckboxGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 60px 30px 30px 0;
`;

export const CheckboxWrapper = styled.div`
  margin: 6px;
`;

export const CheckboxLabel = styled.label`
  font-size: 18px;
  padding: 8px 3px;
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
  font-size: 22px;
`;

export const SubCheckboxWrapper = styled.div`
  display: flex;
`

export const ButtonWrapper = styled.div`
position: absolute;
top: 70%;
left: 70%;
`

export const AddTodoButton = styled.button`
  width: 60px;
  height: 60px;
  margin: 30px 10px;
  padding: 10px;
  background-color: #00838f;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.4), 0 0 11px rgba(0, 0, 0, 0.4);
  border-radius: 50%;
  border: none;
  cursor: pointer;
  color: white;
  font-weight: 700;
`;


