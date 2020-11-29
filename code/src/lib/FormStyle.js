import styled from "styled-components";
import breakpoints from "./Breakpoints";

export const TodoFormWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  @media only screen and ${breakpoints.device.tablet} {
    display: flex;
    align-items: center;
  }
  @media only screen and ${breakpoints.device.tablet} {
    justify-content: center;
  }
`;

export const TodoForm = styled.form`
width: 100%;
height: 100%;
  background-color: #fafafa;
  @media only screen and ${breakpoints.device.tablet} {
    padding-top: 40px:
  }
  @media only screen and ${breakpoints.device.computer} {
    width: 85%;
  }
`;

export const TodoInputGroupWrapper = styled.div`
  margin: 30px 22px 10px 22px;
  display: flex;
  align-items: center;
  @media only screen and ${breakpoints.device.tablet} {
    margin-top: 40px:
  }
`;

export const TodoHeaderLabel = styled.label`
  margin: 6px;
  padding: 6px;
  font-size: 24px;
  @media only screen and ${breakpoints.device.tablet} {
    font-size: 32px;
    margin: 50px 10px 20px 30px;
  }
  @media only screen and ${breakpoints.device.computer} {
    font-size: 18px;
  }
`;

export const TodoHeaderInput = styled.input`
  width: 70%;
  border: none;
  outline: none;
  margin: 0 0 0 6px;
  padding: 12px;
  font-size: 24px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  background-color: #fafafa;

  &:focus {
    padding: 12px;
    border-left: 2px solid #00838f;
    background-color: none;
  }

  &:hover {
    cursor: pointer;
  }
  @media only screen and ${breakpoints.device.tablet} {
    font-size: 32px;
    margin-top: 38px;
    padding-left: 12px;
  }
  @media only screen and ${breakpoints.device.computer} {
    font-size: 18px;
  }
`;

export const TodoContentLabel = styled.label`
  margin: 6px;
  padding: 6px;
  font-size: 18px;
  @media only screen and ${breakpoints.device.tablet} {
    font-size: 22px;
    margin: 10px 14px 0 30px;
  }
  @media only screen and ${breakpoints.device.computer} {
    font-size: 16px;
  }
`;

export const TodoTextarea = styled.textarea`
  width: 70%;
  background-color: #fafafa;
  border: none;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  outline: none;
  margin: 0 0 0 22px;
  padding: 12px;
  font-size: 18px;
  resize: none;

  &:focus {
    padding: 12px;
    border-left: 2px solid #00838f;
  }
  &:hover {
    cursor: pointer;
  }
  @media only screen and ${breakpoints.device.tablet} {
    font-size: 22px;
    margin-top: 16px;
    padding-left: 12px;
  }
  @media only screen and ${breakpoints.device.computer} {
    font-size: 16px;
  }
`;
export const TodoCheckboxGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin: 60px 30px 30px 0;
  @media only screen and ${breakpoints.device.tablet} {
    flex-direction: row;
    align-items: flex-start;
  }
  @media only screen and ${breakpoints.device.computer} {
    margin-top: 30px;
    justify-content: center;
  }
`;

export const CheckboxWrapper = styled.div`
  margin: 6px;
`;

export const CheckboxLabel = styled.label`
  font-size: 18px;
  padding: 8px 3px;
  @media only screen and ${breakpoints.device.tablet} {
    font-size: 22px;
  }
  @media only screen and ${breakpoints.device.computer} {
    font-size: 16px;
  }
`;

export const CheckboxInput = styled.input`
  margin-right: 8px;
  font-size: 22px;
`;

export const SubCheckboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6px 2px 4px 12px;
`;

export const ButtonWrapper = styled.div`
  position: absolute;
  top: 75%;
  left: 75%;
  @media only screen and ${breakpoints.device.tablet} {
    top: 82%;
    left: 85%;
  }
`;

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
  @media only screen and ${breakpoints.device.tablet} {
    width: 75px;
    height: 75px;
    font-size: 16px;
  }
`;
