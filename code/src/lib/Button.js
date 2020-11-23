import styled from 'styled-components';

export const Button = styled.button `
  width: 200px;
  border: 2px solid #0e645a;
  border-radius: 10px;
  background: transparent;
  padding: 10px;
  font-size: 16px;
  font-family: 'Architects Daughter', cursive;
  display: flex;
  justify-content: center;

   &:hover {
    background-image: linear-gradient(25deg, #003443, #0e645a, #119971, #00d288); 
    color: #fff;
   }
`

export const AccordionButton = styled.button `
  width: 100%;
  background-color: transparent; 
  border: none;
  display: flex;
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