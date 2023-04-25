import styled from 'styled-components';

export const Form = styled.form`
  margin: 0 auto;
  padding: 20px 20px 0px 20px;
  /* --hides and shows input-- */
  &.input-hidden {
    display: none;
  }
  &.input-active {
    display: initial;
  }

  @media (min-width: 600px) {
    margin: 0 auto;
  padding: 60px 20px 0px 20px;
  }
  @media (min-width: 768px) {
    margin: 0 auto;
  padding: 80px 20px 0px 20px;
  }
`;

export const Input = styled.input`
  width: 268px;
  height: 30px;
  margin: 20px 2px 2px 2px;
  border: none;
  font-size: 1.4rem;
  font-weight: 600;
  background-color: transparent;
  border-bottom: 3px solid white;
  color: white;
  opacity: 0.7;
  ::placeholder {
    color: white;
  }
  &:focus {
    outline: none;
    color: white;
    opacity: 1;
  }
  @media (min-width: 400px) {
    font-size: 1.4rem;
    border-bottom: 4px solid white;
 
 }

 @media (min-width: 600px) {
    font-size: 1.8rem;
    border-bottom: 4px solid white;
   
  }
  @media (min-width: 768px) {
    font-size: 1.8rem;
    border-bottom: 4px solid white;
    margin: 20px 2px 22px 2px;
   
  }

`;

export const TagWrap = styled.div`
  display: flex;
  padding: 10px;
`;

export const PrioTag = styled.label`
  margin: 0 auto;
  width: 30px;
  padding: 10px;

`;

const RadioButton = styled.input`
  appearance: none;
  margin: 0;
  width: 3em;
  height: 3em;
  border-radius: 1.5em;
  display: grid;
  place-content: center;
  border: 0.38em solid transparent;
  &:hover {
    border-width: 0.38em;
    transform: scale(1.02);
  }
  &:checked::before {
    transform: scale(1);
  }
  @media (min-width: 600px) {
    margin: 20px 2px 22px 2px;
   
  }
  @media (min-width: 768px) {
    margin: 20px 2px 22px 2px;
   
  }
`;

export const Low = styled(RadioButton)`
  border: 0.38em solid lightyellow;
  &::before {
    content: '';
    width: 1.4em;
    height: 1.4em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1.5em 1.5em lightyellow;
  }
  &:checked::before {
    transform: scale(1);
    background-color: yellow;
  }
`;

export const Medium = styled(RadioButton)`
  border: 0.38em solid lightskyblue;
  &::before {
    content: '';
    width: 1.4em;
    height: 1.4em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1.5em 1.5em lightskyblue;
  }
  &:checked::before {
    transform: scale(1);
    background-color: coral;
  }
`;

export const High = styled(RadioButton)`
  border: 0.38em solid pink;
  &::before {
    content: '';
    width: 1.4em;
    height: 1.4em;
    border-radius: 50%;
    transform: scale(0);
    transition: 120ms transform ease-in-out;
    box-shadow: inset 1.5em 1.5em pink;
  }
  &:checked::before {
    transform: scale(1);
    background-color: red;
  }
`;
