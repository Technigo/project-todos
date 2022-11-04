import styled from 'styled-components'

export const Styled = {
  Container: styled.div`
    display: flex;
    justify-content: center;
  `,
  InputField: styled.input`
  border-radius: 1em;
  font-size: 1em;
  width: 30vw;
  height: 4em;
  background-color: ##eeeeee; 
  padding-left: 2em;

  @media only screen and (max-width: 1000px) {
    font-size: 0.8em;
    padding-left: 1em;
  }

  `,
  FormButton: styled.button`
    margin-left: 20px;
    font-size: 1em;
    width: 6em;
    height: 4em;
    background-color: whitesmoke;
    border-radius: 1em;

    @media only screen and (max-width: 1000px) {
      font-size: 0.8em;
    }
    `
}