import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  background: ${(props) => props.background || "#FFB6C1"};
  color: ${(props) => props.color || "#000000"};
  font-size: 15px;
  font-weight: normal;
  border: 1px solid #888;
  border-radius: 5px;
  height: 40px;
  width: auto;
  text-align: center;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  &:hover {
    background: #90ee90;
    cursor: pointer;
  }
`;
