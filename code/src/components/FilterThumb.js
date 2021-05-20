import React from 'react'
import { useDispatch } from 'react-redux'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles, ThemeProvider, createMuiTheme } from '@material-ui/core/styles'


import todo from '../reducers/todo'

const BlueSwitch = withStyles(() => ({
  switchBase: {
    color: "#415ab5",
    '&$checked': {
      color: "#3650af",
    },
    '&$checked + $track': {
      backgroundColor: "#3650af",
    },
  },
  checked: {},
  track: {},
}
))(Switch)

const theme = createMuiTheme({
  typography: {
    body1: {
      fontFamily: "Comfortaa",
      fontWeight: 400,
      fontSize: 14,
    }
  }
})

const FilterThumb = ({ filter }) => {
  const dispatch = useDispatch()
  return (
    <ThemeProvider theme={theme}>
      <FormControlLabel
        control={
          <BlueSwitch
            checked={filter.status}
            onChange={() => dispatch(todo.actions.toggleFilter(filter.id))}
            name="filter"

          />
        }
        label={filter.name}
      />
    </ThemeProvider>
  )
}
export default FilterThumb