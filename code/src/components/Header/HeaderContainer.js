import React from 'react'
import AddTask from "./AddTask"
import FilterButton from 'components/Header/FilterButton'
import { Filters }  from 'reducers/FilterSlice'
import TaskSummary from 'components/Header/TaskSummary'
import styled from 'styled-components'


const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`;

const Top = styled.div `
  display: flex;  
`;

const FilterContainer = styled.div `
  width: 100%;
  border: 1px solid pink;
  align-self: flex-end;
`;

const HeaderContainer = () => {
  return (
    <Wrapper>
      <Top>
        <AddTask />
        <TaskSummary />
      </Top>
      <FilterContainer>
        <FilterButton filter={ Filters.SHOW_ALL }/>
        <FilterButton filter={ Filters.SHOW_COMPLETED }/>
        <FilterButton filter={ Filters.SHOW_ACTIVE }/>
      </FilterContainer>
    </Wrapper>
  )
}

export default HeaderContainer