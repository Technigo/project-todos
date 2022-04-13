import styled from "styled-components";

export const Heading = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Article = styled.article`
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
  justify-content: flex-end;
  border-bottom-style: outset;
`;

export const TodoText = styled.h2`
  margin-left: 12px;
  text-decoration: ${(prop) => prop.complete
    ? "line-through"
    : "none"
  };

`;