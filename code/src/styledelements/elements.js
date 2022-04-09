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
  background-color: rgba(${(props) => props.backgroundcolor}, 0.7);
  color: white;
  border: none;
  font-weight: 600;
  padding: 10px 10px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: rgba(${(props) => props.backgroundcolor}, 1);
  }

  &:focus {
    background-color: rgba(${(props) => props.backgroundcolor}, 1);
  }
`;

export const Icon = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
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

// Header Scrollbar
export const CarouselChild = styled.div`
  font-size: 18px;
  font-weight: 400;
  padding: 8px 10px;
  background-color: ${(props) => props.color};
  color: white;
  width: max-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  gap: 10px;
`;

export const CarouselIcon = styled.img`
  height: 20px;
  width: 20px;
`;
