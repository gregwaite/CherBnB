import { combineReducers } from 'redux';
import errorsReducer from './errors_reducer';
import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';

const rootReducer = combineReducers({
  errorsReducer,
  entitiesReducer,
  sessionReducer,
});

export default rootReducer;