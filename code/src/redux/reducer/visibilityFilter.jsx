import { SET_FILTER } from '../actionsTypes';
import { VISIBILITY_FILTER } from "../../constants"

const initialState = VISIBILITY_FILTER.INCOMPLETED; //THE FILTER DISPLAY THE ICOMPLETED TODOS AT THE BEGGINING 

const visibilityFilter = (state = initialState, action) => {
  switch(action.type) {
    case SET_FILTER: {
      return action.payload.filter
    }
    default: {
      return state
    }
  }
}

export default visibilityFilter;