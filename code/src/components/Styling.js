import styled from 'styled-components'

export const Outerwrapper = styled.section`
  //background-color: #FCF8E8;
  background: rgb(238,174,202);
  background: radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%);
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const InnerWrapper = styled.section`
  width: 50%;
  background-color: #74B6F2;
  border-radius: 15px;
  //box-shadow: 5px 5px 5px #73DB83;

  @media (min-width: 668px) and (max-width: 1024px) {
    width: 40%;
  }
  @media (min-width: 1025px) {
    width: 30%;
  }
  `