import styled from 'styled-components';



// GENERAL

export const ButtonStyle = styled.button`
  font-size: 16px;
  width: 80%;
  background: blue;
  color: white;
  padding: 8px 0;
  margin: 15px 0;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  font-family: 'Roboto', sans-serif;
`;
// HEADER

export const HeaderContainer = styled.header`
  background: pink;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  border-bottom: 2px solid white;
`;

// TASK FORM

export const FormContainer = styled.form`
  background: pink;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const InputField = styled.input`
  width: 80%;
  padding: 8px 12px;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  border-radius: 5px;
  border: none;
  margin: 10px 0 20px 0;
  box-sizing: border-box;
`;
// TASKLIST

// TASK

export const TaskContainer = styled.div`
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid lightblue;
`;

export const Checkbox = styled.input`
  margin: 20px;
`;

export const TaskText = styled.p`
  width: 100%;
  font-family: 'Merriweather Sans', Sans-Serif;
`;
export const RemoveButton = styled.img`
  height: 30px;
  width: 30px;
  margin: 20px;
  cursor: pointer;
  justify-self: flex-end;
`;
// FOOTER

export const FooterContainer = styled.footer`
  background: pink;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterText = styled.p`
  font-size: 10px;
  color: black;
  margin: 5px 0;
  font-family: 'Merriweather Sans', Sans-Serif;
`;