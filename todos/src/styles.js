import styled from "styled-components";

export const Heading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #2d2d2d;
  color: white;
  padding: 20px;
`;

export const ClearWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClearButton = styled.button`
  margin-top: 10px;
`;

export const Form = styled.form`
  padding: 10px;
  display: flex;
  padding: 25px 10px;
  justify-content: center;
`;

export const Input = styled.input`
  width: 70%;
  padding: 10px;
`;

export const Plus = styled.span`
  background-color: white;
  border-radius: 50%;
  padding: 3px 7px;
`;

export const AddButton = styled.button`
  background-color: #8741f6;
  border: none;
  padding: 10px;

`;

export const Article = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #9A9A9A;
  padding: 15px 10px;

  &:first-child {
    border-top: 1px solid #9A9A9A;
  }

  &:nth-child(odd) {
    background-color: #f0f0f0;
  }
`;

export const TodoText = styled.label`
  margin-left: 12px;
  text-decoration: ${(prop) => prop.complete
    ? "line-through"
    : "none"
  };
`;