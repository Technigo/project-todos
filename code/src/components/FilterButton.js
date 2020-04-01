import React from 'react'
import { connect } from 'react-redux'
import { setFilters } from '../reducers/FilterSlice'
import styled from 'styled-components'

const mapDispatch = { setFilters }

const FilteringButton = styled.button`
  height: 64px;
  width: 128px;
  border-radius: 0;
  font-size: 16px;
`;

const FilterButton = ({ setFilters, filter, children }) => {
  return (
    <FilteringButton onClick={() => setFilters(filter)}>{ children }</FilteringButton>
  )
}

export default connect(
  null,
  mapDispatch
)(FilterButton)