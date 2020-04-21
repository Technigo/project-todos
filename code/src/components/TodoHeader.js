import React from 'react';
import { ClearButton } from './ClearButton';
import { TodoSummary } from './TodoSummary';
import moment from 'moment';
import styled from 'styled-components';

export const TodoHeader = ({projectName}) => {

  return(
    <HeaderContainer>
      <div>
        <ListName>{projectName}</ListName>
        <h2>{moment().format('MMMM Do')}</h2>
      </div>
      <div>
        <TodoSummary projectName={projectName} />
        <ClearButton projectName={projectName} />
      </div>
    </HeaderContainer>
  )
};

const HeaderContainer = styled.section`
  display: flex;
  flex-driection: row; 
  justify-content: space-between;
`

const HeaderContent = styled.div`
  display: flex;
  flex-driection: column;
`

const ListName = styled.h1`

`
