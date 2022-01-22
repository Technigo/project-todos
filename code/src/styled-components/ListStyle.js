import styled from 'styled-components';

export const ListSection = styled.section`
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background-color: rgb(170, 170, 170);

  h2 {
    text-align: center;

  }
`; 

export const TodoListDiv = styled.div`
  background-color: white;
  border-radius: 5px;
  margin-bottom: 10px;
  word-wrap: break-word;
  display:flex;
  justify-content: space-between;
  border: 1px solid rgb(170, 170, 170);

  span {
    margin: 10px;
  }
`;

export const ListDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;
  word-wrap: break-word;
  justify-content: space-between;
  text-decoration: 	${props => props ? "line-through" : ""};;
  opacity: 0.7;
  
`;
/* combine those two in one*/
export const Button = styled.button`
  background-color: ${props => props.red ? "red" : "green"};
  border: none; 
  height: 40px;
  width: 50px;
  border-radius: 5px;
  margin: 5px;
  color: white;
  font-size: 20px;
`;

export const ButtonDelete = styled.button`
  background-color: red;
  border: none; 
  color: white;
  height: 50px;
  width: 60px;
  font-size: 20px;

`;

export const CategorySpan = styled.span`
  padding: 5px;
  border-radius: 5px;
  color: black;
  font-weight: bold;
  font-size: 14px;
  background-color: ${props => 
    props.category === 'Studies' ? '#89B5AF' : 
    props.category === 'Work' ? '#DED9C4' : 
    props.category === 'Family & Friends' ? '#9e9dd9' : 
    props.category === 'Health' ? '#AE431E': 
    props.category === "" ? 'none': 
    '#facdc5'}
`; 

export const TextSpan = styled.span`
  padding: 5px;
`; 
