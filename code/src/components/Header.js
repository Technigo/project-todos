import React from 'react';

import { Title, Emoji } from '../styledComponents/styled_components';

export const Header = () => {
  return (
    <Title className='title'>My ToDo List<Emoji role='img' ariaLabelBy='pen'> ✏️</Emoji></Title>
    )
};

