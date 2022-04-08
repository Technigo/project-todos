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
  gap: ${(props) => props.gap};
`;

// Button Styling
export const ColorButton = styled.button`
  width: auto;
  background-color: ${(props) => props.backgroundcolor};
  color: white;
  border: none;
  font-weight: 600;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 16px;
  opacity: 70%;

  &:hover {
    opacity: 100%;
  }

  &:focus {
    opacity: 100%;
  }
`;

export const Icon = styled.img`
  height: 30px;
  width: 30px;
`;

export const IconButton = styled.button`
  border-radius: 50%;
  height: 55px;
  width: 55px;
  justify-self: center;
  border: none;
  cursor: pointer;

  &:hover {
    border: 1px solid #212529;
  }

  &:focus {
    border: 1px solid #212529;
  }
`;

export const ActionButton = styled.button``;

// Text Input
export const TextInput = styled.input`
  width: ${(props) => props.width};
  padding: 5px;
  font-size: 16px;
  border: 2px solid #212529;

  &:active {
    // border: 2px solid #212529;
  }
  &:focus {
    // border: 2px solid #212529;
  }
`;
