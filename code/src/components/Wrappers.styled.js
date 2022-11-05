import styled from 'styled-components';

export const Styled = {
  OuterWrapper: styled.div`
    width: 100%;
    min-height: 100vh; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background: ##eeeeee;
    `,
  InnerWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 75%;
    min-height: 75vh;
    margin: 5% 0%;
    border-radius: 1em;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    background-color: #DBE2EF;

    @media only screen and (max-width: 1000px) {
      width: 100%;
      min-height: 100vh;
      margin: 0%;
      }


    `
}