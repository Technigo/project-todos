import React from 'react'

import FilterThumb from './FilterThumb'

const FiltersList = ({ filters }) => {
  return (
    <>
      <p className="filter-headline">Filter your to do list!</p>
      <div className="filters-container">
        {filters.map((filter) => <FilterThumb key={filter.id} filter={filter} />)}
      </div>
    </>
  )
}
export default FiltersList