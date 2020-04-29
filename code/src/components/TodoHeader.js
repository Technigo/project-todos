import React from 'react';
import { ClearButton } from './ClearButton';
import { TodoSummary } from './TodoSummary';
import moment from 'moment';
import { HeaderContainer, HeaderContent } from '../lib/Containers';
import { HeaderTitle, SpanText } from '../lib/Texts';

export const TodoHeader = ({projectName}) => {

  return(
    <HeaderContainer>
      <HeaderContent>
        <HeaderTitle>{projectName}</HeaderTitle>
        <SpanText>{moment().format('MMMM Do')}</SpanText>
      </HeaderContent>
      <HeaderContent>
        <TodoSummary projectName={projectName} />
        <ClearButton projectName={projectName} />
      </HeaderContent>
    </HeaderContainer>
  )
};


