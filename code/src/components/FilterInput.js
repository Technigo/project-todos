import React from 'react'
import { connect } from 'react-redux'
import { setFilters } from '../reducers/FilterSlice'
import styled from 'styled-components'

const mapDispatch = { setFilters }

const Wrapper = styled.span`
  position: relative;
`;

const FilteringInput = styled.input`
  display: none;
`;

const Label = styled.label`
    text-align: center;
    width: 64px;
    height: 64px;
    font-size: 12px;
    display: flex;
    align-items: center;
`;

const FilterInput= ({ setFilters, filter, children }) => {

  return (
    <Wrapper>
      <FilteringInput type="radio" name="filter" id={filter} value={filter} onChange={() => setFilters(filter)} />
      <Label htmlFor={filter} >{ children }</Label>
    </Wrapper>
  )
}

export default connect(
  null,
  mapDispatch
)(FilterInput)