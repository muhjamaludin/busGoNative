import {combineReducers} from 'redux';

import AuthReducer from './AuthReducer';
import ScheduleReducer from './ScheduleReducer';
import userReducer from './UserReducer';

export default combineReducers({
  scheduleReducer: ScheduleReducer,
  users: userReducer,
  authData: AuthReducer,
});
