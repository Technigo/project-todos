import React from 'react';
import styled from 'styled-components';

// Styling
import { OuterFlexWrapper } from '../styling/GlobalStyling';

const HeaderWrapper = styled(OuterFlexWrapper)`
  justify-content: center;
`;

const Logo = styled.img`
  width: 50px;
  align-self: center;
  margin-top: 10px;
  z-index: 2;
`;

// ----------------------------------------------------------------

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo
        src={process.env.PUBLIC_URL + '/images/noun_tasklist_1212192.png'}
      />
    </HeaderWrapper>
  );
};
