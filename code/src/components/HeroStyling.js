import styled from 'styled-components';
import BackgroundImage from '../assets/HeroBackground.jpg';

const Hero = styled.div`
  position: relative;
  min-height: 100vh;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

export default Hero