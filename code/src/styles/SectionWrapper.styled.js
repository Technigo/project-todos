import styled from 'styled-components';

export const GlobalWrap = styled.div`
  max-width: 314px;
  margin: 0 auto;
  min-height: 590px;
  background: #939393;
  @media (min-width: 600px) {
    height: 100vh;
    margin-top: 5%;
    border-radius: 5px;
    margin-bottom: 50px;
  }
  @media (min-width: 768px) {
    max-width: 600px;
    margin-top: 3%;
    margin-bottom: 50px;
  }
  @media (min-width: 1200px) {
    max-width: 800px;
    margin-top: 2%;
    margin-bottom: 50px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    -webkit-box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    -moz-box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  background: #939393;
  width: 100%;
  margin-bottom: 5%;
`;
