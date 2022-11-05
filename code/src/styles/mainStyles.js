import styled from 'styled-components/macro';

// Colors: #CED4B2 #EAECCC #FDFAE3 #F8EDD0 #CDA47A ; #909A5D

// The main styles of this project

const sizes = {
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px'
};

export const Devices = {
  tablet: `(min-width: ${sizes.tablet})`,
  laptop: `(min-width: ${sizes.laptop})`,
  desktop: `(min-width: ${sizes.desktop})`
};

export const OuterWrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: auto;
`

export const InnerWrapper = styled.div`
  width: 90%;
  max-width: 900px;
  min-height: 100px;
  margin: 0 auto;
  padding: 0% 0%;

  @media ${Devices.tablet} {
    width: 80%;
    min-height: 200px;
  }

  @media ${Devices.laptop} {
    width: 65%;
  }
`

export const MainSections = styled.section`
  background-color: ${(props) => (props.coloredBackground ? '#909A5D' : '#F8EDD0')};
  width: 100vw;
  padding: 5% 0%;
`

export const MainHeader = styled.h1`
  color: white;
  font-weight: bold;
  font-size: 4em;
  font-family: 'Kolker Brush', cursive;
  text-align: center;
  border-radius: 10px;
  align-self: center;

  @media ${Devices.tablet} {
  font-size: 6em;
  padding-bottom: 1%;
  }
`

export const MainText = styled.p`
  display: block;
  color: white;
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  padding: 1% 1%;
  align-self: center;
`

export const MainFooter = styled.a`
  display: block;
  color: white;
  font-weight: bold;
  font-size: 1em;
  font-family: 'Montserrat', sans-serif;
  text-align: center;
  padding: 1% 1%;
  align-self: center;
  cursor: pointer;
  text-decoration: none;

  @media ${Devices.tablet} {
  font-size: 1em;

    &:hover {
      text-decoration: underline;
      color: lightgray;
      transition: all .3s ease-in-out;
      transform: scale(1.1);
    }
  }
`

