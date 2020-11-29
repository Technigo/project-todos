import styled from "styled-components";

export const Title = styled.h1`
  color: ${(props) => props.color || "black"};
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  font-size: 18px;
  padding: 0px 10px;
  margin: ${(props) => props.margin || "16px 0px"};
`;

export const Subtitle = styled.h2`
  color: ${(props) => props.color || "black"};
  font-size: 10px;
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  padding: 0px 10px;
  margin: ${(props) => props.margin || "11px 0px"};
`;
