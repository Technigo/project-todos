import React from 'react';
import styled from 'styled-components/macro';
import Footer from './Footer';
import Main from './Main';

const OuterWrapper = () => {
  return (
    <OuterWrapperStyle className="backdrop">
      <Main />
      <Footer />
    </OuterWrapperStyle>
  );
};

export default OuterWrapper;

const OuterWrapperStyle = styled.div`
  // TODO: import styling with animations from CSS here
`;
