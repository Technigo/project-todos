import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
position: absolute;
bottom: 20px;
font-family: 'Noto Sans KR', sans-serif;
font-size: 11px;
&.link:link, visited {
  cursor: pointer;
  color: black;
}
&.link:hover {
  cursor: pointer;
  color: #6c9fa3;
}
&.link:active {
  cursor: pointer;
  color: #ffb037;
}`

const Link = styled.a`
&:link, &:visited {
  cursor: pointer;
  color: black;
}
&:hover {
  cursor: pointer;
  color: #6c9fa3;
}
&:active {
  cursor: pointer;
  color: #ffb037;
}
`



const Footer = () => {
  return (
    <Container>Icons made by 
      <Link href="https://www.freepik.com" title="Freepik">Freepik</Link>
      from 
      <Link href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</Link>
    </Container>
  )
};
export default Footer;