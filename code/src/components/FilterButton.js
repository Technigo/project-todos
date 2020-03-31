import React from 'react'
import { connect } from 'react-redux'
import { setFilters } from '../reducers/FilterSlice'

const mapDispatch = { setFilters }


const FilterButton = ({ setFilters, filter }) => {
  return (
    <button onClick={() => setFilters(filter)}>{ filter }}</button>
  )
}

export default connect(
  null,
  mapDispatch
)(FilterButton)