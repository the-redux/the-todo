import { VisibilityFilter, SET_VISIBILITY_FILTER } from "./actions";

const initialState = VisibilityFilter.SHOW_ALL;

function visibilityFilter(state = initialState, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
}

export default visibilityFilter;
