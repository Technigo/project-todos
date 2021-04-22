import styled from "styled-components";

export const AddText = styled.p`
  font-size: 48px;
  color: ${props => props.theme.buttonText};
  text-align: center;
`;

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  background-color: ${props => props.theme.backgroundColor};
`;

export const Form = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding: 20px 20px 110px 20px;
  background-color: ${props => props.theme.backgroundColor};
  @media (min-width: 768px) {
    width: 700px;
  }
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 8px;
  margin: 10px 0;
  outline: none;
  background-color: #f2f2f2;
  border: none;
  width: 95%;
  font-family: ${props => props.theme.fontFamily};
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  position: fixed;
  bottom: 0;
  height: 75px;
  width: 95%;
  border-top: 2px solid ${props => props.theme.secondary};
  @media (min-width: 768px) {
    height: 120px;
  }
  @media (min-width: 1025px) {
    max-width: 900px;
  }
`;

export const Options = styled.label`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const LabelText = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 14px;
  font-family: ${props => props.theme.fontFamily};
  @media (min-width: 768px) {
    font-size: 17px;
  }
`;

export const CategoryDate = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  margin: 0;
`;