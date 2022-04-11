import styled from "styled-components/macro";

// Page Styling
export const Container = styled.div`
  width: 325px;
  margin: 0 auto;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.gridcolumns};
  grid-template-rows: ${(props) => props.gridrows};
  gap: 10px;
`;

// Button Styling
export const ActionButton = styled.button``;

// Text Input
export const TextInput = styled.input`
  width: ${(props) => props.width};
  padding: 5px;
  font-size: 16px;
  border: 2px solid #212529;
`;
