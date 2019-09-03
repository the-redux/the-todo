import { combineReducers } from 'redux';

import todos from './todos/reducers';
import visibilityFilter from './visibilityFilter/reducers';

export default combineReducers({
  todos,
  visibilityFilter,
});
