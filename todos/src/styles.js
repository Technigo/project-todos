import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  -webkit-appearance: none;
  -webkit-border-radius: none;
  background-color: #995cfa;
  color: white;

  @media (min-width: 768px) {
    background-color: #efefef;
    color: black;

    &:hover {
      background-color: #995cfa;
      color: white;
    };
  }
`;

const Wrappers = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

export const Heading = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #2d2d2d;
  color: white;
  padding: 20px;

  @media (min-width: 768px) {
    flex-direction: row;
  };
`;

export const Total = styled.p`
  margin: 10px;
`;

export const ClearWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ClearButton = styled(Button)`
  margin-top: 10px;
  border: none;
  padding: 4px 10px;
  border-radius: 15px;
`;

export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  padding: 25px 10px;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
  };
`;

export const AddTodo = styled.input`
  padding: 10px;
  margin-bottom: 15px;

  @media (min-width: 768px) {
    width: 70%;
    margin-bottom: 0;
  };
`;

export const Plus = styled.span`
  background-color: white;
  border-radius: 50%;
  padding: 3px 7px;
  color: ${(prop) => (prop.disabled ? "grey" : "black")};
`;

export const AddButton = styled.button`
  padding: 10px;
  cursor: pointer;
  -webkit-appearance: none;
  -webkit-border-radius: none;

  background-color: ${(prop) => (prop.disabled ? "none" : "#995cfa")};
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

export const CreatedAt = styled.p`
  display: none;

  @media (min-width: 768px) {
    display: flex;
  };
`;

export const FlexDiv = styled(Wrappers)`
  flex: 1;
  justify-content: center;
  display: ${(prop) => (prop.time ? "none" : null)};
 
  @media (min-width: 768px) {
    display: ${(prop) => (prop.time ? "flex" : null)};
  }
`;

export const CheckBoxWrapper = styled.div`
  margin-right: auto;
`;

export const CheckBox = styled.input`
  cursor: pointer;
`;

export const TodoText = styled.label`
  margin-left: 12px;
  cursor: pointer;
  text-decoration: ${(prop) => (prop.complete ? "line-through" : "none")};
`;

export const DeleteButton = styled(Button)`
  border-radius: 10px;
  margin-left: auto; 
`;