import React from 'react';
import styled from 'styled-components';

// Styling
import { OuterFlexWrapper } from '../styling/GlobalStyling';

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

// Local styles -----------------------------
const HeaderWrapper = styled(OuterFlexWrapper)`
  justify-content: center;
`;

const Logo = styled.img`
  width: 50px;
  align-self: center;
  margin-top: 10px;
  z-index: 2; // To show above background layer when creating new task
`;
