import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: fixed;
  width:100%;
  bottom: 0;
  background-color: rgb(242,240,240, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px;

  @media (max-width: 768px) {
    display:none;
  }
`
export const FooterText = styled.p`
  width: 100%;
  text-align: center;
  font-size: 17px;
  color: #ffffff ;
  margin: 6px;
`
export const Links = styled.a`
  a:link {
  color: rgb(247, 247, 247);
  }
  a:visited {
  color: rgb(160, 160, 162);
  }
`
export const FooterImage = styled.img`
  width: 50px;
`
  
