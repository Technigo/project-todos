import styled from 'styled-components';

export const Styled = {
  OuterWrapper: styled.div`
    width: 100%;
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    border: 1px solid red;
    `,
  InnerWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    margin: 10% 0% 0% 0%;
    border: 1px solid blue;
    `
}