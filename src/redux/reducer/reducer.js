import {combineReducers} from 'redux';

import AuthReducer from './AuthReducer';
import ScheduleReducer from './ScheduleReducer';
import userReducer from './UserReducer';
import RouteReducer from './RouteReducer';

export default combineReducers({
  scheduleReducer: ScheduleReducer,
  users: userReducer,
  route: RouteReducer,
  authData: AuthReducer,
});
