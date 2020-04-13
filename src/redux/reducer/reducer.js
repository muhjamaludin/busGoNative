import {combineReducers} from 'redux';

import AuthReducer from './AuthReducer';
import Schedules from './ScheduleReducer';
import Routes from './RoutesReducer';

export default combineReducers({
  schedules: Schedules,
  authData: AuthReducer,
  routes: Routes,
});
