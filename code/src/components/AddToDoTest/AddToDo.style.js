import styled from 'styled-components';

export const NewToDo = styled.form`
  line-height: 0.8rem;
  padding-bottom: 0.8rem;
`;

export const Input = styled.input`
  min-height: 3rem;
  //min-width: 40vh;
  background: pink;
  border: none;
  border-radius: 1rem;
  padding: 8px;
  font-size: 18px;
  font-family: 'DynaPuff', cursive;
  border-bottom: 2px dashed;
  :focus {
    outline: none;
  }
`;

export const AddButton = styled.button`
  background: pink;
  border: none;
  font-family: 'DynaPuff', cursive;
  font-size: 18px;
  cursor: pointer;
  margin-top: 1rem;
`;

export const AddContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const Select = styled.select`
background-color: pink;
font-family: 'DynaPuff', cursive;
margin-top: 1rem;
margin-left: 1rem;
padding: 0.5rem;
border-radius: 4rem;
//onfocus="this.size=3;" onblur="this.size=0;" onchange="this.size=1; this.blur()">
`;

export const Option = styled.option`
font-style: bold;
color: black;
`;