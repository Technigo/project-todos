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

  @media (min-width: 667px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
`;
// HEADER

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  background: pink;
  padding: 20px;

  @media (min-width: 667px) {
    width: 50%;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
`;
// TASK FORM

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const FormWrapper = styled.form`
  width: 100%;
  background: pink;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 667px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
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

  @media (min-width: 667px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
`;
// TASKLIST - PLACEHOLDER IMAGE

export const PlaceholderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;

// TASK

export const TaskContainer = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const TaskWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  border-bottom: 1px solid lightblue;

  @media (min-width: 667px) {
    width: 50%;
    justify-content: center;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
`;

export const Checkbox = styled.input`
  margin: 20px;
`;

export const TaskText = styled.label`
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
  width: 100%;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
`;

export const FooterWrapper = styled.div`
  width: 100%;
  background: pink;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 667px) {
    width: 50%;
  }

  @media (min-width: 1024px) {
    width: 350px;
  }
`;

export const FooterText = styled.p`
  font-size: 10px;
  color: black;
  margin: 5px 0;
  font-family: 'Merriweather Sans', Sans-Serif;
`;