import styled from 'styled-components';

export const Button = styled.button `
  width: 100%;
  border: 2px solid #98685a;
  border-radius: 10px;
  background: transparent;
  padding: 10px;
  font-size: 16px;
  font-family: 'Architects Daughter', cursive;
  display: flex;
  justify-content: center;
   &:hover {
    background-color: #98685a; 
    color: #fff;
   }
`

export const AccordionButton = styled(Button) `
  width: 100%;
  background-color: transparent; 
  border: none;
  border-bottom: 1px solid #98685a;
  display: flex;
  align-items: center;
  font-family: 'Architects Daughter', cursive;
  font-size: 16px;
`
export const RoundButton = styled(AccordionButton) `
  height: 50px;
  width: 50px;
  border-radius: 50%;
  padding: 15px;
  border: 1px solid papayawhip;
  font-family: 'Architects Daughter', cursive;

`