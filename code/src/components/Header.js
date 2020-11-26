import React from 'react';

import { Title, Emoji } from '../styledComponents/styled_components';

export const Header = () => {
  return (
    <Title className='title'>
      My ToDo List
      <Emoji>
        <span role='img' aria-label='pen'> ✏️</span>
      </Emoji>
    </Title>
  );
};

