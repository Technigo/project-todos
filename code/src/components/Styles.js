import styled from 'styled-components';

export const MainContainer = styled.main`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 6px solid black;
  width: 80%;
  padding: 20px;
  box-sizing: border-box;
  background-color: #fef5ed;
  /* background-image: linear-gradient(#fef5ed, #d8d2cc); */
  box-shadow: 0 0 18px #727272;
  border-radius: 10px;
`;

export const SectionContainer = styled.section`
  border: 2px solid black;
  border-radius: 10px;
  background-color: #adc2a9;
  padding: 20px;
  margin: 10px auto;
  box-shadow: 1px 1px 2px gray;

  width: 70%;
`;
