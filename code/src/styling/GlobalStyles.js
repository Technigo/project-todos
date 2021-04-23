import styled from 'styled-components'

// Background
export const Background= styled.div`
  width: 100vw;
/*   background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); */
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 47%, rgba(181,211,251,1) 100%);
  opacity: 0.8;
`;

// Todo - categories
export const Container = styled.section`
  box-sizing: border-box;
  width: 100vw; 
  display: flex; 
  justify-content: center;
  align-items: center; 
  flex-direction: column;
`;

export const Header = styled.h1`
  font-size: 16px; 
  text-transform: uppercase;
  color: #216dff;
`;

/* try remove space between see what happens */
export const TodoList = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px 0 5px 0;
  align-items: center;
  padding: 10px 0 10px 0;
  list-style-type: none;
  border: 1px solid black;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

// Change these styles !! THESE ARE NOW REDUNDNAT IF I DONT NEED TO STYLE IT AGAIN ****
export const DeleteButton = styled.button`
  margin: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  background-color: transparent;
  border: none; 
`;

export const TrashIcon = styled.svg`
  margin: 0;
  padding: 0;
`;


