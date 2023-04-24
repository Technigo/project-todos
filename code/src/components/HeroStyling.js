import styled from 'styled-components';

const Hero = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url(${(props) => props.backgroundImage});
  background-size: cover;
  background-position: center;
`;

export default Hero;
