import styled from 'styled-components'

// Background for entire app
export const Background= styled.div`
  width: 100vw;
/*   background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); */
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 63%, rgba(181,211,251,1) 100%);
  opacity: 0.8;
`;

// Todo - categories
export const Container = styled.section`
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

export const TodoList = styled.ul`
  width: 50%;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  margin: 5px 0 5px 0;
  align-items: center;
  padding: 10px 0 10px 0;
  list-style-type: none;
  background-color: #4d8aff;
  opacity: 0.2;
  border-radius: 0.25em
`;

export const CheckboxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 3px;
`;


