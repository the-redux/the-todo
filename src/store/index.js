import { combineReducers } from 'redux';

import { todosReducer } from './todos/reducers';
import { visibilityFilterReducer } from './visibilityFilter/reducers';

export const rootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});
